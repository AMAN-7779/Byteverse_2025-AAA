// import React, { useState } from 'react';
// import axios from 'axios';

// function TrafficPredictionPage() {
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [trafficData, setTrafficData] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/predict-traffic', {
//                 source,
//                 destination
//             });
//             setTrafficData(response.data.traffic_data);
//         } catch (error) {
//             console.error('Error fetching traffic data:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Traffic Prediction</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
//                 <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
//                 <button type="submit">Predict Traffic</button>
//             </form>

//             {trafficData && (
//                 <div>
//                     <h2>Traffic Data:</h2>
//                     <pre>{JSON.stringify(trafficData, null, 2)}</pre>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TrafficPredictionPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// const TrafficPredictionPage = () => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [trafficData, setTrafficData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setTrafficData(null);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/predict-traffic', {
//         source,
//         destination,
//       });

//       setTrafficData(response.data.traffic_data);
//     } catch (err) {
//       console.error('Error fetching traffic data:', err);
//       setError('Failed to fetch traffic data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Traffic Prediction</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
//       >
//         <input
//           type="text"
//           placeholder="Source"
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           {loading ? 'Predicting...' : 'Predict Traffic'}
//         </button>
//       </form>

//       {error && (
//         <div className="mt-4 text-red-600">{error}</div>
//       )}

//       {trafficData && (
//         <div className="mt-8 bg-white p-4 rounded-xl shadow-md w-full max-w-md">
//           <h2 className="text-xl font-semibold mb-2 text-gray-700">Traffic Data:</h2>
//           <pre className="text-sm text-gray-600">{JSON.stringify(trafficData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrafficPredictionPage;

// import React, { useState } from 'react';
// import MapComponent from './MapComponent';
// import axios from 'axios';

// function TrafficPredictionPage() {
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [trafficData, setTrafficData] = useState(null);
//     const [mapUrl, setMapUrl] = useState('');
//     const [routes, setRoutes] = useState([]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/predict-traffic', {
//                 source,
//                 destination
//             });
//             const trafficInfo = response.data.traffic_data;
//             setTrafficData(trafficInfo);

//             // Generate map URL with source and destination
//             const baseMapUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBO2W9PtOL2LWXgUAj0MieNLZa0rsVAFWg&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&mode=driving`;
//             setMapUrl(baseMapUrl);

//             // Dummy alternative routes (You can make this dynamic from backend later)
//             setRoutes([
//                 {
//                     name: 'Alternative Route 1',
//                     url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&travelmode=driving&waypoints=Patna`,
//                     distance: trafficInfo.distance,
//                     duration: trafficInfo.duration
//                 },
//                 {
//                     name: 'Alternative Route 2',
//                     url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&travelmode=driving&waypoints=Gaya`,
//                     distance: trafficInfo.distance,
//                     duration: trafficInfo.duration
//                 }
//             ]);
//         } catch (error) {
//             console.error('Error fetching traffic data:', error);
//         }
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>Real-Time Traffic Between Two Locations</h1>
//             <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//                 <input
//                     type="text"
//                     placeholder="Source"
//                     value={source}
//                     onChange={(e) => setSource(e.target.value)}
//                     style={{ marginRight: '10px' }}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Destination"
//                     value={destination}
//                     onChange={(e) => setDestination(e.target.value)}
//                     style={{ marginRight: '10px' }}
//                 />
//                 <button type="submit">Predict Traffic</button>
//             </form>

//             {trafficData && (
//                 <div>
//                     <h2>Traffic Data:</h2>
//                     <p><strong>Distance(in meter):</strong> {trafficData.distance}</p>
//                     <p><strong>Estimated Time(in seconds):</strong> {trafficData.duration}</p>
//                 </div>
//             )}

//             {mapUrl && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h2>Route Map:</h2>
//                     <iframe
//                         title="Route Map"
//                         width="100%"
//                         height="450"
//                         frameBorder="0"
//                         style={{ border: 0 }}
//                         src={mapUrl}
//                         allowFullScreen
//                     />
//                 </div>
//             )}

