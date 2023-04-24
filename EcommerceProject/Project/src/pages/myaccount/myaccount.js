import React, { useState } from "react";
import styles from "./myaccount.module.css";
import Login from "./Login/login";
import Register from "./Register/register";
import Menu from "../../components/Menu/menu";
import PagesFooter from "../../components/Footer/footer";
import { Banner } from "../../components/Banner/banner";
const Myaccount = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password, rememberMe) => {
    // Make an API call to authenticate the user
    setUser({ email });

    // If "remember me" is checked, store user data in local storage
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify({ email }));
    } else {
      localStorage.removeItem("user");
    }
  };

  const handleRegister = (email, password) => {
    // Make an API call to register the user and set the user state
    setUser({ email });
  };

  return (
    <>
      <Menu />
      <Banner title="My Account" />
      <div>
        {user ? (
          <h2>Welcome, {user.email}!</h2>
        ) : (
          <div className={styles.container}>
            <Login handleLogin={handleLogin} />
            <Register handleRegister={handleRegister} />
          </div>
        )}
      </div>
      <PagesFooter />
    </>
  );
};

export default Myaccount;
