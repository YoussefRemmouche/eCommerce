import React, { useState } from "react";
import styles from "./login.module.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // new state property for remember me checkbox

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password, rememberMe); // pass rememberMe state to handleLogin function
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Log In</h2>
        <p>Username or Email Address</p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.inputs}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <p>Password</p>
          <input
            className={styles.inputs}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label>
            <input
              className={styles.rememberMe}
              label="Reme"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <br />
          <br />
          <button className={styles.loginBtn} type="submit">
            Log In
          </button>
          Lost Your Password?
        </form>
      </div>
    </div>
  );
};

export default Login;