//             {routes.length > 0 && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h2>Alternative Routes:</h2>
//                     {routes.map((route, index) => (
//                         <div key={index} style={{ marginBottom: '10px' }}>
//                             <p><strong>{route.name}</strong></p>
//                             <p>Distance: {route.distance}</p>
//                             <p>Estimated Time: {route.duration}</p>
//                             <button onClick={() => window.open(route.url, '_blank')}>View {route.name}</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TrafficPredictionPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// function TrafficPredictionPage() {
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [trafficData, setTrafficData] = useState(null);
//     const [mapUrl, setMapUrl] = useState('');
//     const [routes, setRoutes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         setTrafficData(null);
//         setMapUrl('');
//         setRoutes([]);

//         try {
//             const response = await axios.post('http://127.0.0.1:5000/predict-traffic', {
//                 source,
//                 destination
//             });

//             const trafficInfo = response.data.traffic_data;
//             setTrafficData(trafficInfo);

//             const baseMapUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBO2W9PtOL2LWXgUAj0MieNLZa0rsVAFWg&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&mode=driving`;
//             setMapUrl(baseMapUrl);

//             setRoutes([
//                 {
//                     name: 'Alternative Route 1',
//                     url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&travelmode=driving&waypoints=Patna`,
//                     distance: trafficInfo.distance,
//                     duration: trafficInfo.duration
//                 },
//                 {
//                     name: 'Alternative Route 2',
//                     url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&travelmode=driving&waypoints=Gaya`,
//                     distance: trafficInfo.distance,
//                     duration: trafficInfo.duration
//                 }
//             ]);
//         } catch (err) {
//             console.error('Error fetching traffic data:', err);
//             setError('Failed to fetch traffic data. Please check your inputs and try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//             <h1>🚦 Real-Time Traffic Prediction</h1>
//             <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//                 <input
//                     type="text"
//                     placeholder="Source"
//                     value={source}
//                     onChange={(e) => setSource(e.target.value)}
//                     style={{ marginRight: '10px', padding: '8px' }}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Destination"
//                     value={destination}
//                     onChange={(e) => setDestination(e.target.value)}
//                     style={{ marginRight: '10px', padding: '8px' }}
//                     required
//                 />
//                 <button type="submit" disabled={loading} style={{ padding: '8px 16px', cursor: loading ? 'not-allowed' : 'pointer' }}>
//                     {loading ? 'Predicting...' : 'Predict Traffic'}
//                 </button>
//             </form>

//             {error && (
//                 <div style={{ color: 'red', marginBottom: '20px' }}>
//                     {error}
//                 </div>
//             )}

//             {trafficData && (
//                 <div>
//                     <h2>🛣️ Traffic Data:</h2>
//                     <p><strong>Distance(in meter):</strong> {trafficData.distance}</p>
//                     <p><strong>Estimated Time(in seconds):</strong> {trafficData.duration}</p>
//                 </div>
//             )}

//             {mapUrl && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h2>🗺️ Route Map:</h2>
//                     <iframe
//                         title="Route Map"
//                         width="100%"
//                         height="450"
//                         frameBorder="0"
//                         style={{ border: 0 }}
//                         src={mapUrl}
//                         allowFullScreen
//                     />
//                 </div>
//             )}

//             {routes.length > 0 && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h2>🚗 Alternative Routes:</h2>
//                     {routes.map((route, index) => (
//                         <div key={index} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
//                             <p><strong>{route.name}</strong></p>
//                             <p>Distance: {route.distance}</p>
//                             <p>Estimated Time: {route.duration}</p>
//                             <button onClick={() => window.open(route.url, '_blank')} style={{ padding: '6px 12px' }}>
//                                 View {route.name}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TrafficPredictionPage;

// import React, { useState } from 'react';
// import MapComponent from './MapComponent';
// import axios from 'axios';

// function TrafficPredictionPage() {
//     const [source, setSource] = useState('');
//     const [destination, setDestination] = useState('');
//     const [trafficData, setTrafficData] = useState(null);
//     const [mapUrl, setMapUrl] = useState('');
//     const [routes, setRoutes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         setTrafficData(null);
//         setRoutes([]);
//         setMapUrl('');

