import React from 'react';
import LoginImg from "../../assets/images/loginImg.svg"
import Logo from "../../assets/images/logo.svg"
import EmailIcon from '@mui/icons-material/Email';
import Google from "../../assets/images/google.svg"
import Button from '@mui/material/Button';
import "./style.scss"
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

                       <label className="label">Телефон Номер</label>
                       <input type="number" placeholder="+99 890 123 45 67" className="numberPhone"  />
                       </div>
                       <div className="d-flex justify-content-between align-items-center mt-5">
                           <hr className="line"/>
                           <span className="lines">Или</span>
                           <hr className="line"/>
                       </div>
                       <button className="social">
                           <img src={Google} className="ImgGoogle" alt=""/>
                           Войти через Google
                       </button>
                       <button className="social">
                           <EmailIcon className="ImgGoogle"/>
                           Войти через Email
                       </button>
                       <Button href="/login" variant="outlined" className="sends"> Продолжить</Button>

                   </div>
               </div>
           </div>
        </div>
    );
};

export default LoginIn;