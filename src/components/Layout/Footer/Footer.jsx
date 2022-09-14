import React from 'react';
import {useTranslation} from "react-i18next";
import FooterLogo from "../../../assets/images/logo.svg";
import FooterImg from "../../../assets/images/footer.svg"
import "../../../assets/footer.scss"

const Footer = () => {
    const {t} = useTranslation();

    return (
        <div className="footer">
            <div className="container">
                <div className="col-md-6 d-flex">
                    <div className="footerLogos">
                        <img src={FooterLogo} alt=""/>
                        <div className="footerTitle">
                            JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARNI QATTA TAYYORLASH VA MALAKASINI OSHIRISH
                            INSTITUTI
                        </div>
                    </div>
                    <hr className="hr"/>
                    <div className="footerYear">{t("footerYear")}</div>
                    <div className="footerYear">{t("footerSave")}</div>
                </div>
                <div className="col-md-6">
                   <div className="d-flex">
                       <div className="footerConnect">
                           <div className="connectTitle">{t("footerInfo")}</div>
                           <div className="connectText">+998 90 000 00 00</div>
                           <div className="connectText">test02@gmail.com</div>
                           <div className="connectTitle mt-3">{t("helps")}</div>
                           <div className="connectText">{t("learning")}</div>
                       </div>
                       <div className="footerInfo">
                           <div className="infoTitle">{t("companyInfo")}</div>
                           <div className="infoText">{t("profile")}</div>
                           <div className="infoText">{t("gallery")}</div>
                           <div className="infoText">{t("portfolio")}</div>
                           <div className="infoText">{t("login")}</div>
                           <div className="infoText">{t("setting")}</div>
                       </div>
                       <div className="footerApp">
                           <img src={FooterImg} alt=""/>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;