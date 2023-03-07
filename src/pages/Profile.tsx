import React, {useState} from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonIcon,
  IonLabel,
  IonButton,
  IonButtons,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonList,
  IonItem,
  IonInput,
  IonAvatar,
  IonDatetime,
  IonPopover,
  IonNote,
  IonModal,
  IonAccordionGroup,
  IonAccordion,
} from "@ionic/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClose,
//   faChevronLeft,
//   faGlobe,
//   faCog,
// } from "@fortawesome/free-solid-svg-icons";
// import { fetcCurrenthUser } from "../data/api/auth";
// import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
// import { usePhotoGallery } from "../helpers/usePhotoGallery";
import { chevronBack } from "ionicons/icons";

interface AboutProps {}

const Profile: React.FC<AboutProps> = () => {
  const [email, setEmail] = useState("audi@gmail.com");
  const [username, setUsername] = useState("AUDI");
  const [birthday, setBirthday] = useState("07/06/1993");
  const [password, setPassword] = useState("evFTbyVVCd");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [tosError, setTosError] = useState(false);
  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  }
  // const [currentUser, setCurrentUser] = useState<any>(null);
  // const [showInterestModal, setShowInterestModal] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const { photo, takePhoto } = usePhotoGallery()

  // useEffect(() => {
  //   const fetch = async () => {
  //     setCurrentUser(await fetcCurrenthUser());
  //   };
  //   fetch();
  // }, [setCurrentUser]); 

  // const handleGoogle = async () => {
  //   try {
  //     const result = await GoogleAuth.signIn();
  //     console.log({ result });
  //   } catch (e) {
  //     console.log({ error: e });
  //   }
  // };

  // React.useEffect(() => {
    // GoogleAuth.initialize();
    // console.log('Google Auth Init')
  // }, []);

  return (
    <>
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar color="primary" style={{ textAlign: "center", paddingBottom: "30px"}}>
            <IonButtons slot="start">
              <IonBackButton defaultHref="#"></IonBackButton>
            </IonButtons>
            <IonTitle style={{ fontSize: "16px", fontWeight: 600}}>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent style={{ alignItems: "center"}}>
          <div className="flex flex-col h-screen items-center">
            <div className="flex justify-center mb-12">
              <img src="assets/img/user_1.jpg" alt="Ionic logo" className="m-4" style={{ width: "50%" }} />
            </div>        

            <form noValidate onSubmit={signup} className="px-4 mb-auto w-full">
              <IonItem lines="none">
                <IonLabel>User Name</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <input
                  name="username"
                  type="text"
                  className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value!)}
                  required
                ></input>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Email Address</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <input
                  name="email"
                  type="email"
                  className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value!)}
                  required
                ></input>
                {formSubmitted && emailError && (
                  <span className="text-red-400">
                    <p className="ion-padding-start">Email is required</p>
                  </span>
                )}
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Date of Birth</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <input
                  name="birthday"
                  type="date"
                  className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8"
                  placeholder="Date of birth"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value!)}
                  required
                ></input>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Password</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <input
                  name="password"
                  type="text"
                  className="p-2 border-2 border-gray-100 rounded-xl w-full block mb-8"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value!)}
                  required
                ></input>
                {formSubmitted && passwordError && (
                  <span className="text-red-400">
                    <p className="ion-padding-start">Password is required</p>
                  </span>
                )}
              </IonItem>

              <IonItem>
                <button
                  type="submit"
                  className="w-full py-4 mt-4 text-white rounded-xl font-bold"
                  style={{ "background" : "#2E516D"}}
                >
                  Update
                </button>
              </IonItem>
            </form>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default React.memo(Profile);
