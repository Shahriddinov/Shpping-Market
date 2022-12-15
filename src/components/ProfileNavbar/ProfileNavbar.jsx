import { Link, useNavigate } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "antd/dist/antd.css";
import "./ProfileNavbar.scss";
import { useTranslation } from "react-i18next";

function ProfileNavbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <nav className="profile__navbar">
      <div className="profile__container">
        <div className="profile__navbar-lef">
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon className="arrow-back" />
            <h2 className="profile__navbar-left--title">{t("title")}</h2>
          </div>
        </div>
        <div className="profile__navbar-right">
          <SpeedIcon className="icon" />
          <ul className="profile__navbar-list">
            <li className="profile__navbar-list--item">
              <Link style={{ color: "#2B63C0" }} to="/">
                {t("gallery")} /
              </Link>
            </li>
            <li className="profile__navbar-list--item">
              <Link to="#">{t("systemAccess")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProfileNavbar;
