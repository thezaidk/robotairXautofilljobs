import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapComponentProps {
  center?: [number, number];
  zoom?: number;
  locations?: Array<{ lat: number; lng: number; popupText?: string }>;
}

const LiveMap: React.FC<MapComponentProps> = ({
  center = [51.505, -0.09],
  zoom = 13,
  locations = [],
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstanceRef.current);
    }

    if (mapInstanceRef.current) {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      locations.forEach((location) => {
        const marker = L.marker([location.lat, location.lng])
          .addTo(mapInstanceRef.current as L.Map)
          .bindPopup(location.popupText || 'Marker');

        markersRef.current.push(marker);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, locations]);

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className='w-[20rem] h-[15rem] md:w-[40rem] md:h-[25rem] lg:w-[65rem] lg:h-[30rem]'>
        <div
          ref={mapRef}
          className='w-full h-full rounded-lg'
        />
      </div>
      <div className="flex">
        <p className="p-1 font-bold text-red-500">Live Robot Location</p>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
        </span>
      </div>
    </div>
  );
};

export default LiveMap;
