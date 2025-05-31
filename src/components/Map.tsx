import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map("map").setView([48.5, 15], 4);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(mapRef.current);
        }

        // Donau
        fetch("/donau-fixed.geojson")
            .then((res) => res.json())
            .then((data) => {
                L.geoJSON(data, {
                    style: { color: "blue", weight: 4 },
                })
                    .bindPopup("Donau")
                    .addTo(mapRef.current!);
            });

        // Main
        fetch("/main.geojson")
            .then((res) => res.json())
            .then((data) => {
                L.geoJSON(data, {
                    style: { color: "purple", weight: 4 },
                })
                    .bindPopup("Main")
                    .addTo(mapRef.current!);
            });
    }, []);

    return <div id='map' className='w-full h-full' />;
}
