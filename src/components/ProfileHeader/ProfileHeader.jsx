import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RuFlag from "../../assets/images/ruFlag.png";
import QuestionMark from "../../assets/images/QuestionMark.svg";
import {Layout} from "antd";
import {Link} from "react-router-dom";
import "antd/dist/antd.css";
import "./ProfileHeader.scss";
import UzFlag from "../../assets/images/Uz.png";
import React from "react";
import Notification from "../Notification/notification";
import {useTranslation} from "react-i18next";
import EnFlag from "../../assets/images/en.png";

const {Header} = Layout;

function ProfileHeader({handleChangeLng, questionNeed}) {
    const {t} = useTranslation();

    return (
        <Layout>
            <Header>
                <div className="profile__container">
                    <div className="profile__left">

                        <div className="jobTitle">{t("jobTitle")}</div>
                    </div>
                    <div className="profile__right">
                        <button
                            className="flagButton"
                            onClick={() => handleChangeLng("uz")}
                        >
                            <img className="iconFlag" src={UzFlag} alt=""/>
                            Uz
                        </button>
                        <button
                            className="flagButton"
                            onClick={() => handleChangeLng("ru")}
                        >
                            <img className="iconFlag" src={RuFlag} alt=""/>
                            Ру
                        </button>
                        <button className="flagButton"
                                onClick={() => handleChangeLng("en")}>
                            <img className="iconFlag" src={EnFlag} alt=""/>
                            En
                        </button>
                        {/*<Notification />*/}
                        {/*{questionNeed && (*/}
                        {/*  <Link className="question" to="/">*/}
                        {/*    <img src={QuestionMark} width="20" height="20" />*/}
                        {/*  </Link>*/}
                        {/*)}*/}
                    </div>
                </div>
            </Header>
        </Layout>
    );
}

export default ProfileHeader;
