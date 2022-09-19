import { Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "antd/dist/antd.css";
import "./ProfileNavbar.scss";
import {useTranslation} from "react-i18next";

function ProfileNavbar() {
  const { t } = useTranslation();
  return (
    <nav className="profile__navbar">
      <div className="profile__container">
        <div className="profile__navbar-lef">
          <Link to="#">
            <ArrowBackIosIcon className="arrow-back" />
          </Link>
          <h2 className="profile__navbar-left--title">{t("fullInfo")}</h2>
        </div>
        <div className="profile__navbar-right">
          <SpeedIcon className="icon" />
          <ul className="profile__navbar-list">
            <li className="profile__navbar-list--item">
              <Link style={{color: "#2B63C0"}} to="/">{t("gallery")} /</Link>
            </li>
            <li className="profile__navbar-list--item">
              <Link to="#">{t("login")} /</Link>
            </li>
            <li className="profile__navbar-list--item">
              <Link to="#">{t("profile")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProfileNavbar;
