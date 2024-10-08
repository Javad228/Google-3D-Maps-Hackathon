"use client";
import { useState, useCallback, useEffect } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { Map3D } from "./map-3d";

export default function Home() {
  const INITIAL_VIEW_PROPS = {
    center: {lat: 37.72809, lng: -119.64473, altitude: 1300},
    range: 5000,
    heading: 61,
    tilt: 69,
    roll: 0
  };

  const [viewProps, setViewProps] = useState(INITIAL_VIEW_PROPS);

  const handleCameraChange = useCallback((props) => {
    setViewProps(oldProps => ({...oldProps, ...props}));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Google Photorealistic 3D Maps Challenge
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} version={'alpha'}>
        <Map3D
          {...viewProps}
          onCameraChange={handleCameraChange}
          defaultLabelsDisabled
        />
      </APIProvider>
    </div>
  );
}
