import React, { useState } from "react";
import auth from "../utils/auth";
import apiService from "./../ApiService";

const initialState = {
  email: "",
  password: ""
};

const Login = (props) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to send a request to API service /login
    const { email, password } = state;
    const user = { email, password };
    const res = await apiService.login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      // This sets isAuthenticated = true and redirects to profile
      props.setIsAuthenticated(true);
      auth.login(() => props.history.push("/"));
    }
  };

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          Email
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Login&nbsp;
        </button>
      </form>
    </div>
  );
};

export default Login;
