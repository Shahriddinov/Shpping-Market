import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import {useTranslation} from "react-i18next";
import "./style.scss";
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

const PortfolioInfo = () => {

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
        getItem("Профиль", "1", <AddCircleIcon/>),
        getItem("Главная", "2", <HomeIcon/>),
        getItem("Портфолио", "3", <SdCardIcon/>),
        getItem("Логин", "4", <LoginIcon/>),
        getItem("Настройки", "5", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
            <>
                <div className="basePart">
                    <div class="portfolio_collaps">
                        <div className="colapse_left">

                            <Accordion className='Accordion_left'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography><h2>Личные данные</h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="fio">
                                            <div className="user_image">

                                            </div>
                                            <div className="user_name">
                                                <h3>ФИО *</h3>
                                                <div className="name_input">
                                                    Ботиров Асадбек Олимович
                                                </div>
                                            </div>
                                        </div>
                                        <div className="switch">
                                            <Switch {...label} defaultChecked />
                                            <h3>Мужчина</h3>
                                        </div>
                                        <div className="about_user">
                                            <div className="info_user">
                                                Портфолио
                                            </div>
                                            <div className="info_number_user">
                                                39
                                            </div>
                                            <div className="info_user">
                                                Тестовые баллы
                                            </div>
                                            <div className="info_number_user">
                                                39
                                            </div>
                                            <div className="info_user">
                                                Общий балл
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
                                    <Typography><h2>Данные для связи</h2></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="phone_number">
                                            <p style={{marginBottom:8}}>Телефон номер</p>
                                            <div className="number">
                                                +998 90 721 88 36
                                            </div>
                                        </div>
                                        <div className="web_site">
                                            <p style={{marginBottom:8}}>Веб сайт</p>
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
                                            <p style={{marginBottom:8}}>Место проживания</p>
                                            <div className="mesto">
                                                test02@gmail.com
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default PortfolioInfo;