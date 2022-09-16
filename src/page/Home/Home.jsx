import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import MainLogo from "../../assets/images/main.svg"
import "./home.scss"
import MainProfile from "./components/MainProfile/mainProfile";
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";

const Home = () => {
    const {t} = useTranslation();


    return (
        <>
            <Layout>
                <div className="home">
                    <img className="homeLogo w-100" src={MainLogo} alt=""/>
                    <div className="homeTitle">
                        {t("homeTitle")}
                    </div>
                    <div className="buttons">
                        <Link to="/register">
                        <button className="homeButton">{t("loginIn")}</button>
                        </Link>
                        <Link to="/userInfo">
                            <button type="submit" className="homeButton">{t("welcome")}</button>
                        </Link>
                    </div>
                </div>
                <MainProfile/>
            </Layout>
        </>

    );
};

export default Home;