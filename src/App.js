import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from "./Error404.js";
import "./flexboxgrid.min.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import "./main.scss";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import EstablishmentSignUp from "./pages/EstablishmentSignUp";


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
          <Route path="/EstablishmentSignUp" component={EstablishmentSignUp} />
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer navLinks={navLinks} />

    </Router>

  );
}

export default App;
