import Login from "../pages/Login";
import Signup from "../pages/Signup";
import HomeOrTutorial from "../components/HomeOrTutorial";

const routes: any = [
  { path: "/login", component: Login, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/", component: HomeOrTutorial, exact: true },
];

export default routes;
