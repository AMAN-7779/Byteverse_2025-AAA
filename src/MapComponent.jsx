// import { GoogleMap, DirectionsRenderer, useJsApiLoader, TrafficLayer } from '@react-google-maps/api';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function MapComponent({ origin, destination }) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_AIzaSyBO2W9PtOL2LWXgUAj0MieNLZa0rsVAFWg,
//   });

//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
//   const [trafficData, setTrafficData] = useState(null);

//   useEffect(() => {
//     if (!origin || !destination) return;

//     const directionsService = new window.google.maps.DirectionsService();

//     directionsService.route(
//       {
//         origin,
//         destination,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//         provideRouteAlternatives: true,
//       },
//       (result, status) => {
//         if (status === 'OK' && result) {
//           setDirectionsResponse(result);
//           fetchTrafficData(origin, destination);
//         } else {
//           console.error('Error fetching directions', status);
//         }
//       }
//     );
//   }, [origin, destination]);

//   const fetchTrafficData = async (origin, destination) => {
//     try {
//       const response = await axios.post('http://localhost:5000/predict-traffic', {
//         origin,
//         destination,
//       });
//       setTrafficData(response.data);
//     } catch (error) {
//       console.error('Error fetching traffic data', error);
//     }
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div>
//       <GoogleMap
//         center={{ lat: 25.6, lng: 85.1 }}
//         zoom={12}
//         mapContainerStyle={{ width: '100%', height: '500px' }}
//       >
//         <TrafficLayer autoUpdate />
//         {directionsResponse && (
//           <DirectionsRenderer
//             directions={directionsResponse}
//             routeIndex={selectedRouteIndex}
//             options={{
//               polylineOptions: { strokeColor: '#4a90e2', strokeWeight: 5 },
//             }}
//           />
//         )}
//       </GoogleMap>

//       <div className="route-options">
//         {directionsResponse?.routes.map((route, index) => (
//           <button key={index} onClick={() => setSelectedRouteIndex(index)}>
//             Route {index + 1}: {route.legs[0].distance.text}, {route.legs[0].duration.text}
//           </button>
//         ))}
//       </div>

//       {trafficData && (
//         <div className="traffic-info">
//           <h3>Traffic Prediction</h3>
//           <p>Congestion Level: {trafficData.congestion_level}</p>
//           <p>Expected Delay: {trafficData.expected_delay} minutes</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MapComponent;













import React, { useEffect, useRef } from 'react';

function MapComponent({ routes, selectedRouteIndex }) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!routes || routes.length === 0) return;

        const map = new window.google.maps.Map(mapRef.current, {
            zoom: 7,
            center: {
                lat: routes[0].legs[0].start_location.lat,
                lng: routes[0].legs[0].start_location.lng
            }
        });

        routes.forEach((route, index) => {
            const path = window.google.maps.geometry.encoding.decodePath(route.overview_polyline.points);
            const polyline = new window.google.maps.Polyline({
                path,
                geodesic: true,
                strokeColor: index === selectedRouteIndex ? '#FF0000' : '#00FF00',
                strokeOpacity: 0.8,
                strokeWeight: 4,
            });
            polyline.setMap(map);
        });

    }, [routes, selectedRouteIndex]);

    return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
}

export default MapComponent;
