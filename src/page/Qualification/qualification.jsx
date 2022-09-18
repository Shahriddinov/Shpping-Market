import React from 'react';
import "./qualification.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Slayder from "../../components/Slayder/slayder";





function Qualification() {

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
    <section id='qualification' className="qualification">
        <ProfileSidebar items={items}/>
        <div className="qualification-right">
            <ProfileHeader handleChangeLng={handleChangeLng}/>
            <ProfileNavbar/>
            <div className="formBox">
                <Slayder/>
                <h1>Переодичности повышения квалификации</h1>
                <div className="selections">
                   <div className="selection-left">
                       <label className="label1" htmlFor="region">{t("region")}*</label>
                       <select name="region" id="region" className="form-control formdata" placeholder="Область">
                           <option value="Tashkent">Tashkent</option>
                           <option value="Buxaro">Buxaro</option>
                           <option value="Samarqand">Samarqand</option>
                           <option value="Navoi">Navoi</option>
                       </select>
                       <label className="label1" htmlFor="Direction">{t("education")}*</label>
                       <select name="Direction" id="Direction" className="form-control formdata " placeholder="Speciality">
                           <option value="1">1. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                           <option value="2">2. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                           <option value="3">3. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                           <option value="4">4. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                       </select>
                   </div>
                <div className="selections_right ">
                    <label className="label1" htmlFor="educational institution">{t("direction")}*</label>
                    <select name="educational institution" id="educational institution" className="form-control formdata" placeholder="Образавательное учреждение">
                        <option value="5">Специальность</option>
                    </select>

                    <label className="label1" htmlFor="data">{t("date")}*</label>
                    <input className="form-control formdata" type="date"/>
                </div>
            </div>
            </div>

            <div className="buttons d-flex justify-content-between">
              <div></div>
                <div className="button-links ">
                    <button className="btn btn-primary">Назад</button>
                    <button className="btn btn-success">Сохранить</button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Qualification;
