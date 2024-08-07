import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import EventSlider from "../components/EventSlider";
import EventCalendar from "../components/CalendarEvent";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonImg
            src="https://events.hardscaper.com/wp-content/uploads/2021/11/Logo_Hardscaper-showcase_presented-by_EN-ai-1.png"
            className="logo"
            alt="Logo"
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <EventSlider />
        <EventCalendar />
      </IonContent>
    </IonPage>
  );
};

export default Home;
