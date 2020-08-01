import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Favourites from "./Favourites";
import Login from "./Login";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/login" component={Login} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
