import React, {useState} from 'react';
import "./informationAllPdf.scss"
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import {useTranslation} from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SpeedIcon from "@mui/icons-material/Speed";
import {Bar} from "react-chartjs-2";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import UserPic from "../../assets/images/userPicture.jpg"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import PDF from "../../assets/images/pdf.svg"
import Footer from "../../components/Layout/Footer/Footer";
const InformationAllPdf = ({imageURL}) => {

    const {t, i18n} = useTranslation();
    const [isClicked, setClicked] = useState(false);
    const [isBall, setBall] = useState(false);

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Профиль", "1", <AccountCircleIcon/>, [
            getItem("Направление", "sub1"),
            getItem("Статистика", "2"),
        ]),
        getItem("Главная", "3", <HomeIcon/>),
        getItem("Портфолио", "4", <SdCardIcon/>),
        getItem("Логин", "5", <LoginIcon/>),
        getItem("Настройки", "6", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    return (
        <div className="informationAllPdf">
            <div className="d-flex">
                <ProfileSidebar items={items}/>
                <div className="eduPage">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <nav className="profile__navbar">
                        <div className="profile__container">
                            <div className="profile__navbar-lef">
                                <Link to="/userInfo" style={{display: "flex", alignItems: "center"}}>
                                    <ArrowBackIosIcon className="arrow-back"/>
                                    <h2 className="profile__navbar-left--title">{t("portfolio")}</h2>
                                </Link>
                            </div>
                            <div className="profile__navbar-right">
                                <SpeedIcon className="icon"/>
                                <ul className="profile__navbar-list">
                                    <li className="profile__navbar-list--item">
                                        <Link to="/">{t("gallery")} /</Link>
                                    </li>
                                    <li className="profile__navbar-list--item">
                                        <Link to="#">{t("systemAccess")} /</Link>
                                    </li>
                                    <li className="profile__navbar-list--item">
                                        <Link to="#">{t("profile")} / </Link>
                                    </li>
                                    <li className="profile__navbar-list--item">
                                        <Link style={{color: "#2B63C0"}} to="#">{t("portfolio")}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="d-flex justify-content-between p-1">
                        <div style={{width: "50%", padding: "0 20px"}}>
                            <div className="advancedTraining">
                                <div
                                    className="background-job__title-wrapper"
                                    onClick={() => setClicked(!isClicked)}
                                >
                                    <h2 className="background-job__title">{t("PersonalData")} </h2>
                                    <span className="background-job__button"></span>
                                </div>
                                <div
                                    className={
                                        isClicked
                                            ? `background-job__drop-down  drop-up`
                                            : `background-job__drop-down`
                                    }
                                >
                                    <div>
                                        <div className="users">
                                            <img src={UserPic} alt=""/>
                                            <div className="">
                                                <div className="userNames">David Macallicter</div>
                                                <div className="jobsYear">Опыт работы 2 года 7 месяцев</div>
                                            </div>
                                        </div>

                                        <div className="object">
                                            <Chip className="port" label={t("portfolio")}/>
                                            <Chip className="rating" label="29"/>
                                        </div>
                                        <div className="object">
                                            <Chip className="port" label={t("testScores")}/>
                                            <Chip className="rating" label="29"/>
                                        </div>
                                        <div className="object">
                                            <Chip className="port" label={t("totalScore")}/>
                                            <Chip className="rating" label="29"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: "50%", padding: "0 20px"}}>
                            <div className="advancedTraining">
                                <div
                                    className="background-job__title-wrapper"
                                    onClick={() => setBall(!isBall)}
                                >
                                    <h2 className="background-job__title">{t("ContactInfo")} </h2>
                                    <span className="background-job__button"></span>
                                </div>
                                <div
                                    className={
                                        isBall
                                            ? `background-job__drop-down  drop-up`
                                            : `background-job__drop-down`
                                    }
                                >
                                    <div>
                                        <div className="form-group">
                                            <div className="phoneLabel">{t("PhoneNumber")}</div>
                                            <div className="phoneText">+998 90 123 45 67</div>
                                        </div>
                                        <div className="form-group">
                                            <div className="phoneLabel">{t("WebSite")}</div>
                                            <div className="phoneText">www.sport.uz</div>
                                        </div>
                                        <div className="form-group">
                                            <div className="phoneLabel">{t("Email")}</div>
                                            <div className="phoneText">sport01@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pdf">
                        <div className="advancedTrain">
                           <div className="d-flex justify-content-between">
                               <div className="pdfLeft">
                                   <div className="pdfText">1. {t("teachingCulture")}</div>
                                   <img src="" alt="" className="imgPdf" style={{marginTop:"20%"}}/>
                               </div>
                               <div className="pdfLeft">
                                   <div className="pdfText">2. {t("rating")}</div>
                                   <img src="" alt="" className="imgPdf"/>
                               </div>
                           </div>
                            <div className="d-flex justify-content-between">
                               <div className="pdfLeft">
                                   <div className="pdfText">3. {t("rating")}</div>
                                   <img src="" alt="" className="imgPdf" style={{marginTop:"15%"}}/>
                               </div>
                               <div className="pdfLeft">
                                   <div className="pdfText" >4. {t("judging")}</div>
                                   <img src="" alt="" className="imgPdf" style={{marginTop:"20%"}}/>
                               </div>
                           </div>
                            <div className="d-flex justify-content-between">
                                <div className="pdfLeft">
                                    <div className="pdfText">5. {t("preparation")}</div>
                                    <img src="" alt="" className="imgPdf" style={{marginTop: "20%"}}/>
                                </div>
                                <div className="pdfLeft">
                                    <div className="pdfText">6. {t("level")}</div>
                                    <img src="" alt="" className="imgPdf"/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Button className="profileButton" href="#" style={{backgroundColor: "#0FBE7B"}}
                            variant="text"> <span className="icon"><CheckCircleOutlineIcon
                        fontSize="small"/></span> Соответствует</Button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default InformationAllPdf;