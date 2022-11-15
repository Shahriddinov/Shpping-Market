import React from 'react';
import LoginImg from "../../assets/images/loginImg.svg"
import Logo from "../../assets/images/logo.svg"
import EmailIcon from '@mui/icons-material/Email';
import Google from "../../assets/images/google.svg"
import Button from '@mui/material/Button';
import "./style.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {Link} from "react-router-dom";

const LoginIn = () => {
    return (
        <div className="loginIn">
            <div className="left">
                <div className="lgBlur"></div>
                <img className="loginImg" src={LoginImg} alt=""/>
            </div>
            <div className="right">
                <div className="container">
                    <div className="col-md-10 offset-1">
                        <img src={Logo} alt="" className="loginLogo"/>
                        <div className="loginTitle">Добро пожаловать</div>
                        <div className="form-group mt-5">
                            <label className="label">Введите ПИНФЛ*</label>
                            <Box
                                component="form"

                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    className="numberPhone"
                                    id="outlined-basic"
                                    label="1234567891011121314"
                                    variant="outlined"
                                    placeholder="1234567891011121314"
                                />
                            </Box>
                            {/*<input type="number" placeholder="+99 890 123 45 67" className="numberPhone"/>*/}
                        </div>
                        <div className="Infopass">
                            <div className="w-100">
                                <label className="label">Введите Серию паспорта*</label>

                                <Box
                                    component="form"

                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="line"
                                        id="outlined-basic"
                                        label="AB"
                                        variant="outlined"
                                        placeholder="AB"
                                    />
                                </Box>
                            </div>
                            <div className="w-100">
                                <label className="label">Введите номер паспорта*</label>

                                <Box
                                    component="form"

                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="line"
                                        id="outlined-basic"
                                        label="12345689"
                                        variant="outlined"
                                        placeholder="12345689"
                                    />
                                </Box>
                            </div>
                        </div>
                        <Button href="/login" variant="outlined" className="sends"> Продолжить</Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginIn;