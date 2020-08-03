/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import userContext from "../../context/userContext";
import "../../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(userContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    const loginUser = { email, password };
    const loginRes = await axios.post(
      "http://localhost:5000/users/login",
      loginUser
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <div className="login">
      <h3>Login here...</h3>
      <form className="login-form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}