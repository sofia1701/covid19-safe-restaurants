import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Favourites from "./Favourites";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Logout from "./Auth/Logout";
import Footer from "./Footer";
import userContext from "../context/userContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [query, setQuery] = useState("");

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "https://covid-safe-auth.herokuapp.com/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userResponse = await axios.get(
          "https://covid-safe-auth.herokuapp.com/users/",
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userResponse.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <userContext.Provider value={{ userData, setUserData, query, setQuery }}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
        </Switch>

        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
