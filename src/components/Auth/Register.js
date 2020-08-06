/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import userContext from "../../context/userContext";
import Error from "./Error";
import "../../styles/register.css";

export default function Register() {
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(userContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await axios.post("http://localhost:5000/users/register", newUser);
      const loginResponse = await axios.post(
        "http://localhost:5000/users/login",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      history.push("/");
    } catch (err) {
      if (err.response.data.msg) {
        setError(err.response.data.msg);
      }
    }
  };

  return (
    <div className="register">
      {error && <Error message={error} />}
      <FaUsers size={72} style={{ color: "#9A031E" }} />
      <form className="register-form" onSubmit={submit}>
        <label htmlFor="register-display-name">Name</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Verify Password</label>
        <input
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <input type="submit" value="Register" className="register-button" />
      </form>
    </div>
  );
}
