import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { FaQuestion } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import "leaflet/dist/leaflet.css";
import { bulbOutline, callOutline, homeOutline } from "ionicons/icons";
import Tab1 from "./pages/HomeTab";
import Tab2 from "./pages/AboutTab";
import Tab3 from "./pages/ContactTab";
import PartnersPage from "./pages/PartnersPage";
import AgendaPage from "./pages/AgendaPage";
import FAQPage from "./pages/FAQPage";
import MapEventsPage from "./pages/MapEventsPage";
import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import Menu from "./components/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
/* import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css"; */

/* Theme variables */
import "./theme/variables.css";
import "./index.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Tab1 />
          </Route>
          <Route path="/faq" component={FAQPage} />
          <Route path="/agenda" component={AgendaPage} />
          <Route path="/partners" component={PartnersPage} exact />
          <Route path="/calendar" component={CalendarPage} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="class">
          <IonTabButton tab="HomeTab" href="/" className="class">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="partners" href="/partners" className="class">
            <IonIcon icon={callOutline} />
            <IonLabel>partners</IonLabel>
          </IonTabButton>
          <IonTabButton tab="agenda" href="/agenda" className="class">
            <IonIcon icon={bulbOutline} />
            <IonLabel>agenda</IonLabel>
          </IonTabButton>
          <IonTabButton tab="faq" href="/faq" className="class">
            <FaQuestion />
            <IonLabel>FAQ</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
