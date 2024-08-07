// src/pages/PartnersPage.tsx
import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Partners from "../components/Partners";

const partnersData = [
  {
    name: "Partner 1",
    logo: "https://via.placeholder.com/300x150?text=Partner+1",
    website: "https://partner1.com",
  },
  {
    name: "Partner 2",
    logo: "https://via.placeholder.com/300x150?text=Partner+2",
    website: "https://partner2.com",
  },
  {
    name: "Partner 3",
    logo: "https://via.placeholder.com/300x150?text=Partner+3",
    website: "https://partner3.com",
  },
  // Add more partners as needed
];

const PartnersPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Our Partners</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <Partners partners={partnersData} />
    </IonContent>
  </IonPage>
);

export default PartnersPage;
