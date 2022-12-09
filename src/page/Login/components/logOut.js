import React, {useState} from 'react';
import LoginImg from "../../../assets/images/loginImg.svg";
import Logo from "../../../assets/images/logo.svg";
import "../loginUp.scss"
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const label = {inputProps: {'aria-label': 'Switch demo'}};


const LogOut = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    // const onClick = () => {
    //     setTimeout(() => {
    //         navigate("/userInfo");
    //     }, 2000);
    // };

    function loginUp() {
        let emails = {
            email
        }

        axios.post('https://sport.uz.napaautomotive.uz/public/api/forgot-password', emails).then((response) => {

            if ((response.data.success === true)) {
                setTimeout(() => {
                    navigate("/");
                    // console.log(id)
                }, 500);
            }
            console.log(response.data)
            setError(response.data.message)
        }).catch((error) => {
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
                        <h4>Eslatib o'tamiz!!!   Kiritayotgan emaildan  oldin saytimizdan foydalangan bo'lishingiz kerak </h4>
                        <h3 className="text-danger">{error}</h3>
                        <div className="form-group">

                            <Box
                                component="form"

                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    className="InputName mt-5"
                                    type="text"
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                        </div>

                        <Button onClick={loginUp} variant="outlined" className="save">Send Email</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogOut;