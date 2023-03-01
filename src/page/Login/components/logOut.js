import React, { useEffect, useState } from "react";
import LoginImg from "../../../assets/images/loginImg.svg";
import Logo from "../../../assets/images/logo.svg";
import "../loginUp.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { baseApi, baseApiImg } from "../../../services/api";
import { toast } from "react-toastify";

const label = { inputProps: { "aria-label": "Switch demo" } };

const LogOut = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [pnfl, setPnfl] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [error, setError] = useState("");
  const [logImg, setLogImg] = useState('');

  function loginUp() {
    const create = {
      password,
      password_confirmation,
    };

    axios
      .put(`${baseApi}/forgot-password/${pnfl}`, create, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        console.log(pnfl);
        if (response.data.success === true) {
          setTimeout(() => {
            navigate("/login");
            // console.log(id)
          }, 500);
        }
        console.log(response.data);
        setError(response.data.message);
      })
      .catch((error) => {});
  }

  useEffect(() => {
    axios.get(`${baseApi}/images`,{
      headers: {
        "Accept-Language": localStorage.getItem("lng") || "uz",
      },
    } ).then(res=>{
      setLogImg(res.data.images[0].images)
      console.log(res.data);
    })
  },[]);

  return (
    <div className="loginUp">
      <div className="left">
        <div className="lgBlur"></div>
        <img className="loginImg" src={`${baseApiImg}/${logImg}`} alt="" />
      </div>
      <div className="right">
        <div className="container">
          <div className="col-md-10 offset-1">
            <img src={Logo} alt="" className="loginLogo" />
            <div className="loginTitle">{t("home")}</div>
            <h3 className="text-danger">{error}</h3>
            <div className="form-group">
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  className="InputName mt-5"
                  type="text"
                  id="outlined-basic"
                  label={t("enter")}
                  variant="outlined"
                  onChange={(e) => setPnfl(e.target.value)}
                />
              </Box>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  className="InputName mt-3"
                  type="text"
                  id="outlined-basic"
                  label={t("parol")}
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  className="InputName mt-3"
                  type="text"
                  id="outlined-basic"
                  label={t("nParol")}
                  variant="outlined"
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                />
              </Box>
            </div>

            <Button onClick={loginUp} variant="outlined" className="save">
              {t("creat")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
