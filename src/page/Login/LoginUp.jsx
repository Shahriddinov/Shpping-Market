import React from 'react';
import LoginImg from "../../assets/images/loginImg.svg";
import Logo from "../../assets/images/logo.svg";
import "./loginUp.scss"
import Google from "../../assets/images/google.svg";
import EmailIcon from "@mui/icons-material/Email";
import {Link} from "react-router-dom";


const LoginUp = () => {
    return (
        <div className="loginUp">
            <div className="left">
                <div className="lgBlur"></div>
                <img className="loginImg" src={LoginImg} alt=""/>
            </div>
            <div className="right">
                <div className="container">
                    <div className="col-md-10 offset-1">
                        <img src={Logo} alt="" className="loginLogo"/>
                        <div className="loginTitle">Добро пожаловать</div>
                        <div className="form-group">
                            <label className="label">Имя *</label>
                            <input type="name" placeholder="Aliboy" className="InputName"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUp;