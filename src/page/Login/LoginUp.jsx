import React, {useState} from 'react';
import LoginImg from "../../assets/images/loginImg.svg";
import Logo from "../../assets/images/logo.svg";
import "./loginUp.scss"
import Google from "../../assets/images/google.svg";
import EmailIcon from "@mui/icons-material/Email";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };



const LoginUp = () => {
    const navigate = useNavigate();
    const onClick = () => {
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };
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
                        <div className="d-flex">
                            <div className="form-group">
                                <label className="label m-lg-2">Фамилия *</label>
                                <input type="username" placeholder="Aliyev" className="InputInfo"/>
                            </div>
                            <div className="form-group">
                                <label className="label  m-lg-2">Отчество *</label>
                                <input type="username" placeholder="Aliyev" className="InputInfo"/>
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="label mt-1">Логин *</label>
                            <input type="name" placeholder="login" className="InputName"/>
                        </div>
                        <div className="form-group">
                            <label className="label mt-1">Пароль *</label>
                            <input type="text" placeholder="Parol" className="InputName"/>
                        </div>
                        <div className="form-group">
                            <label className="label mt-1">Повторный пароль *</label>
                            <input type="text" placeholder="Again parol" className="InputName"/>
                        </div>
                        <div className="d-flex align-items-center" style={{marginLeft: "-26%", marginTop: "15px", cursor:"pointer"}}>
                            <Switch {...label} />
                            <div className="radioText" >
                                Я согласен с политикой конфедициальности
                            </div>
                        </div>
                        <Button onClick={onClick} variant="outlined" className="save">Сохранить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUp;