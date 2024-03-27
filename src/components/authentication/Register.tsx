import "./register.css";
import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { registerUser } from './registerUser.ts';
import { Link } from "react-router-dom";

export function Register() {
  const { userState, dispatch } = useUserContext();
  const { error } = userState;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password, username });
      // redirect
      dispatch({ type: "success" });
    } catch (error) {
      // TODO: more specific error handling
      dispatch({
        type: "error",
        field: "general",
        value: "Invalid username or password. Please try again.",
      });
    }
  };

  return (
    <div className="register">
    <div>
      <h1>Register</h1>
      <form className="form" onSubmit={onSubmit}>
        {error && error.general && <p className="error">{error.general}</p>}
        <input
          type="email"
          placeholder="eMail"
          onChange={(e) => setEmail(e.target.value)}
        />
          <input
          type="username"
          placeholder="choose a username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="choose a password with 8 characters or more"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit" type="submit">Register</button>
      <Link to="/login">already have an account? 👉 login here.</Link>
      </form>
    </div>
  </div>
  );
}
export default Register;