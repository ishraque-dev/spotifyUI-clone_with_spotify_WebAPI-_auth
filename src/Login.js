import React from 'react';
import Style from './style/Login.module.css';
import Logo from './imgs/logo.png';
import { loginURL } from './Spotify';
const Login = () => {
  return (
    <div className={Style.login}>
      <h2>Login</h2>
      <img src={Logo} alt="logo" />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
