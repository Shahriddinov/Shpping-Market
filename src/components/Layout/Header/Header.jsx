import React from 'react';
import {useTranslation} from "react-i18next";
import Logo from "../../../assets/images/logo.svg"
import "../../../assets/header.scss"
import UzFlag from "../../../assets/images/Uz.png"
import RuFlag from "../../../assets/images/ruFlag.png"
import EnFlag from "../../../assets/images/en.png"
const Header = () => {

    const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src={Logo} className="logo" alt=""/>
                    <div className="logoText">
                        JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARNI QATTA TAYYORLASH VA MALAKASINI OSHIRISH
                        INSTITUTI
                    </div>
                </div>
                <div className="right">
                <button className="flagButton" onClick={() => handleChangeLng("uz")}>
                    <img className="iconFlag" src={UzFlag} alt=""/>
                    Uz
                </button>
                <button className="flagButton" onClick={() => handleChangeLng("ru")}>
                    <img className="iconFlag" src={RuFlag} alt=""/>
                    Ру
                </button>
                    <button className="flagButton" onClick={() => handleChangeLng("en")}>
                        <img className="iconFlag" src={EnFlag} alt=""/>
                        En
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;