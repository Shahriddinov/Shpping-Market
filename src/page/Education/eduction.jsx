import React from 'react';
import AddCircleIcon from "@mui/material/SvgIcon/SvgIcon";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import "./education.scss";
import Slayder from "../../components/Slayder/slayder";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Cancel from "../../components/CancelButton/cancel";
import Next from "../../components/NextButton/next";

const Eduction = () => {

    const { t, i18n } = useTranslation();

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Профиль", "1", <AddCircleIcon />),
        getItem("Главная", "2", <HomeIcon />),
        getItem("Портфолио", "3", <SdCardIcon />),
        getItem("Логин", "4", <LoginIcon />),
        getItem("Настройки", "5", <SettingsIcon />),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
        <section id="education" className="education">
            <ProfileSidebar items={items} />
            <div className="eduPage">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                <div className="formBox">
                    <Slayder/>
                    <div className="infoEdu">
                        <h3 className="title">{t("aboutEducation")}</h3>
                        <div className="side-by-side">
                            <div className="leftSide">
                                <label className="label" htmlFor="region">{t("region")} *</label>
                                <select name="region" id="region" className="form-control formData" placeholder="Область">
                                    <option value="Toshkent">Ташкент</option>
                                    <option value="Buxoro">Бухара</option>
                                    <option value="Samarqand">Самарканд</option>
                                    <option value="Navoiy">Навои</option>
                                </select>
                                <label className="label" htmlFor="institution">{t("institution")} *</label>
                                <select name="institution" id="institution" className="form-control formData">
                                    <option value="val1">Образавательное учреждение1</option>
                                    <option value="val2">Образавательное учреждение2</option>
                                    <option value="val3">Образавательное учреждение3</option>
                                    <option value="val3">Образавательное учреждение4</option>
                                </select>
                                <label className="label" htmlFor="speciality">{t("speciality")} *</label>
                                <select name="speciality" id="speciality" className="form-control formData">
                                    <option value="spec1">Специальность</option>
                                    <option value="spec1">Специальность1</option>
                                    <option value="spec1">Специальность2</option>
                                    <option value="spec1">Специальность3</option>
                                </select>
                            </div>
                            <div className="rightSide">
                                <label className="label" htmlFor="dateReceived">{t("dateReceived")} *</label>
                                <input type="date" className="form-control formData"/>
                                <label className="label" htmlFor="expirationDate">{t("expirationDate")} *</label>
                                <input type="date" className="form-control formData"/>
                                <label className="label" htmlFor="experience">{t("experience")} *</label>
                                <input type="text" className="form-control formData" placeholder="Опыт прослушивания"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NextPrev">
                    <Cancel/>
                    <Next/>
                </div>
            </div>
        </section>
    );
};

export default Eduction;