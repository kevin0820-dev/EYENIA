import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonModal,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonHeader,
  IonLabel,
  useIonRouter,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItem,
  IonSlides,
  IonSlide,
  IonCardTitle,
  IonButton
} from "@ionic/react";
import { connect } from "../data/connect";
import * as L from "leaflet";
import { add, timer, telescope, man, compass, speedometer, storefront, close, send, watch, location, alarm, settings} from "ionicons/icons";
import "./Corte.scss";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'

import 'leaflet/dist/leaflet.css';

import { isPlatform } from "@ionic/react";

import moment from "moment";
import { useParams } from "react-router";
import { all } from "../helpers/Experiences";


interface OwnProps { }

interface StateProps {
}

interface DispatchProps { }

interface GroupsProps extends OwnProps, StateProps, DispatchProps { }

const Corte: React.FC<GroupsProps> = ({ }) => {
  const params: any = useParams();
  let leafletMap: any;
  const lat: number = 41.1533;
  const lng: number = 20.1683;
  const zoom: number = 25;

  // const defaultLatLng: LatLngTuple = [lat, lng];
  // const position:any  = [51.505, -0.09];

  const router: any = useIonRouter();
  const [openOption, setOpenOption] = useState<any>(false);
  const modal = useRef<HTMLIonModalElement>(null);
  const [markerPosition, setMarkerPosition] = useState<any>();

  React.useEffect(() => {
    const loadMap = async () => {
      leafletMap = new L.Map("map");
      leafletMap.on("load", () => {
        setTimeout(() => {
          leafletMap.invalidateSize();
        }, 10);
      });

      leafletMap.setView([lat, lng], zoom);
      let myIcon = L.icon({
        iconUrl: "assets/images/location-pin.png",
        iconSize: [40, 40],
      });

      let marker = new L.Marker([lat, lng], {
        icon: myIcon,
        draggable: true,
        title: "Position",
        interactive: true,
      });

      marker.addTo(leafletMap);

      leafletMap.on("click", (data: any) => {
        marker.setLatLng(data.latlng);
        setMarkerPosition({ lat: data.latlng.lat, lng: data.latlng.lng });
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(leafletMap);
    };

    if (params) {
      all(params.id)
        .then(({ experiences }) => {
          if (experiences && experiences.length > 0) {
            console.log({ experiences }, '===>');
            experiences.map((experience: any) => {
              const icon = L.divIcon({
                html: `<div class="fixed">
                        <div class="p-2 bg-white rounded-full relative">
                          <img class="rounded-full" style="width:100%; height:100%;" src="${experience.photos[0].webPath}" alt="${experience.name}" />
                        </div>
                        <div class="p-2 bg-white rounded-xl -mt-2">${experience.post} </div>
                      </div>`
                ,
              });

              const mark: any = new L.Marker(experience.markerPosition, {
                icon,
                title: experience.post,
                interactive: true,
              });

              mark.addTo(leafletMap);
            });
          }
        })
        .catch((err) => console.log(err));
    }

    loadMap().catch(console.error);
  }, []);

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div
          style={{ backgroundColor: "#91c5dc" }}
          className="container experience-settings"
        >
          <div>
            <div>
              <div
                id="map"
                className="bg-blue-300"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                  position: "absolute",
                }}
                onClick={() => setOpenOption(true)}
              ></div>
              {/* <MapContainer
                ref={refMap}
                center={defaultLatLng}
                zoom={zoom}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                ></TileLayer>
              </MapContainer> */}
              {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                  <Popup>
                    <IonCard id="open-modal-options" onClick={(prev) => setOpenOption(!prev)}>
                      <IonCardHeader>
                        <p>AUDI</p>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonIcon icon={speedometer} />
                        <p>54.8 Km/h</p>
                      </IonCardContent>
                    </IonCard>
                  </Popup>
                </Marker>
              </MapContainer> */}
            </div>
            <div>
              <IonFab vertical="top" horizontal="end" slot="fixed">
                <IonFabButton color="primary">
                  <IonIcon icon={add} />
                </IonFabButton>
                <IonFabList side="bottom">
                  <IonFabButton
                    color="primary"
                  >
                    <IonIcon icon={telescope} />
                  </IonFabButton>
                  <IonFabButton
                    color="primary"
                  >
                    <IonIcon icon={timer} />
                  </IonFabButton>
                  <IonFabButton color="primary">
                    <IonIcon icon={compass} />
                  </IonFabButton>
                  <IonFabButton
                    color="primary"
                  >
                    <IonIcon icon={man} />
                  </IonFabButton>
                </IonFabList>
              </IonFab>
            </div>
            <IonCard id="option_card" style={{ display: openOption === true ? "show" : "none" }}>
              <IonCardTitle style={{ display: "flex", flexDirection: "row"}}>
                <IonItem lines="none">
                  <IonLabel>AUDI</IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonIcon icon={speedometer} />
                  <IonLabel>54km/h</IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonIcon icon={storefront} />
                  <IonLabel>50L</IonLabel>
                </IonItem>
                <IonButton fill="clear" onClick={() => setOpenOption(false)}>
                  <IonIcon icon={close} />
                </IonButton>
              </IonCardTitle>
              <IonCardContent>
                <IonSlides pager={true}>
                  <IonSlide style={{display: "flex", flexDirection: "row"}}>
                    <IonItem>
                      <IonLabel>
                        Ew Arret 7 mi
                      </IonLabel>
                      <IonLabel>
                        57, Street Rock Garden, 59800 Washington 
                      </IonLabel>
                    </IonItem>
                    <IonButton fill="clear">
                      <IonIcon icon={send}/>
                    </IonButton>
                  </IonSlide>
                  <IonSlide style={{ display: "flex", flexDirection: "row"}}>
                    <IonButton fill="clear">
                      <IonIcon icon={watch}/>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={location}/>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={alarm}/>
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={settings}/>
                    </IonButton>
                  </IonSlide>
                </IonSlides>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  component: React.memo(Corte),
});
