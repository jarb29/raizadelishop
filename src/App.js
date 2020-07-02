import React from "react";
import injectContext from "./AppContext";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import AboutUs from "views/examples/AboutUs.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Ecommercee from "views/examples/Ecommercee.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignupPage from "views/examples/SignupPage.js";
import Administrador from "views/Administrador";
import LoginPageAdmi from "views/examples/LoginPageAdmi"
import SignupPageAdmi from "views/examples/SigunpPageAdmi"

// others

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/sobrenosotros" render={props => <AboutUs {...props} />} />
      <Route path="/contactanos" render={props => <ContactUs {...props} />} />
      <Route path="/tortas" render={props => <Ecommerce {...props} />} />
      <Route path="/salsas" render={props => <Ecommercee {...props} />} />
      <Route path="/administrador" render={props => <Administrador {...props} />} />
 
      <Route
        path="/Home"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/admi/login"
        render={props => <LoginPageAdmi {...props} />}
      />
      <Route
        path="/admi/registrate"
        render={props => <SignupPageAdmi {...props} />}
      />
      <Route path="/login-page" render={props => <LoginPage {...props} />} />

      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route path="/registrate" render={props => <SignupPage {...props} />} />
      <Redirect to="/Home"  />
    </Switch>
  </BrowserRouter>
)};

export default injectContext(App);

