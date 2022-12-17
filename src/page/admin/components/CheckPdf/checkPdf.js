import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./checkPdf.scss";
import axios from "axios";
import { baseApi } from "../../../../services/api";
import Toast from "light-toast";
import { toast } from "react-toastify";
import ProfileSidebar from "../../../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../../../components/ProfileHeader/ProfileHeader";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SpeedIcon from "@mui/icons-material/Speed";
import Imgs from "../../../../assets/images/avatar.png";
import Chip from "@mui/material/Chip";
import PDF from "../../../../assets/images/pdfImg.svg";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Footer from "../../../../components/Layout/Footer/Footer";
import CloseIcon from "@mui/icons-material/Close";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

function CheckPdf(props) {
  const { t, i18n } = useTranslation();
  const id = localStorage.getItem("checkId");
  // console.log(localStorage.getItem('checkId'))

  const [isClicked, setClicked] = useState(false);
  const [isBall, setBall] = useState(false);
  const [userName, setUserName] = useState([]);
  const [userPhoto, setUserPhoto] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [scores, setScores] = useState("");
  const [mainPdf, setMainPdf] = useState([]);
  const navigate = useNavigate();

  // const [message, setMessage] = useState('');
  // const [permission, setPermission] = useState('')
  useEffect(() => {
    axios
      .get(`${baseApi}/user_in_direction/` + id, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserPhoto(response.data.user.avatar);
        console.log(response.data.user[0].user_name);
        setUserName(response.data.user[0].user_name);
        setUserEmail(response.data.user[0].email);
        setUserPhone(response.data.user[0].phone);
      })
      .catch((error) => {
        Toast.fail(t("Something went wrong Photo"), 2000);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${baseApi}/allScoreWithUserId/${id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        setScores(response?.data?.all_score);
        // toast.success("ALL Score is fetched");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
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

  useEffect(() => {
    axios
      .get(`${baseApi}/evaluate/` + id, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        setMainPdf(response.data.data);
        toast.success(response.data.Message);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }, []);

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
        permission: "faild",
        message: "sen utaolmading",
      };
    }
    console.log(typeof Number(id));
    axios
      .post(`${baseApi}/portfolioUser`, checkM, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "ok") {
          navigate(`/adminProfile/checkInfo/${id}`);
        }

        toast.success(response.data.message);

        console.log(response);
      });
  }

  return (
    <div className="checkPdf">
      <div className="d-flex">
        <ProfileSidebar admin={true} />
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
                      <Chip className="rating" label={scores ?? 0} />
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
              {mainPdf?.map((item, index) => (
                <div
                  className="col-6  d-flex justify-content-between"
                  key={index.toString()}
                >
                  <div className="pdfLeft w-100">
                    <div className="pdfText">
                      {item.direction_name.category_ru ??
                        item.direction_name.category_en ??
                        item.direction_name.category_uz}
                    </div>
                    <div className="imgPdf">
                      {!item.pdf || (
                        <img src={PDF} alt="" style={{ marginTop: "20%" }} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      </div>
      <Footer />
    </div>
  );
}

export default CheckPdf;
