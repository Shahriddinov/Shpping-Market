import { useTranslation } from "react-i18next";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import userPic from "../../assets/images/userPicture.jpg";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import "./ProfileOverview.scss";
import BackgroundJob from "../../components/backgroundJob/backgroundJob";
import EduInfo from "../../components/eduInfo/eduInfo";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import React from "react";

function ProfileOverview() {
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
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
    getItem("Профиль", "sub1", <AccountCircleIcon />, [
      getItem("Статистика", "1"),
    ]),
    getItem("Главная", "2", <HomeIcon />),
    getItem("Портфолио", "3", <SdCardIcon />),
    getItem("Логин", "4", <LoginIcon />),
    getItem("Настройки", "5", <SettingsIcon />),
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
        <ProfileSidebar items={items} userName={t(userInformations.userName)} />
        <section className="profile-overview__page">
          <ProfileHeader handleChangeLng={handleChangeLng} />
          <ProfileNavbar title={t("profile")} />
          <div className="profile-overview__sections">
            <div className="profile-overview__container">
              <PersonalInfo imageURL={userPic} obj={userInformations} />
              <BackgroundJob obj={userInformations} />
              <BackgroundJob obj={userInformations} />
              <BackgroundJob obj={userInformations} />
              {/* <EduInfo /> */}
            </div>
            <div className="next-page">

              {/*<div className="back-btn">*/}
              {/*  <Stack spacing={2} direction="row">*/}
              {/*    <Button className="button" href="/work" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>*/}
              {/*  </Stack>*/}
              {/*</div>*/}
              <div className="next-btn">
                {/*<button>Продолжить</button>*/}
                <Stack spacing={2} direction="row">
                  <Button className="button" href="/allInfo" style={{backgroundColor: "#0FBE7B"}} variant="contained"> <span className="icon"><SaveAsIcon fontSize="small"/></span> Соответствует</Button>
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
