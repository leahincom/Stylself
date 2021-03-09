import React, { useState } from "react";
import auth from "../utils/auth";
import apiService from "./../ApiService";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: ""
};

const Register = (props) => {
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
    // Add logic to send send a request to the API service /register
    // REMOVE-START
    const { email, password, firstName, lastName } = state;
    const user = { email, password, firstName, lastName };
    const res = await apiService.register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      // REMOVE-END
      // This sets isAuthenticated = true and redirects to home
      props.setIsAuthenticated(true);
      auth.login(() => props.history.push("/"));
      // REMOVE-START
    }
    // REMOVE-END
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName
    );
  };

  return (
    <div className="register">
      <h2>Register</h2>
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

        <div>
          First Name
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          Last Name
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>

        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
    </div>
  );
};

export default Register;
