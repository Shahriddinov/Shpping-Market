import React, { useState } from "react";
import LoginImg from "../../assets/images/loginImg.svg";
import Logo from "../../assets/images/logo.svg";
import "./loginUp.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { baseApi } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const LoginIn = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  function loginUp() {
    let allCome = {
      login,
      password,
    };
    axios
      .post(`${baseApi}/login`, allCome, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        localStorage.setItem("token", response.data.authorisation.token);

        if (response.data.user.role_id >= 1) {
          setTimeout(() => {
            navigate("/");
            // console.log(id)
          }, 500);
          toast.success(response.data.Message);
        }
        if (response.data.user.role_id >= 2) {
          setTimeout(() => {
            navigate("/adminProfile");
            // console.log(id)
          }, 500);
          toast.success(response.data.Message);
        }
        if (response.data.user.role_id >= 3) {
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("pasportId", response.data.user.pasport_id);
          localStorage.setItem("isLoggedIn", true);
          setTimeout(() => {
            navigate("/profileOver");
          }, 500);
          toast.success(response.data.Message);
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }

  return (
    <div className="loginUp">
      <div className="left">
        <div className="lgBlur"></div>
        <img className="loginImg" src={LoginImg} alt="" />
      </div>
      <div className="right">
        <div className="container">
          <div className="col-md-10 offset-1">
            <img src={Logo} alt="" className="loginLogo" />
            <div className="loginTitle">{t("home")}</div>
            <h3 style={{ color: "red" }}>{error}</h3>
            <div className="form-group">
              <Box
                component="form"
                className="mt-5 mb-4"
                noValidate
                autoComplete="off"
              >
                <TextField
                  className="InputName"
                  type="text"
                  id="outlined-basic"
                  label={t("login")}
                  variant="outlined"
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="QWde1234134"
                />
              </Box>
            </div>
            <div className="form-group">
              <Box
                component="form"
                name="password"
                className="mt-3"
                type="password"
                noValidate
                autoComplete="off"
              >
                <TextField
                  className="InputName"
                  id="outlined-basic"
                  label={t("parol")}
                  variant="outlined"
                  placeholder="sqw13rwef"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </div>

            <Button onClick={loginUp} variant="outlined" className="save">
             {t("countinue")}
            </Button>
            <div className="Reset">
              <Link to="/passport">{t("register")}</Link>
              <Link to="/logOut">{t("forgot")}?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginIn;
