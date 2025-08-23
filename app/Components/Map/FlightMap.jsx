"use client";

import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const FlightMap = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const canadaCoords = [-106.3468, 56.1304];
  const jazanCoords = [42.5615, 16.8943];

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: `https://api.maptiler.com/maps/streets/style.json?key=KkHRsbs9R0fjktLV9IxP`,
        center: [-25, 35],
        zoom: 1,
        attributionControl: false, // disable built-in attribution
        interactive: true,
      });

      mapInstanceRef.current = map;

      map.addControl(new maplibregl.NavigationControl(), "top-right");

      map.on("load", () => {
        setIsLoaded(true);

        const curvedCoords = [canadaCoords, jazanCoords];

        if (!map.getSource("route")) {
          map.addSource("route", {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: curvedCoords,
              },
            },
          });
        }

        if (!map.getLayer("route")) {
          map.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#0f3b52",
              "line-width": 4,
            },
          });
        }

        // Add markers
        new maplibregl.Marker({ color: "#0f3b52" })
          .setLngLat(canadaCoords)
          .setPopup(
            new maplibregl.Popup({ offset: 25 }).setHTML(
              "<strong>Canada</strong><br>North America"
            )
          )
          .addTo(map);

        new maplibregl.Marker({ color: "#0f3b52" })
          .setLngLat(jazanCoords)
          .setPopup(
            new maplibregl.Popup({ offset: 25 }).setHTML(
              "<strong>Jazan</strong><br>Saudi Arabia"
            )
          )
          .addTo(map);
      });

      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
      };
    }
  }, []);

  return (
    <section className="flight-map-wrapper" style={{ position: "relative" }}>
      <h2 className="sr-only">
        Flight Route Map: Canada to Jazan, Saudi Arabia
      </h2>

      {/* Interactive map container */}
      <div
        ref={mapContainerRef}
        className="w-full rounded-md shadow-md"
        style={{ minHeight: "500px" }}
        aria-label="Interactive map showing flight route from Canada to Jazan, Saudi Arabia"
        aria-busy={!isLoaded}
        role="application"
      />

      {/* Loading / fallback state */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          style={{
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            color: "#333",
            padding: "20px",
            textAlign: "center",
            fontSize: "16px",
            borderRadius: "6px",
          }}
        >
          <div>
            <p>
              <strong>Flight Route:</strong> Canada → Jazan, Saudi Arabia
            </p>
            <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>
              Loading interactive map...
            </p>
          </div>
        </div>
      )}

      <noscript>
        <p>
          Flight route from <strong>Canada</strong> to{" "}
          <strong>Jazan, Saudi Arabia</strong>. This interactive map requires
          JavaScript enabled.
        </p>
      </noscript>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Flight",
            name: "Flight Route from Canada to Jazan, Saudi Arabia",
            description:
              "An interactive map displaying the flight path between Canada and Jazan, Saudi Arabia.",
            departureAirport: {
              "@type": "Place",
              name: "Canada",
              geo: { "@type": "GeoCoordinates", latitude: 56.1304, longitude: -106.3468 },
            },
            arrivalAirport: {
              "@type": "Place",
              name: "Jazan, Saudi Arabia",
              geo: { "@type": "GeoCoordinates", latitude: 16.8943, longitude: 42.5615 },
            },
            provider: {
              "@type": "Organization",
              name: "SAUCAN",
              url: "https://saucan.ca",
            },
          }),
        }}
      />

      {/* Styles */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .maplibregl-ctrl-attrib {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default FlightMap;