//         try {
//             const response = await axios.post('http://127.0.0.1:5000/predict-traffic', {
//                 source,
//                 destination
//             });

//             const trafficInfo = response.data.traffic_data;

//             if (!trafficInfo) {
//                 setError('No traffic data received from the server.');
//                 setLoading(false);
//                 return;
//             }

//             setTrafficData(trafficInfo);

//             // Main map URL
//             const baseMapUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBO2W9PtOL2LWXgUAj0MieNLZa0rsVAFWg&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&mode=driving`;
//             setMapUrl(baseMapUrl);

//             // Alternative Routes (Dynamic structure ready — for now, static waypoints)
//             const alternativeRoutes = [
//                 {
//                     name: 'Alternative Route 1',
//                     url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&travelmode=driving&waypoints=Patna`,
//                     distance: trafficInfo.distance,
//                     duration: trafficInfo.duration
//                 },
//                 {
//                     name: 'Alternative Route 2',
//                     url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&travelmode=driving&waypoints=Gaya`,
//                     distance: trafficInfo.distance,
//                     duration: trafficInfo.duration
//                 }
//             ];

//             setRoutes(alternativeRoutes);
//         } catch (error) {
//             console.error('Error fetching traffic data:', error);
//             setError('Failed to fetch traffic data. Please check your inputs or try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>Real-Time Traffic Between Two Locations 🚦</h1>

//             <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//                 <input
//                     type="text"
//                     placeholder="Source"
//                     value={source}
//                     onChange={(e) => setSource(e.target.value)}
//                     style={{ marginRight: '10px' }}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Destination"
//                     value={destination}
//                     onChange={(e) => setDestination(e.target.value)}
//                     style={{ marginRight: '10px' }}
//                     required
//                 />
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Predicting...' : 'Predict Traffic'}
//                 </button>
//             </form>

//             {error && (
//                 <div style={{ color: 'red', marginBottom: '20px' }}>
//                     <strong>{error}</strong>
//                 </div>
//             )}

//             {trafficData && (
//                 <div>
//                     <h2>Traffic Data:</h2>
//                     <p><strong>Distance (meters):</strong> {trafficData.distance}</p>
//                     <p><strong>Estimated Time (seconds):</strong> {trafficData.duration}</p>
//                 </div>
//             )}

//             {mapUrl && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h2>Route Map:</h2>
//                     <iframe
//                         title="Route Map"
//                         width="100%"
//                         height="450"
//                         frameBorder="0"
//                         style={{ border: 0 }}
//                         src={mapUrl}
//                         allowFullScreen
//                     />
//                 </div>
//             )}

//             {routes.length > 0 && (
//                 <div style={{ marginTop: '20px' }}>
//                     <h2>Alternative Routes:</h2>
//                     {routes.map((route, index) => (
//                         <div key={index} style={{ marginBottom: '10px' }}>
//                             <p><strong>{route.name}</strong></p>
//                             <p>Distance: {route.distance}</p>
//                             <p>Estimated Time: {route.duration}</p>
//                             <button onClick={() => window.open(route.url, '_blank')}>
//                                 View {route.name}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TrafficPredictionPage;

import React, { useState, useRef } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import axios from "axios";

// ✅ Google Maps API Key
const googleMapsApiKey = ;

