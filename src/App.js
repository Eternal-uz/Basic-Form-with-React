import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handlefirstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    setSubmitted(true);
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    values.firstName = '';
    values.lastName = '';
    values.email = '';
  };

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit} class="register-form">
        {submitted && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        {
          <input
            value={values.firstName}
            onChange={handlefirstNameChange}
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
        }
        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          value={values.lastName}
          onChange={handleLastNameChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}

        <input
          value={values.email}
          onChange={handleEmailChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
