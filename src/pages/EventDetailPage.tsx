import React from "react";
import { useParams } from "react-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import moment from "moment";

const events = [
  {
    id: 0,
    title: "Board meeting",
    description: "Discuss quarterly results",
    start: new Date(2024, 7, 7, 9, 0),
    end: new Date(2024, 7, 7, 13, 0),
  },
  {
    id: 1,
    title: "MS conference",
    description: "Annual MS conference",
    start: new Date(2024, 7, 12, 11, 0),
    end: new Date(2024, 7, 12, 14, 0),
  },
  {
    id: 2,
    title: "Birthday Party",
    description: "Celebrate the birthday",
    start: new Date(2024, 7, 13, 7, 0),
    end: new Date(2024, 7, 13, 10, 30),
  },
];

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{event.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: "20px" }}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>
            <strong>Start:</strong>{" "}
            {moment(event.start).format("MMMM Do YYYY, h:mm a")}
          </p>
          <p>
            <strong>End:</strong>{" "}
            {moment(event.end).format("MMMM Do YYYY, h:mm a")}
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EventDetailPage;
