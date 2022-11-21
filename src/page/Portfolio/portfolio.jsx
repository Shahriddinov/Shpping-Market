import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import {useTranslation} from "react-i18next";
import "./portfolio.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Switch from '@mui/material/Switch';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/material/SvgIcon/SvgIcon";
import Footer from "../../components/Layout/Footer/Footer";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Portfolio = () => {

    const {t, i18n} = useTranslation();

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem(t("profile"), "1", <AddCircleIcon/>),
        getItem(t("gallery"), "2", <HomeIcon/>),
        getItem(t("portfolio"), "3", <SdCardIcon/>),
        getItem(t("login"), "4", <LoginIcon/>),
        getItem(t("setting"), "5", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
        <>
            <section id="portfolio" className="portfolio">
                <ProfileSidebar items={items}/>
                <div className="basePart">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar/>

                    <div class="portfolio_collaps">
                        <div className="colapse_left">

                            <Accordion className='Accordion_left'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h2>{t("PersonalData")}</h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="fio">
                                            <div className="user_image">

                                            </div>
                                            <div className="user_name">
                                                <h3>{t("FullName")} *</h3>
                                                <div className="name_input">
                                                    Ботиров Асадбек Олимович
                                                </div>
                                            </div>
                                        </div>
                                        <div className="switch">
                                            <Switch {...label} defaultChecked />
                                            <h3>{t("sex")}</h3>
                                        </div>
                                        <div className="about_user">
                                            <div className="info_user">
                                                {t("portfolio")}
                                            </div>
                                            <div className="info_number_user">
                                                39
                                            </div>
                                            <div className="info_user">
                                                {t("testScores")}
                                            </div>
                                            <div className="info_number_user">
                                                39
                                            </div>
                                            <div className="info_user">
                                                {t("totalScore")}
                                            </div>
                                            <div className="info_number_user">
                                                80.5
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="colapse_right">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h2>{t("ContactInfo")}</h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="phone_number">
                                            <p style={{marginBottom:8}}>{t("PhoneNumber")}</p>
                                            <div className="number">
                                                +998 90 721 88 36
                                            </div>
                                        </div>
                                        <div className="web_site">
                                            <p style={{marginBottom:8}}>{t("WebSite")}</p>
                                            <div className="site">
                                                www.test.uz
                                            </div>
                                        </div>
                                        <div className="Email">
                                            <p style={{marginBottom:8}}>Email</p>
                                            <div className="email">
                                                test02@gmail.com
                                            </div>
                                        </div>
                                        <div className="location">
                                            <p style={{marginBottom:8}}>{t("PlaceOfResidence")}</p>
                                            <div className="mesto">
                                                test02@gmail.com
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                    </div>
                    <div className="add_portfolio">
                        <h3>{t("AddPortfolio")}</h3>

                        <div className="file_add">
                            <div className="add_left">
                                <label htmlFor="file">
                                    <DownloadIcon fontSize="medium"/>
                                    <p>{t("uploadPDF")}</p>
                                </label>
                                <input className='d-none' id="file" type="file"/>
                            </div>
                            <div className="add_right">
                                <h3>{t("nameCertificate")}</h3>
                                <input className='form-control' placeholder={t("title")} type="text"/>
                                <h3>{t("WhatDidYouGet")}</h3>
                                <textarea className='form-control' placeholder={t("text")} name="" id=""></textarea>
                            </div>
                        </div>


                        <div className="next-page">

                            <div className="back-btn">
                                <Stack spacing={2} direction="row">
                                    <Button className="button" href="/qualification" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                                </Stack>
                            </div>
                            <div className="next-btn">
                                <Stack spacing={2} direction="row">
                                    <Button className="button" href="/certificates" style={{backgroundColor: "#0FBE7B"}} variant="contained"> <span className="icon"><SaveAsIcon fontSize="small"/></span> Сохранить</Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Portfolio;