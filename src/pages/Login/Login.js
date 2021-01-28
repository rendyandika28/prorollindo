import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../assets/icons";
import BannerLogin from "../../assets/images/banner-login.jpg";

import "./Login.css";

const Login = () => {
  return (
    <main className="login">
      <aside className="login__left-side">
        <img src={Icon} alt="icon" />

        <h2 className="login__title">Login</h2>
        <p className="login__subtitle">
          Selamat datang, silahkan masukkan username dan password Anda
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="login__label-input">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="exampleInputPassword1"
              className="login__label-input"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link to="/admin/pelanggan" type="submit" className="btn btn-login">
            Masuk
          </Link>
        </form>
      </aside>
      <aside className="login__right-side">
        <img src={BannerLogin} alt="banner" />
      </aside>
    </main>
  );
};

export default Login;
