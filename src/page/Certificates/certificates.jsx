import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import {useTranslation} from "react-i18next";
import "./certificates.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../components/Layout/Footer/Footer";
import BasicModal from "../../components/DeleteModal/deleteModal";
import PortfolioInfo from "../../components/PortfolioInfo/portfolioInfo";
// import AboutInfo from "../../components";

const label = {inputProps: {'aria-label': 'Switch demo'}};

const Certificates = () => {
    const {t, i18n} = useTranslation();

    // let teacher = {
    //     name:"Ботиров Асадбек Алимович",
    //     image:"teacher.png",
    //     id:"AD 2113212",
    //     score:"39"
    // };

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
            <section id="certificates" className="certificates">
                <ProfileSidebar items={items}/>
                <div className="basePart">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar title={"portfolio"}/>
                    <PortfolioInfo/>
                    <h1>{t("fileQuestion")}</h1>
                    <div className="pdf-part">
                        <div className="pdf">
                            <h3>{t("teachingCulture")}</h3>
                            <div className="pdf-item">
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                            </div>
                            <h3>{t("teachingCulture")}</h3>
                            <div className="pdf-item">
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                                <div className="pdf-own">
                                    <img src="./image 26.png" alt=""/>
                                    <div className="deleteIcon"><BasicModal/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>{t("ProfActivity")}</h1>
                    <div className="about-certificate">
                        <div className="Orzibek"></div>
                        <div className="card border-0">
                            <div className="card-header border-0">
                                <img className="mx-auto" src="./image 22.png" alt=""/>
                            </div>
                            <div className="card-body">
                                Перечень направлений переподготовки и повышения квалификации;
                                - Студенты, которые планируют повысить свою квалификацию в этом году список; Студенты,
                                не прошедшие курсы повышения квалификации (исключаются).
                                - Список студентов, участвующих в повторных курсах;
                                - список назначенных на повторные курсы;
                                - список не обучавшихся на повторных курсах;
                                - Список не прошедших повторные курсы
                            </div>
                        </div>
                    </div>
                    <Button style={{
                        display: "block",
                        backgroundColor: "#FFA41D",
                        borderRadius: 8,
                        width: 283,
                        height: 48,
                        color: "#fff",
                        marginRight: 24,
                        marginLeft: 'auto',
                        marginTop: 24,
                        textAlign: "center",
                        paddingTop: 12
                    }} href="/portfolio"><span style={{marginRight: 17.5}}><EditIcon fontSize="small"/></span>Редактировать</Button>
                </div>
            </section>
            <Footer/>
            {/*<AboutInfo/>*/}
        </>
    );
};

export default Certificates;