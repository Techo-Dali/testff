// src/pages/AgendaPage.tsx
import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

interface Event {
  time: string;
  title: string;
  description: string;
}

const agendaData: Event[] = [
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome and opening remarks.",
  },
  {
    time: "10:00 AM",
    title: "Keynote Speech",
    description: "Inspiring keynote speech by our guest speaker.",
  },
  {
    time: "11:00 AM",
    title: "Workshop: Innovation",
    description: "Hands-on workshop on the latest trends in innovation.",
  },
  {
    time: "12:30 PM",
    title: "Lunch Break",
    description: "Networking and lunch.",
  },
  {
    time: "02:00 PM",
    title: "Panel Discussion",
    description: "Discussion with industry experts on current challenges.",
  },
  {
    time: "03:30 PM",
    title: "Networking Session",
    description: "Opportunities to network with other attendees.",
  },
  {
    time: "05:00 PM",
    title: "Closing Remarks",
    description: "Wrap-up and closing of the event.",
  },
];

const AgendaPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Event Agenda</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {agendaData.map((event, index) => (
          <IonItem key={index}>
            <IonLabel>
              <h2>
                {event.time} - {event.title}
              </h2>
              <p>{event.description}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  </IonPage>
);

export default AgendaPage;
