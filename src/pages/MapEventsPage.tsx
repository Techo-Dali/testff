// src/pages/MapEventsPage.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./MapEventsPage.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

interface Event {
  id: number;
  title: string;
  position: {
    lat: number;
    lng: number;
  };
}

const events: Event[] = [
  { id: 1, title: "Event 1", position: { lat: 37.7749, lng: -122.4194 } },
  { id: 2, title: "Event 2", position: { lat: 34.0522, lng: -118.2437 } },
  { id: 3, title: "Event 3", position: { lat: 40.7128, lng: -74.006 } },
  // Add more events as needed
];

const MapEventsPage: React.FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    const getCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      setCurrentPosition({
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
      });
    };

    getCurrentPosition();
  }, []);

  const onLoad = (mapInstance: google.maps.Map) => {
    mapRef.current = mapInstance;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {currentPosition ? (
          <LoadScript googleMapsApiKey="AIzaSyAk_UsN3OK7rCVYDVgr57XXveoBJuYzB5Q">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={currentPosition}
              zoom={5}
              onLoad={onLoad}
            >
              <Marker position={currentPosition} />
              {events.map((event) => (
                <Marker
                  key={event.id}
                  position={event.position}
                  label={event.title}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        ) : (
          <div>Loading...</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MapEventsPage;
