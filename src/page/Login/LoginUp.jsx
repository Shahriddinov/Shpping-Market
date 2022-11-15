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
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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

                            <label className="label mt-5">Введите телефон номер *</label>
                            <Box
                                component="form"

                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    className="InputName"
                                    id="outlined-basic"
                                    label="+998 90 721 88 36"
                                    variant="outlined"
                                    placeholder="+998 90 721 88 36"
                                />
                            </Box>
                        </div>
                        <div className="form-group">

                            <label className="label mt-5">Введите СМС Код *</label>
                            <Box
                                component="form"

                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    className="InputName"
                                    id="outlined-basic"
                                    label="1254"
                                    variant="outlined"
                                    placeholder="1254"
                                />
                            </Box>
                        </div>

                        <Button onClick={onClick} variant="outlined" className="save">Сохранить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUp;