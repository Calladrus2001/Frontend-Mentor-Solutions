// Map.jsx
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({ x, y }) => {
  useEffect(() => {
    // Create the map
    const map = L.map("truly-random-map-id").setView([x,y], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([x,y]).addTo(map)
      .bindPopup('You are here')
      .openPopup();

    return () => {
      // Clean up the map when the component unmounts
      map.remove();
    };
  }, [x, y]);

  return <div id={"truly-random-map-id"} className='h-full w-full' />;
};

export default Map;
