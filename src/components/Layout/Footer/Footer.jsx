import React from "react";
import {useTranslation} from "react-i18next";
import FooterLogo from "../../../assets/images/logo.svg";
import FooterImg from "../../../assets/images/footer.svg";
import "../../../assets/footer.scss";
import {Link} from "react-router-dom";
import Napa from "../../../assets/images/napa.svg";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <div className="footer">
            <div className="container">
                <div className="col-md-6 d-flex">
                    <div className="footerLogos">
                        <img src={FooterLogo} alt=""/>
                        <div className="footerTitle">
                            JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARI QAYTA TAYYORLASH VA MALAKASINI OSHIRISH
                            INSTITUTI
                        </div>
                    </div>
                    <hr className="hr"/>
                    <div className="d-flex align-items-center gap-4">
                        {/* <div className="footerYear">{t("footerYear")}</div> */}

                        <a href="https://napaautomotive.uz/" target="_blank">
                            <img
                                style={{
                                    width: "120px",
                                    marginTop: "10px",
                                    marginLeft: "20px",
                                }}
                                src={Napa}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex">
                        <div className="footerConnect">
                            <div className="connectTitle">{t("footerInfo")}</div>
                            <div className="connectText">+998 71 242-30-87</div>
                            <a href="https://www.sportedu.uz/">
                            <div className="connectText">institut@sportedu.uz</div>
                            </a>
                            <div className="connectTitle mt-3">{t("helps")}</div>
                            <div className="connectText">
                                Toshkent shahar, Shayxontohur tumani, Ko‘kcha darvoza
                                ko‘chasi,27 uy
                            </div>
                        </div>
                        <div className="footerInfo">
                            <div className="infoTitle">{t("companyInfo")}</div>
                            <Link to="/profileOver">
                                <div className="infoText">{t("profile")}</div>
                            </Link>
                            <Link to="/">
                            <div className="infoText">{t("gallery")}</div>
                            </Link>
                            <Link to="/allPdf">
                            <div className="infoText">{t("portfolio")}</div>
                            </Link>
                            <Link to="/loginIn">
                            <div className="infoText">{t("login")}</div>
                            </Link>
                            <Link to="/">
                            <div className="infoText">{t("setting")}</div>
                            </Link>
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
