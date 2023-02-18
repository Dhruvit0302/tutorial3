import React, { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    let errors = {};
    const regexLetters = /^[A-Za-z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!firstName.match(regexLetters)) {
      errors.firstName = "First Name should contain only letters";
    }

    if (!lastName.match(regexLetters)) {
      errors.lastName = "Last Name should contain only letters";
    }

    if (!email.match(regexEmail)) {
      errors.email = "Email is invalid";
    }

    if (!password.match(regexPassword)) {
      errors.password =
        "Password should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      localStorage.setItem("firstname", firstName);
      localStorage.setItem("lastname", lastName);
      localStorage.setItem("email", email);
      window.location.href = "/profile";
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
export default RegistrationForm;
