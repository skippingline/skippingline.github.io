import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./flexboxgrid.min.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import "./main.scss";
import Booking from "./pages/Booking";
import Categories from "./pages/Categories";
import Error404 from "./pages/Error404.js";
import EstablishmentHome from "./pages/EstablishmentHome";
import EstablishmentSignUp from "./pages/EstablishmentSignUp";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import SignUp from "./pages/SignUp";


const navLinks = [
  { url: "/signupin", title: "Sign Up / Sign In" },
  { url: "/", title: "Home" },
  { url: "/categories", title: "Categories" },
  { url: "/faq", title: "Frequently Asked Questions" },
  { url: "/EstablishmentSignUp", title: "Establishment Sign-Up" }];




const App = () => {
  return (
    <Router>
      <Header navLinks={navLinks} />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/categories" component={Categories} />
          <Route path="/signupin" component={SignUp} />
          <Route path="/establishmentsignup" component={EstablishmentSignUp} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/booking/:locationID" children={<Booking />} />
          <Route path="/establishmenthome" component={EstablishmentHome} />
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer navLinks={navLinks} />

    </Router>

  );
}

export default App;
