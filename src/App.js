import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./flexboxgrid.min.css";
import Footer from "./Footer.js";
// Header and Footer
import Header from "./Header.js";
import "./main.scss";
//page imports
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Xavier from "./pages/Xavier";

const navLinks = [
  { url: "/signupin", title: "Sign Up / Sign In" },
  { url: "/", title: "Home" },
  { url: "/xavierspage", title: "Xavier's Page" },
  { url: "/faq", title: "Frequently Asked Questions" },
  { url: "/establishment", title: "Establishment Sign-Up" }];


const App = () => {
  return (
    <Router>
      <Header navLinks={navLinks} />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/xavierspage" component={Xavier} exact />
        <Route path="/signupin" component={SignUp} exact />
      </main>
      <Footer navLinks={navLinks} />

    </Router>

  );
}

export default App;
