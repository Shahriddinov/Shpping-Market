import React, { useEffect, useState } from "react";
import "./informationAllPdf.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import { useTranslation } from "react-i18next";
import Imgs from "../../assets/images/avatar.png";

import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SpeedIcon from "@mui/icons-material/Speed";
import { Bar } from "react-chartjs-2";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PDF from "../../assets/images/pdfImg.svg";
import Footer from "../../components/Layout/Footer/Footer";
import axios from "axios";
import Toast from "light-toast";
import { baseApi } from "../../services/api";
import { toast } from "react-toastify";

const InformationAllPdf = (props) => {
  const { t, i18n } = useTranslation();
  const id = localStorage.getItem("userId");

  const [isClicked, setClicked] = useState(false);
  const [isBall, setBall] = useState(false);
  const [userName, setUserName] = useState([]);
  const [userPhoto, setUserPhoto] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [mainPdf, setMainPdf] = useState([]);
  const [allScore, setAllScore] = useState([]);
  const [verified, setVerified] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseApi}/allData/` + id)
      .then((response) => {
        setUserPhoto(response?.data?.user_avatar?.photo);
        setUserName(response.data.user_personal_info.full_name);
        setUserEmail(response.data.user_personal_info.email);
        setUserPhone(response.data.user_personal_info.phone);
      })
      .catch((error) => {
        Toast.fail(t("Something went wrong Photo"), 2000);
      });
  }, []);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const language = localStorage.getItem("lng");

  const statusColor =
    verified === "failed"
      ? "rgba(254, 52, 110, 0.4)"
      : verified === "passed"
      ? "#0FBE7B"
      : "#aaa";

  useEffect(() => {
    axios
      .get(`${baseApi}/allScoreWithUserId/${id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        setAllScore(response?.data?.all_score);
        // toast.success("ALL Score is fetched");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseApi}/portfolioUserById/${id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        // console.log(
        //   "Verification",
        //   response?.data?.portfolioUserById[0]?.permission
        // );

        setVerified(response?.data?.portfolioUserById[0]?.permission);
        // toast.success("ALL Score is fetched");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseApi}/evaluate/` + id, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setMainPdf(response.data.data);
        toast.success(response.data.Message);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }, []);

  return (
    <div className="informationAllPdf">
      <div className="d-flex">
        <ProfileSidebar items />
        <div className="eduPage">
          <ProfileHeader handleChangeLng={handleChangeLng} />
          <nav className="profile__navbar">
            <div className="profile__container">
              <div className="profile__navbar-lef">
                <Link
                  to="/userInfo"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ArrowBackIosIcon className="arrow-back" />
                  <h2 className="profile__navbar-left--title">
                    {t("portfolio")}
                  </h2>
                </Link>
              </div>
              <div className="profile__navbar-right">
                <SpeedIcon className="icon" />
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
                    <Link style={{ color: "#2B63C0" }} to="#">
                      {t("portfolio")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="d-flex justify-content-between p-1">
            <div style={{ width: "50%", padding: "0 20px" }}>
              <div className="advancedTraining">
                <div
                  className="background-job__title-wrapper"
                  onClick={() => setClicked(!isClicked)}
                >
                  <h2 className="background-job__title">
                    {t("PersonalData")}{" "}
                  </h2>
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
                      <img
                        className="userPhoto"
                        src={
                          userPhoto
                            ? `https://sport.napaautomotive.uz/storage/${userPhoto}`
                            : Imgs
                        }
                        alt="userAvatar"
                      />
                      <div className="">
                        <div className="userNames">{userName}</div>
                        {/*<div className="jobsYear">Опыт работы 2 года 7 месяцев</div>*/}
                      </div>
                    </div>

                    <div className="object">
                      <Chip className="port" label={t("portfolio")} />
                      <Chip className="rating" label={allScore} />
                    </div>
                    <div className="object">
                      <Chip className="port" label={t("testScores")} />
                      <Chip className="rating" label="29" />
                    </div>
                    <div className="object">
                      <Chip className="port" label={t("totalScore")} />
                      <Chip className="rating" label="29" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "50%", padding: "0 20px" }}>
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
                      <div className="phoneText">{userPhone}</div>
                    </div>

                    <div className="form-group">
                      <div className="phoneLabel">{t("Email")}</div>
                      <div className="phoneText">{userEmail}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pdf">
            <div className="advancedTrain row">
              {mainPdf?.map((item, index) => {
                const fileName =
                  language === "uz"
                    ? item.direction_name.category_uz
                    : language === "ru"
                    ? item.direction_name.category_ru
                    : item.direction_name.category_en;
                return (
                  <div
                    className="col-6  d-flex justify-content-between"
                    key={index.toString()}
                  >
                    <div className="pdfLeft w-100">
                      <div className="pdfText">{fileName}</div>
                      <div className="imgPdf">
                        {!item.pdf || (
                          <img src={PDF} alt="" style={{ marginTop: "20%" }} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            className="profileButton"
            href="#"
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
      </div>
      <Footer />
    </div>
  );
};

export default InformationAllPdf;
