import React from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from "@ionic/react";
import { connect } from "../data/connect";
// import { chevronBack, car } from "ionicons/icons";

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Lists: React.FC<GroupsProps> = () => {

  const listItems = [
    { url: "assets/img/list/tracking.png", title: "Tracking Mode" },
    { url: "assets/img/list/active.png", title: "Notifications" },
    { url: "assets/img/list/subscription-model.png", title: "Abonnement" },
    { url: "assets/img/list/bluetooth.png", title: "Appareils Associe" },
    { url: "assets/img/list/stop-car.png", title: "Coupure Circuit" },
    { url: "assets/img/list/restart.png", title: "Redemarer" },
    { url: "assets/img/list/refresh.png", title: "Reset" },
    { url: "assets/img/list/remove.png", title: "Delate the Device" },
  ]

  return (
    <IonPage id="speaker-list">
      <IonHeader style={{backgroundColor: "#18AFF5", textAlign: "center"}}>
        <IonLabel style={{ color: "#2E516D", fontWeight: 600, fontSize: "24px"}}>AUDI</IonLabel>
        <IonItem style={{ background: "#18AFF5"}}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle style={{ fontSize: "16px", fontWeight: 600}}>Reglage</IonTitle>
        </IonItem>
        {/* <IonToolbar style={{ paddingBottom: "30px" }} color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="#"></IonBackButton>
          </IonButtons>
          <IonTitle style={{ fontSize: "16px", fontWeight: 600}}>Reglage</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          {
            listItems.map((item, index) => (
              <IonItem key={`list-item-${index}`} style={{ display: "flex", alignItem: "center"}}>
                <IonAvatar slot="start">
                  <img alt={`setting-${index}`} src={item.url} style={{width: "70%"}}/>
                </IonAvatar>
                <IonLabel style={{ fontSize: "14px", fontWeight: 600 }}>{item.title}</IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  component: React.memo(Lists),
});
