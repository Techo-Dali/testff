// src/pages/FAQPage.tsx
import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./FAQPage.css"; // Import CSS for styling

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What is this application about?",
    answer:
      "This application provides a platform to manage and view events, including schedules and partner information.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support through our contact form on the website or by emailing support@example.com.",
  },
  {
    question: "How do I create an account?",
    answer:
      'Click on the "Sign Up" button on the homepage and fill in the required information to create an account.',
  },
  {
    question: "What are the payment methods?",
    answer:
      "We accept various payment methods including credit/debit cards and PayPal.",
  },
  // Add more FAQs as needed
];

const FAQPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>FAQ</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonAccordionGroup>
        {faqData.map((faq, index) => (
          <IonAccordion key={index} value={index.toString()}>
            <IonItem slot="header">
              <IonLabel>{faq.question}</IonLabel>
            </IonItem>
            <div className="faq-answer">
              <IonLabel>{faq.answer}</IonLabel>
            </div>
          </IonAccordion>
        ))}
      </IonAccordionGroup>
    </IonContent>
  </IonPage>
);

export default FAQPage;
