import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import MainLogo from "../../assets/images/main.svg"
import "./home.scss"
import MainProfile from "./components/MainProfile/mainProfile";
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
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

                        <Button href="/register" variant="outlined" className="homeButton">
                            {t("loginIn")}
                        </Button>
                        <Button href="/userInfo" variant="outlined" className="homeButton">
                            {t("welcome")}
                        </Button>
                    </div>
                </div>
                <MainProfile/>
            </Layout>
        </>

    );
};

export default Home;