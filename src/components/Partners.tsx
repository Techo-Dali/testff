// src/components/Partners.tsx
import React from "react";
import { IonCard, IonCardContent, IonImg, IonButton } from "@ionic/react";
import "./Partners.css"; // Import the CSS file for styling

interface Partner {
  name: string;
  logo: string;
  website: string;
}

interface PartnersProps {
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  return (
    <div className="partners-container">
      <h2 className="partners-heading">Our Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <IonCard key={index} className="partner-card">
            <IonImg src={partner.logo} className="partner-logo" />
            <IonCardContent>
              <h3 className="partner-name">{partner.name}</h3>
              <IonButton
                expand="full"
                fill="outline"
                href={partner.website}
                target="_blank"
              >
                Visit Website
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
    </div>
  );
};

export default Partners;
