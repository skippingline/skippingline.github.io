import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Header and Footer
import Header from "./Header.js";
import "./main.scss";
//page imports
import Home from "./pages/Home";
import Xavier from "./pages/Xavier";


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/xavierspage" component={Xavier} exact />
      </main>
      <footer>this is a footer</footer>
    </Router>

  );
}

export default App;
