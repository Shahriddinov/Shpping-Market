import Sider from "antd/lib/layout/Sider";
import Person2Icon from "@mui/icons-material/Person2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import RuFlag from "../../assets/images/ruFlag.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useTranslation } from "react-i18next";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import "./Profile.scss";

const { Header } = Layout;

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
      <h2 className="visually-hidden">Profile Page</h2>
      <Sider className="profile__sider">
        <div className="d-flex align-items-center px-3 mt-3">
          <span className="profile-icon__wrapper">
            <Person2Icon />
          </span>
          <span className="profile__title">ФИО</span>
        </div>
        <div className="logo" />
        <Menu
          theme="dark"
          style={{ marginTop: "20px" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="profile__layout">
        <Header className="profile__layout-header">
          <div className="profile__container">
            <div className="left">
              <div className="name">ФИО</div>
              <div className="jobTitle">должность</div>
            </div>
            <div className="right">
              <button
                className="flagButton"
                onClick={() => handleChangeLng("ru")}
              >
                <img className="iconFlag" src={RuFlag} alt="" />
                Ру
              </button>
              <NotificationsNoneIcon className="icon" />
            </div>
          </div>
        </Header>
      </Layout>
    </section>
  );
}

export default Profile;
