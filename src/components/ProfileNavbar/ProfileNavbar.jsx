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
          <Link to="/userInfo" style={{display:"flex", alignItems:"center"}}>
            <ArrowBackIosIcon className="arrow-back" />
          <h2 className="profile__navbar-left--title">{t("fullInfo")}</h2>
          </Link>
        </div>
        <div className="profile__navbar-right">
          <SpeedIcon className="icon" />
          <ul className="profile__navbar-list">
            <li className="profile__navbar-list--item">
              <Link style={{color: "#2B63C0"}} to="/">{t("gallery")} /</Link>
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
