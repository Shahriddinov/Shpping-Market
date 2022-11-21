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
import axios from "axios";

const label = {inputProps: {'aria-label': 'Switch demo'}};


const LoginUp = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('')
    const [error, setError] =useState('')
    const [password, setPassword] = useState('')
    // const onClick = () => {
    //     setTimeout(() => {
    //         navigate("/userInfo");
    //     }, 2000);
    // };

    function loginUp() {
        let allCome = {
            login,
            password
        }
        axios.post('https://micros-test.w.wschool.uz/public/api/login', allCome).then((response) => {
            localStorage.setItem("token", response.data.authorisation.token)

            if ((response.data.user.role_id >= 1)) {
                setTimeout(() => {
                    navigate("/");
                    // console.log(id)
                }, 500);
            }
            if ((response.data.user.role_id >= 2)) {
                setTimeout(() => {
                    navigate("/adminProfile");
                    // console.log(id)
                }, 500);
            }
            if ((response.data.user.role_id >= 3)) {
                localStorage.setItem('id', response.data.user.id)
                localStorage.setItem('pasportId', response.data.user.pasport_id)
                setTimeout(() => {
                    navigate("/profile");
                    // console.log(id)
                }, 500);
            }
            console.log(response.data)
        }).catch((error)=>{
            if (error.response.status >= 401){
                setError('Ruyxatdan uting')
            }
            if (error.response.status >= 200){
                setError('Satimisizga xush kelibsiz')
            }
        })

    }

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
                        <h3>{error}</h3>
                        <div className="form-group">

                            <label className="label mt-5">Логин *</label>
                            <Box
                                component="form"

                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    className="InputName"
                                    type="text"
                                    id="outlined-basic"
                                    label="Логин"
                                    variant="outlined"
                                    onChange={(e) => setLogin(e.target.value)}
                                    placeholder="QWde1234134"
                                />
                            </Box>
                        </div>
                        <div className="form-group">

                            <label className="label mt-3">Пароль *</label>
                            <Box
                                component="form"
                                name="password"
                                type="password"
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    className="InputName"
                                    id="outlined-basic"
                                    label="Пароль"
                                    variant="outlined"
                                    placeholder="sqw13rwef"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Box>
                        </div>

                        <Button onClick={loginUp} variant="outlined" className="save">Продолжить</Button>
                        <Button href="/register" variant="outlined" className="save mt-4 bg-warning">Pasport</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUp;