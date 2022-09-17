import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import React from 'react';
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import "./qualification.scss";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";




function Qualification(props) {

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
        <div className="d-flex">
       <ProfileSidebar/>
       <ProfileHeader/>

        </div>
    );
}

export default Qualification;
