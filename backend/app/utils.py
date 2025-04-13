import os
import requests
# from dotenv import load_dotenv

# load_dotenv()
# os.getenv()
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

def get_traffic_prediction(source, destination):
    url = (
        f"https://maps.googleapis.com/maps/api/directions/json"
        f"?origin={source}&destination={destination}&key=AIzaSyBO2W9PtOL2LWXgUAj0MieNLZa0rsVAFWg"
    )

    response = requests.get(url)
    data = response.json()
    print(data)
    if data['status'] != 'OK':
        raise Exception("Google Maps API error: " + data['status'])

    # Simple extraction — you can add more fields
    duration = data['routes'][0]['legs'][0]['duration']['value']  # in seconds
    distance = data['routes'][0]['legs'][0]['distance']['value']  # in meters

    return {
        'duration': duration,
        'distance': distance
    }







