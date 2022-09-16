import { Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "antd/dist/antd.css";
import "./ProfileNavbar.scss";

function ProfileNavbar() {
  return (
    <nav className="profile__navbar">
      <div className="profile__container">
        <div className="profile__navbar-lef">
          <Link to="/">
            <ArrowBackIosIcon className="arrow-back" />
          </Link>
          <h2 className="profile__navbar-left--title">Заполнение данных</h2>
        </div>
        <div className="profile__navbar-right">
          <SpeedIcon />
          <ul className="profile__navbar-list">
            <li className="profile__navbar-list--item">
              <Link to="/">Главная /</Link>
            </li>
            <li className="profile__navbar-list--item">
              <Link to="/">Логин /</Link>
            </li>
            <li className="profile__navbar-list--item">
              <Link to="/">Профиль</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProfileNavbar;
