import React from "react";
import {
  IonContent,
  IonList,
  IonItem,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Menu: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonMenu side="start" menuId="main-menu" contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button onClick={() => navigateTo("/home")}>
            Home
          </IonItem>
          <IonItem button onClick={() => navigateTo("/calendar")}>
            Calendar
          </IonItem>
          <IonItem button onClick={() => navigateTo("/event/1")}>
            Event Details
          </IonItem>
          <IonItem button onClick={() => navigateTo("/faq")}>
            FAQ
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
