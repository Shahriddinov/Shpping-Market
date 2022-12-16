import Sider from "antd/lib/layout/Sider";
import UserPicture from "../userPicture/userPicture";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./ProfileSidebar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import ApartmentOutlined from "@ant-design/icons/lib/icons/ApartmentOutlined";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Imgs from "../../assets/images/avatar.png";
import Toast from "light-toast";
import { baseApi } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileSidebar({ items, userName, userPic, admin }) {
  const { t, i18n } = useTranslation();
  const id = localStorage.getItem("userId");
  const [allName, setAllName] = useState([]);
  const [photos, setPhotos] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseApi}/allData/` + id)
      .then((response) => {
        console.log(response.data.user_avatar.photo);
        setPhotos(response.data.user_avatar.photo);
        setAllName(response.data.user_personal_info.full_name);
      })
      .catch((error) => {
        // toast.error(error.response?.data?.message)
      });
  }, []);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      className="profile__sider"
    >
      <div className="d-flex align-items-center px-3 mt-3">
        <UserPicture
          classname="userImg"
          pictureURL={
            photos
              ? `https://sport.napaautomotive.uz/storage/${photos}`
              : userPic
          }
        />
        <span className="profile__title">{allName}</span>
      </div>
      {admin ? (
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          theme="dark"
          style={{ marginTop: "20px" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              label: t("gallery"),
              key: `/adminProfile`,
              icon: <HomeIcon />,
            },
            {
              label: t("logout"),
              key: "/",
              icon: <LoginIcon />,
              onClick: () => {
                localStorage.clear();
              },
            },
          ]}
        />
      ) : (
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          theme="dark"
          style={{ marginTop: "20px" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              label: t("profile"),
              key: "/profileOver",
              icon: <AccountCircleIcon />,
              // [
              //     {label: t("directions"), key: "/directions"},
              //         {label: t("statistics"), key: "/statistics"}
              //
              //     ]
            },
            {
              label: t("gallery"),
              key: `/`,
              icon: <HomeIcon />,
            },
            {
              label: t("portfolio"),
              key: "/allPdf",
              icon: <SdCardIcon />,
            },

            //   {
            //     label: t("setting"),
            //     key: "/setting",
            //     icon: <SettingsIcon />,
            //   },
            {
              label: t("directions"),
              key: "/direction",
              icon: <ApartmentOutlined />,
            },
            {
              label: t("statistics"),
              key: "/allInfo",
              icon: <SettingsIcon />,
            },
            {
              label: t("logout"),
              key: "/",
              icon: <LoginIcon />,
              onClick: () => {
                localStorage.clear();
              },
            },
          ]}
        />
      )}
    </Sider>
  );
}

export default ProfileSidebar;
