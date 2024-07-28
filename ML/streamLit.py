import streamlit as st
import cv2
import mtcnn
import numpy as np
from PIL import Image
from pymongo import MongoClient
from dotenv import load_dotenv
import os
import gpxpy
from shapely.geometry import Polygon

# Load environment variables from .env file
load_dotenv()

# Get MongoDB URI from environment variable
MONGO_URI = os.getenv("MONGO_URI")
c = MongoClient(MONGO_URI)
d = c['test']
coll = d["sites"]
print(coll.distinct('name'))

# Initialize the MTCNN face detector
detector = mtcnn.MTCNN()

def detect_faces(image):
    # Convert the image from PIL format to OpenCV format
    image_cv = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    # Convert the image to RGB for MTCNN
    image_rgb = cv2.cvtColor(image_cv, cv2.COLOR_BGR2RGB)
    # Detect faces in the image
    faces = detector.detect_faces(image_rgb)
    # Loop through each face detected and draw rectangles
    for face in faces:
        x, y, width, height = face['box']
        x1, y1 = x + width, y + height
        cv2.rectangle(image_rgb, (x, y), (x1, y1), (0, 255, 0), 2)
        cv2.putText(image_rgb, 'Face', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 0, 0), 2)
    # Convert the image back to PIL format
    image_with_faces = Image.fromarray(cv2.cvtColor(image_rgb, cv2.COLOR_RGB2BGR))
    return image_with_faces, len(faces)

def update_people_in_site(site_name, new_people_count):
    # Use the MongoDB URI from environment variables
    client = MongoClient(MONGO_URI)
    db = client["test"]  # Replace with your database name
    collection = db["sites"]  # Replace with your collection name

    # Find the document with the given site name and update the 'num_faces' field
    result = collection.update_one(
        {"name": site_name}, 
        {"$set": {"people": new_people_count}}
    )

    client.close()

    if result.matched_count:
        return f"Updated {result.modified_count} document(s) for site '{site_name}'"
    else:
        return f"No documents matched the query for site '{site_name}'"

def update_area_info(site_name, coordinates):
    # Use the MongoDB URI from environment variables
    client = MongoClient(MONGO_URI)
    db = client["test"]  # Replace with your database name
    collection = db["sites"]  # Replace with your collection name

    # Calculate the area and centroid
    polygon = Polygon(coordinates)
    area = polygon.area  # Area in square degrees
    centroid = polygon.centroid

    # Update the document with the area and centroid information
    result = collection.update_one(
        {"name": site_name}, 
        {"$set": {"untapped_area": [area * 364000 * 288200, centroid.x, centroid.y]}}
    )

    client.close()

    if result.matched_count:
        return f"Updated {result.modified_count} document(s) with area and centroid for site '{site_name}'"
    else:
        return f"No documents matched the query for site '{site_name}'"

def parse_gpx_file(uploaded_file):
    content = uploaded_file.read()
    gpx = gpxpy.parse(content.decode('utf-8'))
    
    tracks = []
    for trk in gpx.tracks:
        for seg in trk.segments:
            points = [(pt.longitude, pt.latitude) for pt in seg.points]
            # Close the loop if not already closed
            if points and points[0] != points[-1]:
                points.append(points[0])
            tracks.append(points)
    
    # Flatten the list of tracks
    if tracks:
        return tracks[0]
    else:
        return []

st.title("Face Detection and Area Calculation App")
st.write("Upload an image to detect faces")

dropdown =coll.distinct('name')
# Dropdown for custom options
option = st.selectbox(
    'Select a site:',
    (site for site in dropdown)  # Replace with your actual site names
    , placeholder='Select Site',
    index=0
)

st.write(f'You selected: {option}')

gpx_file = st.file_uploader("Upload a GPX file", type=["gpx"])

if gpx_file is not None:
    coordinates = parse_gpx_file(gpx_file)
    
    if coordinates:
        # Update MongoDB with area information
        area_update_message = update_area_info(option, coordinates)
        st.write(area_update_message)
    else:
        st.write("No coordinates found in the GPX file")

uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption='Uploaded Image', use_column_width=True)
    
    st.write("Processing...")
    # Detect faces
    image_with_faces, num_faces = detect_faces(image)
    
    st.image(image_with_faces, caption='Processed Image with Faces', use_column_width=True)
    st.write(f"Total number of faces detected: {num_faces}")

    # Update MongoDB with number of faces
    update_message = update_people_in_site(option, num_faces)
    st.write(update_message)

