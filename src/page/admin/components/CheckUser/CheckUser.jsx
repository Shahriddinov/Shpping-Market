import { useTranslation } from "react-i18next";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import "./checkuser.scss";
import OneEducation from "./components/OneEducation/oneEducation";
import Button from "@mui/material/Button";
import React from "react";
import AdvancedTraining from "./components/AdvancedTraining/advancedTraining";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router";
import JobAbout from "./components/JobAbout/jobAbout";
import ProfileSidebar from "../../../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../../../components/ProfileNavbar/ProfileNavbar";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { baseApi } from "../../../../services/api";
import { toast } from "react-toastify";

function CheckUser() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const id = localStorage.getItem("checkId");
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

  function CheckMessage(req) {
    let checkM = {};
    if (req) {
      checkM = {
        user_id: Number(id),
        permission: "passed",
        message: "sen utding",
      };
    } else {
      checkM = {
        user_id: Number(id),
        permission: "failed",
        message: "sen utaolmading",
      };
    }
    console.log(typeof Number(id));
    axios
      .post(`${baseApi}/checkUser`, checkM, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        if (response.data.status === "ok") {
          navigate(`/adminProfile/checkPdf/${id}`);
        }

        toast.success(response.data.message);

        console.log(response);
      });
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

  return (
    <>
      <section id="Profile-overview" className="Profile-overview">
        <h1 className="visually-hidden">Profile Overview Page</h1>
        <ProfileSidebar admin={true} />
        <section className="profile-overview__page">
          <ProfileHeader handleChangeLng={handleChangeLng} />
          <ProfileNavbar title={t("profile")} />
          <div className="profile-overview__sections">
            <PersonalInfo obj={userInformations} />
            <OneEducation obj={userInformations} />
            {/*<OneEducation obj={userInformations}/>*/}
            <JobAbout />
            {/*<JobAbout/>*/}
            <AdvancedTraining />
            {/*<AdvancedTraining/>*/}
            <div className="stops">Информация соответствует требованиям?</div>
            <div className="d-flex align-items-center justify-content-center">
              <Button
                onClick={() => CheckMessage(false)}
                className="profileButton"
                style={{ backgroundColor: "#2B63C0" }}
                variant="text"
              >
                {" "}
                <span className="icon">
                  <CloseIcon fontSize="small" />
                </span>{" "}
                Нет
              </Button>
              <Button
                onClick={() => CheckMessage(true)}
                className="profileButton"
                style={{ backgroundColor: "#0FBE7B" }}
                variant="text"
              >
                {" "}
                <span className="icon">
                  <CheckCircleOutlineIcon fontSize="small" />
                </span>{" "}
                Да
              </Button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default CheckUser;
