import React, { useState } from "react";
import styles from "./register.module.css";

const Register = ({ handleRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(email, password);
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <p>Email Address</p>
        <input
          className={styles.inputs}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <p>A link to set a new password will be sent to your email address.</p>
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>

        <button className={styles.registerBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
