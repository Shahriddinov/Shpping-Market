import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import "antd/dist/antd.css";
import "./Profile.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Page1 from "../../components/Page1/Page1";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import React from "react";

function Profile() {
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
      <section id="Profile" className="Profile">
        <h1 className="visually-hidden">Profile Page</h1>
        <ProfileSidebar items={items} userName={t("fio")} />
        <section className="profile__page">
          <ProfileHeader handleChangeLng={handleChangeLng} questionNeed={true} />
          <ProfileNavbar title={t("fullInfo")} />
          <Page1 />
          <div className="NextPrev">
            <Stack spacing={2} direction="row">
              <Button className="button" href="/userInfo" variant="contained">
                {" "}
                <span className="icones">
                <CancelOutlinedIcon fontSize="small" />
              </span>{" "}
                Назад
              </Button>
            </Stack>
            <Stack spacing={2} direction="row" className="mb-4">
              <Button
                  className="button"
                  href="/education"
                  style={{ backgroundColor: "#0FBE7B" }}
                  variant="contained"
              >
                {" "}
                <span className="icones">
                <CheckCircleOutlineOutlinedIcon fontSize="small" />
              </span>{" "}
                Продолжить
              </Button>
            </Stack>
          </div>
        </section>
      </section>
  );
}

export default Profile;