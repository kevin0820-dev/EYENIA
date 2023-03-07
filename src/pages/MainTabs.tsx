import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faMapMarkedAlt,  
  faListDots,
  faUserCircle,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import "./MainTabs.scss";
import Profile from "./Profile";
import Corte from "./Corte";
import Lists from "./Lists";
import Notifications from "./Notifications";


interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <>
          <Redirect exact path="/tabs" to="/tabs/corte" />
          {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
          <Route path="/tabs/corte" render={() => <Corte />} exact={true} />
          <Route path="/tabs/list" render={() => <Lists />} exact={true} />
          <Route path="/tabs/notification" render={() => <Notifications />} exact={true} />
        </>
      </IonRouterOutlet>
      <IonTabBar
        slot="bottom"
        className="h-14 border-t-2 border-[#333333] bg-[#333333]"
      >
        <IonTabButton tab="home" href="/tabs/corte" className="bg-[#333333]">
          <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
        </IonTabButton>
        <IonTabButton tab="list" href="/tabs/list" className="bg-[#333333]">
          <FontAwesomeIcon icon={faListDots} size="3x"  />
        </IonTabButton>
        <IonTabButton tab="notification" href="/tabs/notification" className="bg-[#333333]">
          <FontAwesomeIcon icon={faBell} size="3x" />
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile" className="bg-[#333333]">
          <FontAwesomeIcon icon={faUserCircle} size="3x"/>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
