import gpxpy
import gpxpy.gpx
from shapely.geometry import Polygon

# Load the GPX file
with open('area.gpx', 'r') as file:
    gpx = gpxpy.parse(file)

# Extract track points and ensure closed loops
tracks = []
for trk in gpx.tracks:
    for seg in trk.segments:
        points = [(pt.longitude, pt.latitude) for pt in seg.points]
        # Close the loop if not already closed
        if points and points[0] != points[-1]:
            points.append(points[0])
        tracks.append(points)

# Process each track
for i, track in enumerate(tracks, start=1):
    # Create the polygon
    polygon = Polygon(track)
    
    # Check if the polygon is valid
    if not polygon.is_valid:
        print(f"Error: Polygon {i} is degenerate or invalid")
        continue
    
    # Calculate centroid and area
    centroid = polygon.centroid
    area = polygon.area  # Area in square degrees
    
    print(f"Polygon {i}:")
    print(f"  Area of polygon: {area * 364000 * 288200:.2f} square feet")  # Convert square degrees to square feet
    print(f"  Centroid (Longitude, Latitude): ({centroid.x:.6f}, {centroid.y:.6f})")
    print(f"  Coordinates of polygon: {track}")
    print()
