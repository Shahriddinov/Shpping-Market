import {useTranslation} from "react-i18next";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import userPic from "../../assets/images/userPicture.jpg";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import "./ProfileOverview.scss";
import OneEducation from "./components/OneEducation/oneEducation";
import EduInfo from "../../components/eduInfo/eduInfo";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import {useNavigate} from "react-router";
import JobAbout from "./components/JobAbout/jobAbout";
import AdvancedTraining from "./components/AdvancedTraining/advancedTraining";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function ProfileOverview() {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    const onClicks = () => {
        setTimeout(() => {
            navigate("/allInfo");
        }, 10);
    };

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Главная", "1", <HomeIcon/>),
        getItem("Профиль", "2", <AccountCircleIcon/>, [
            getItem("Направление", "sub1"),
            getItem("Статистика", "2"),
        ]),
        getItem("Портфолио", "3", <SdCardIcon/>),
        getItem("Логин", "4", <LoginIcon/>),
        getItem("Настройки", "5", <SettingsIcon/>),
    ];

    const userInformations = {
        userName: "Botirov Asadbek",
        fullName: "fullName",
        passportId: "passportId",
        education: "education",
        email: "email",
        nationality: "nationality",
        dateBirth: "dateBirth",
        pinfl: "PINFL",
        learningBuild: "learningBuild",
        department: "department",
        district: "district"
    };

    return (
        <>
            <section id="Profile-overview" className="Profile-overview">
                <h1 className="visually-hidden">Profile Overview Page</h1>
                <ProfileSidebar items={items} userName={t(userInformations.userName)}/>
                <section className="profile-overview__page">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar title={t("profile")}/>
                    <div className="profile-overview__sections">
                        <PersonalInfo imageURL={userPic} obj={userInformations}/>
                        <OneEducation obj={userInformations}/>
                        <OneEducation obj={userInformations}/>
                        <JobAbout/>
                        <JobAbout/>
                        <AdvancedTraining/>
                        <AdvancedTraining/>
                        <div className="next-page">
                            <div className="next-btn">
                                {/*<button>Продолжить</button>*/}
                                <Stack spacing={2} direction="row">
                                    <div className="pencil">
                                        <Button className="pencilButton" href="/profile" variant="text">
                                            <BorderColorIcon fontSize="small"/>
                                            Редактировать
                                        </Button>
                                    <Button className="profileButton" href="/direction" style={{backgroundColor: "#0FBE7B"}}
                                            variant="text"> <span className="icon"><CheckCircleOutlineIcon
                                        fontSize="small"/></span> Соответствует</Button>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default ProfileOverview;
