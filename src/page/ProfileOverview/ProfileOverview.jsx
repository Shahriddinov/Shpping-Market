import { useTranslation } from "react-i18next";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import userPic from "../../assets/images/userPicture.jpg";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import "./ProfileOverview.scss";
import OneEducation from "./components/OneEducation/oneEducation";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import React, { useEffect, useState } from "react";
import AdvancedTraining from "./components/AdvancedTraining/advancedTraining";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useNavigate } from "react-router";
import JobAbout from "./components/JobAbout/jobAbout";
import axios from "axios";
import { baseApi } from "../../services/api";

function ProfileOverview() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

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
    district: "district",
  };
  const id = localStorage.getItem("userId");
  const language = localStorage.getItem("lng");

  const statusColor =
    status === "failed"
      ? "rgba(254, 52, 110, 0.4)"
      : status === "passed"
      ? "#0FBE7B"
      : "#aaa";

  useEffect(() => {
    axios
      .get(`${baseApi}/checkUserById/${id}`, {
        headers: {
          "Accept-Language": language,
        },
      })
      .then((res) => {
        console.log("Response", res?.data?.checkUser);
        setStatus(res?.data?.checkUser?.[0]?.permission);
      })
      .catch((err) => console.log("Response Error", err));
  }, []);

  // const verificationUrl = status === "passed" ? '/direction' : "";

  return (
    <>
      <section id="Profile-overview" className="Profile-overview">
        <h1 className="visually-hidden">Profile Overview Page</h1>
        <ProfileSidebar items userName={t(userInformations.userName)} />
        <section className="profile-overview__page">
          <ProfileHeader handleChangeLng={handleChangeLng} />
          <ProfileNavbar title={t("profile")} />
          <div className="profile-overview__sections">
            <PersonalInfo imageURL={userPic} obj={userInformations} />
            <OneEducation obj={userInformations} />
            <JobAbout />
            <AdvancedTraining />
            <div className="next-page">
              <div className="next-btn">
                <Stack spacing={2} direction="row">
                  <div className="pencil">
                    <Button
                      className="pencilButton"
                      href="/profile"
                      variant="text"
                    >
                      <BorderColorIcon fontSize="small" />
                      Редактировать
                    </Button>
                    <Button
                      className="profileButton"
                      href="/direction"
                      style={{ backgroundColor: statusColor }}
                      variant="text"
                    >
                      {" "}
                      <span className="icon">
                        <CheckCircleOutlineIcon fontSize="small" />
                      </span>{" "}
                      Соответствует
                    </Button>
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
