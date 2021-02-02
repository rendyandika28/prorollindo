import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "../../assets/icons";
import BannerLogin from "../../assets/images/banner-login.jpg";
import "./Login.css";
import axios from "../../data/axios";

const Login = () => {
  // Auth User Check
  const LoggedIn = localStorage.token;
  const history = useHistory();
  const authUser = () => {
    if (LoggedIn) history.goBack();
  };

  useEffect(() => {
    authUser();
  }, []);

  const [Form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...Form,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormLogin = (e) => {
    e.preventDefault();

    axios
      .post("api/token/", Form)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        localStorage.setItem("token-refresh", res.data.refresh);
        history.push("/admin/pelanggan");
      })
      .catch((err) =>
        alert("Unable to sign in, please check your email and password")
      );
  };

  return (
    <main className="login">
      <aside className="login__left-side">
        <img src={Icon} alt="icon" />

        <h2 className="login__title">Login</h2>
        <p className="login__subtitle">
          Selamat datang, silahkan masukkan username dan password Anda
        </p>

        <form onSubmit={handleFormLogin}>
          <div className="form-group">
            <label htmlFor="username" className="login__label-input">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="username"
              value={Form.username}
              onChange={handleInputChange}
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
              id="password"
              value={Form.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-login">
            Masuk
          </button>
        </form>
      </aside>
      <aside className="login__right-side">
        <img src={BannerLogin} alt="banner" />
      </aside>
    </main>
  );
};

export default Login;
