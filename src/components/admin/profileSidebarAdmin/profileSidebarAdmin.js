import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import axios from "axios";
import {baseApi} from "../../../services/api";
import {toast} from "react-toastify";
import Sider from "antd/lib/layout/Sider";
import UserPicture from "../../userPicture/userPicture";
import {Menu} from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import ApartmentOutlined from "@ant-design/icons/lib/icons/ApartmentOutlined";
import "./profileSidebarAdmin.scss"
function ProfileSidebarAdmin({userPic}) {
    const {t, i18n} = useTranslation();
    const  {id} = useParams()
    const [allName, setAllName] = useState([]);
    const [photos, setPhotos] = useState('');
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${baseApi}/allData/` + id).then((response) => {
            console.log(response.data.user_avatar.photo)
            setPhotos(response.data.user_avatar.photo)
            setAllName(response.data.user_personal_info.full_name)


        }).catch((error) => {
            // toast.error(error.response?.data?.message)


        })
    },[])
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                left: 0,
                top: 0,
                bottom: 0,
            }}
            className="profile__sider_admin">
            <div className="d-flex align-items-center px-3 mt-3">
                <UserPicture classname="userImg" pictureURL={photos ? `https://sport.napaautomotive.uz/storage/${photos}` : userPic}/>
                <span className="profile__title">{allName}</span>
            </div>

            <Menu
                onClick={({key})=>{
                    if (key === 'signout'){

                    }else {
                        navigate(key)
                    }
                }}
                theme="dark"
                style={{marginTop: "20px"}}
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={[
                    // {
                    //     label: t("profile"), key:"/profile", icon: <AccountCircleIcon/>
                    //     // [
                    //     //     {label: t("directions"), key: "/directions"},
                    //     //         {label: t("statistics"), key: "/statistics"}
                    //     //
                    //     //     ]
                    //
                    // },
                    {
                        label:t("gallery"), key:`/adminProfile`, icon:<HomeIcon/>
                    },
                    // {
                    //     label:t("portfolio"), key:`/adminProfile/checkUser/${localStorage.getItem("userId")}`, icon:<SdCardIcon/>
                    // },
                    // // {
                    //     label:t("login"), key:"/loginIn", icon:<LoginIcon/>
                    // },
                    // {
                    //     label:t("setting"), key:"/setting", icon:<SettingsIcon/>
                    // },
                    // {
                    //     label: t("directions"), key: `/adminProfile/checkPdf/${localStorage.getItem("userId")}`, icon:<ApartmentOutlined />
                    // },
                    // {
                    //     label: t("statistics"), key: `/adminProfile/checkInfo/${localStorage.getItem("userId")}`, icon:<SettingsIcon/>
                    // }

                ]}
            />
        </Sider>
    );
}

export default ProfileSidebarAdmin;