function TrafficPredictionPage() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [trafficData, setTrafficData] = useState(null);
  const [mapUrl, setMapUrl] = useState("");
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sourceRef = useRef(null);
  const destinationRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTrafficData(null);
    setRoutes([]);
    setMapUrl("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict-traffic",
        {
          source,
          destination,
        }
      );

      const trafficInfo = response.data.traffic_data;

      if (!trafficInfo) {
        setError("No traffic data received from the server.");
        setLoading(false);
        return;
      }

      setTrafficData(trafficInfo);

      const baseMapUrl = `https://www.google.com/maps/embed/v1/directions?key=${googleMapsApiKey}&origin=${encodeURIComponent(
        source
      )}&destination=${encodeURIComponent(destination)}&mode=driving`;
      setMapUrl(baseMapUrl);

      const alternativeRoutes = [
        {
          name: "Alternative Route 1",
          url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            source
          )}&destination=${encodeURIComponent(
            destination
          )}&travelmode=driving&waypoints=Patna`,
          distance: trafficInfo.distance,
          duration: trafficInfo.duration,
        },
        {
          name: "Alternative Route 2",
          url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            source
          )}&destination=${encodeURIComponent(
            destination
          )}&travelmode=driving&waypoints=Gaya`,
          distance: trafficInfo.distance,
          duration: trafficInfo.duration,
        },
      ];

      setRoutes(alternativeRoutes);
    } catch (error) {
      console.error("Error fetching traffic data:", error);
      setError(
        "Failed to fetch traffic data. Please check your inputs or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAlternativeRouteClick = (route) => {
    const routeUrl = `https://www.google.com/maps/embed/v1/directions?key=${googleMapsApiKey}&origin=${encodeURIComponent(
      source
    )}&destination=${encodeURIComponent(destination)}&mode=driving&waypoints=${
      route.name.includes("1") ? "Patna" : "Gaya"
    }`;
    setMapUrl(routeUrl);
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "Segoe UI, sans-serif",
          background: "linear-gradient(to right, #e0eafc, #cfdef3)",
          color: "#333",
        }}
      >
        {/* 🔥 Heading */}
        <div
          style={{
            background: "linear-gradient(90deg, #0d47a1, #1976d2)",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "2rem", letterSpacing: "1px" }}>
            🚦 Realtime Traffic and Prediction 🚗
          </h1>
        </div>

        {/* 🚘 Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Autocomplete
            onLoad={(autocomplete) => (sourceRef.current = autocomplete)}
            onPlaceChanged={() =>
              setSource(sourceRef.current.getPlace().formatted_address)
            }
          >
            <input
              type="text"
              placeholder="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "200px",
              }}
              required
            />
          </Autocomplete>
          <Autocomplete
            onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
            onPlaceChanged={() =>
              setDestination(
                destinationRef.current.getPlace().formatted_address
              )
            }
          >
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "200px",
              }}
              required
            />
          </Autocomplete>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {loading ? "Predicting..." : "Predict Traffic"}
          </button>
        </form>

        {error && (
          <div
            style={{ color: "red", textAlign: "center", marginBottom: "10px" }}
          >
            <strong>{error}</strong>
          </div>
        )}

        {/* 🔄 Spinner */}
        {loading && (
          <div style={{ textAlign: "center", fontSize: "18px" }}>
            <div className="spinner" style={{ marginBottom: "10px" }}>
              ⏳
            </div>
            Please wait while we predict traffic...
          </div>
        )}

        {/* 🗺️ Main Content */}
        {!loading && (
          <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            <div style={{ flex: 3 }}>
              {mapUrl && (
                <iframe
                  title="Route Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={mapUrl}
                  allowFullScreen
                />
              )}
            </div>

            <div
              style={{
                flex: 1,
                padding: "20px",
                overflowY: "auto",
                backgroundColor: "#ffffffd0",
              }}
            >
              {trafficData && (
                <div>
                  <h2 style={{ marginBottom: "10px" }}>🚗 Traffic Data:</h2>
                  <p>
                    <strong>Distance (meters):</strong> {trafficData.distance}
                  </p>
                  <p>
                    <strong>Estimated Time (seconds):</strong>{" "}
                    {trafficData.duration}
                  </p>
                </div>
              )}

              {routes.length > 0 && (
                <div>
                  <h2 style={{ marginTop: "20px" }}>🛣️ Alternative Routes:</h2>
                  {routes.map((route, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#f1f5f9",
                        padding: "10px",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      <p>
                        <strong>{route.name}</strong>
                      </p>
                      <p>Distance: {route.distance}</p>
                      <p>Estimated Time: {route.duration}</p>
                      <button
                        onClick={() => handleAlternativeRouteClick(route)}
                        style={{
                          padding: "6px 12px",
                          border: "none",
                          backgroundColor: "#10b981",
                          color: "white",
                          borderRadius: "4px",
                          cursor: "pointer",
                          marginTop: "5px",
                        }}
                      >
                        View {route.name}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </LoadScript>
  );
}

export default TrafficPredictionPage;
