import React from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToggle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonTitle
} from "@ionic/react";
import { connect } from "../data/connect";

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Notifications: React.FC<GroupsProps> = () => {

  return (
    <IonPage id="notification">
      <IonHeader>
        <IonToolbar style={{ textAlign: "center", paddingBottom: "30px"}} color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle style={{ fontSize: "16px", fontWeight: 600}}>Notification</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">
          <IonItem>
            <IonLabel>VIBRATION</IonLabel>
            <IonToggle color="success" slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>MOOVEMENT</IonLabel>
            <IonToggle color="success" slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>STOP</IonLabel>
            <IonToggle color="success" slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>ENTRER DE ZONE</IonLabel>
            <IonToggle color="success" slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>SORTI DE ZONE</IonLabel>
            <IonToggle color="success" slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>OVERSPEED</IonLabel>
            <IonToggle color="success" slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>DETACHEMENT</IonLabel>
            <IonToggle color="success" slot="end" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  component: React.memo(Notifications),
});
