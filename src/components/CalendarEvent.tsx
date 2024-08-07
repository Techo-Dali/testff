import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonText,
} from "@ionic/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarEvent.css";

const localizer = momentLocalizer(moment);

interface MyEvent extends Event {
  description: string;
}

const events: MyEvent[] = [
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

const CalendarEvent: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleSelectEvent = (event: MyEvent) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleMoreInfo = () => {
    if (selectedEvent) {
      history.push(`/event/${selectedEvent.id}`);
      closeModal();
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />

      <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Event Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selectedEvent && (
            <div className="event-details">
              <IonText>
                <h2>{selectedEvent.title}</h2>
                <p>{selectedEvent.description}</p>
                <p>
                  <strong>Start:</strong>{" "}
                  {moment(selectedEvent.start).format("MMMM Do YYYY, h:mm a")}
                </p>
                <p>
                  <strong>End:</strong>{" "}
                  {moment(selectedEvent.end).format("MMMM Do YYYY, h:mm a")}
                </p>
              </IonText>
              <IonButton onClick={closeModal}>Close</IonButton>
              <IonButton onClick={handleMoreInfo}>More Info</IonButton>
            </div>
          )}
        </IonContent>
      </IonModal>
    </div>
  );
};

export default CalendarEvent;
