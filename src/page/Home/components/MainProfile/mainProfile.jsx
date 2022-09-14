import React from 'react';
import "./mainProfile.scss"
import Profile from "../../../../assets/images/Profile.svg"
import Profile2 from "../../../../assets/images/Profile2.svg"
import Profile3 from "../../../../assets/images/Profile3.svg";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {useTranslation} from "react-i18next";


const MainProfile = () => {

    const {t} = useTranslation();
    return (
        <div className="mainProfile">
            <div className="container">
                <div className="item">{t("portfolio")}</div>
                <div className="d-flex mt-2">
                    <img src={Profile} alt="" className="profileImg"/>
                    <div className="ProfileText">
                        <button className="profileButton">
                            <UploadFileIcon className="icon"/>
                            <span className="profileTitle">{t("portfolio")}</span>
                        </button>
                        <div className="infoText">
                            {t("portfolioText")}
                        </div>
                        <div className="infoTexts">
                            {t("portfolioT")}
                        </div>
                    </div>

                </div>
                <div className="d-flex mt-2">
                    <img src={Profile2} alt="" className="profileImgs"/>
                    <div className="ProfileText">
                        <button className="profileButtons" style={{marginTop: "-28%"}}>
                            <UploadFileIcon className="icon"/>
                            <span className="profileTitle">{t("portfolio")} , {t("chair")}</span>
                        </button>
                        <button className="profileList">
                            <span className="profileTitle">{t("faculty")}</span>
                        </button>
                        <div className="infoTexts">
                            {t("teacher")}
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-2">
                    <img src={Profile3} alt="" className="profileImg" style={{marginTop:"-5%"}}/>
                    <div className="ProfileText">
                        <button className="profileButton">
                            <UploadFileIcon className="icon"/>
                            <span className="profileTitle">{t("direction")}</span>
                        </button>
                        <div className="infoText">
                            {t("directions")}
                        </div>
                        <div className="infoTexts">
                            {t("plan")}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MainProfile;