import cv2
import mtcnn
import matplotlib.pyplot as plt

# Load the image
image_path = "BRT Daily people count.jpg"
frame = cv2.imread(image_path)

# Check if the image was loaded properly
if frame is None:
    print("Error: Image not found.")
    exit()

# Convert the image from BGR (OpenCV format) to RGB
frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

# Initialize the MTCNN face detector
detector = mtcnn.MTCNN()

# Detect faces in the image
faces = detector.detect_faces(frame_rgb)

# Initialize a counter for faces
i = 0

# Loop through each face detected
for face in faces:
    x, y, width, height = face['box']
    x1, y1 = x + width, y + height
    
    # Draw a rectangle around each face
    cv2.rectangle(frame_rgb, (x, y), (x1, y1), (0, 255, 0), 2)
    
    # Increment the face counter
    i += 1

    # Display the face number
    cv2.putText(frame_rgb, 'Face ' + str(i), (x, y - 10), 
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 0, 0), 2)
    
    # Print the face details
    print(f"Face {i}: {face}")

# Convert the image back to BGR for OpenCV
frame_bgr = cv2.cvtColor(frame_rgb, cv2.COLOR_RGB2BGR)

# Show the image with the face detections
cv2.imshow('Frame', frame_bgr)

cv2.waitKey(0)
cv2.destroyAllWindows()

# Print the number of faces detected
print(f"Number of faces detected: {len(faces)}")
