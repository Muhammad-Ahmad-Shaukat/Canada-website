"use client"

import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const FlightMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const canadaCoords = [-106.3468, 56.1304];
    const jazanCoords = [42.5615, 16.8943];

    if (mapContainerRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: `https://api.maptiler.com/maps/streets/style.json?key=KkHRsbs9R0fjktLV9IxP`,
        center: [-25, 35],
        zoom: 1,
        attributionControl: false,
      });

      map.addControl(new maplibregl.NavigationControl(), 'top-right');

      map.on('load', () => {
        // Coordinates for the route
        const curvedCoords = [
          canadaCoords,
          jazanCoords
        ];

        map.addSource('route', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': curvedCoords
            }
          }
        });

        // Add the line layer
        map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#0f3b52',
            'line-width': 4
          }
        });

        // Add a marker for Canada
        new maplibregl.Marker({ color: '#0f3b52' })
          .setLngLat(canadaCoords)
          .setPopup(new maplibregl.Popup({ offset: 25 }).setText('Canada, North America'))
          .addTo(map);

        // Add a marker for Jazan
        new maplibregl.Marker({ color: '#0f3b52' })
          .setLngLat(jazanCoords)
          .setPopup(new maplibregl.Popup({ offset: 25 }).setText('Jazan, Saudi Arabia'))
          .addTo(map);
      });
    }

    // Clean up on component unmount
    return () => {
      if (mapContainerRef.current) {
        mapContainerRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full rounded-md"
      style={{ minHeight: '500px' }}
    ></div>
  );
};

export default FlightMap;
