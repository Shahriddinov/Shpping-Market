import React, {useState} from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu} from 'antd';
import Logo from "../../assets/images/logo.svg"

import "./comeSystem.scss"
import 'antd/dist/antd.css';
import UzFlag from "../../assets/images/Uz.png";
import RuFlag from "../../assets/images/ruFlag.png";
import {useTranslation} from "react-i18next";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SpeedIcon from '@mui/icons-material/Speed';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {Link} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(' Пользовательское соглашение', '1', <ArticleIcon/>),
    getItem('Помощь', '2', <HelpOutlineIcon/>),
    // getItem('User', 'sub1', <UserOutlined/>, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
    getItem('О проекте', 'sub2', <InfoIcon/>,
        // [getItem('Team 1', '6'), getItem('Team 2', '8')]
    ),
    // getItem('Files', '9', <FileOutlined/>),
];


const ComeSystem = () => {

    const [collapsed, setCollapsed] = useState(false);

    const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',

                }}
            >

                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="d-flex align-items-center p-2 mt-1">
                        <img src={Logo} alt="" className="layoutLogo"/>
                        <span className="layoutText">JISMONIY TARBIYA VA SPORT BO`YICHA MUTAXASSIZLARNI QATTA TAYYORLASH VA MALAKASINI OSHIRISH INSTITUTI</span>
                    </div>
                    <div className="logo"/>
                    <Menu theme="dark" style={{marginTop: "36%"}} defaultSelectedKeys={['1']} mode="inline"
                          items={items}/>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        <div className="container">
                            <div className="lefts">
                                <div className="name">ФИО</div>
                                <div className="jobTitle">должность</div>
                            </div>
                            <div className="right">
                                <button className="flagButton" onClick={() => handleChangeLng("uz")}>
                                    <img className="iconFlag" src={UzFlag} alt=""/>
                                    Uz
                                </button>
                                <button className="flagButton" onClick={() => handleChangeLng("ru")}>
                                    <img className="iconFlag" src={RuFlag} alt=""/>
                                    Ру
                                </button>
                                <NotificationsNoneIcon className="icon"/>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div className="info">
                            <div className="left">
                                <ArrowBackIosNewIcon className="icon"/>
                                <div className="pro">{t("comeSystem")}</div>
                            </div>
                            <div className="rights">
                                <SpeedIcon className="icon"/>
                                <Breadcrumb.Item style={{color: "#2B63C0"}}>{t("gallery")}</Breadcrumb.Item>
                                <Breadcrumb.Item style={{opacity: "0.5"}}> {t("login")}</Breadcrumb.Item>
                                {/*<Breadcrumb.Item style={{opacity:"0.5"}}> Профиль</Breadcrumb.Item>*/}
                            </div>
                        </div>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                height: "60vh",
                                border: "0.5px solid rgba(0, 0, 0, 0.04)",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                                borderRadius: "12px",
                            }}
                        >

                            <div className="form-control">
                                <label className="cityLabel">Филиалы *</label>
                                <select className="city">
                                    <option value="Toshkent">Toshkent</option>
                                    <option value="Samarqand">Samarqand</option>
                                    <option value="Farg'ona">Farg'ona</option>
                                    <option value="Nukus">Nukus</option>
                                </select>
                                <label className="cityLabel">Логин *</label>
                                <input type="text" placeholder="Login" className="city"/>
                                <label className="cityLabel">Пароль *</label>
                                <input type="number" placeholder="Parol" className="city"/>
                            </div>
                            <div className="d-flex p-3 align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span className="slider"></span>
                                    </label>
                                    <div className="radioText">
                                        Я согласен с политикой конфедициальности
                                    </div>
                                </div>
                                <div className="passwordError">
                                    Забыли пароль ?
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="comeButton">
                                <HighlightOffIcon className="comeIcon"/>
                                Назад
                            </button>
                            <Link to="/profile">
                                <button className="comeButtons">
                                    <CheckCircleIcon className="comeIcon"/>
                                    Войти
                                </button>
                            </Link>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
        ;
};

export default ComeSystem;