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
                    <Menu theme="dark" style={{marginTop:"36%"}} defaultSelectedKeys={['1']} mode="inline" items={items}/>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        <div className="container">
                            <div className="left">
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
                                <NotificationsNoneIcon className="icon" />
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
                            <div className="right">
                                <SpeedIcon className="icon"/>
                            <Breadcrumb.Item style={{color:"#2B63C0"}}>{t("gallery")}</Breadcrumb.Item>
                            <Breadcrumb.Item style={{opacity:"0.5"}}> {t("login")}</Breadcrumb.Item>
                            {/*<Breadcrumb.Item style={{opacity:"0.5"}}> Профиль</Breadcrumb.Item>*/}
                            </div>
                        </div>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                height: "100vh"
                            }}
                        >
                            Bill is a cat.
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default ComeSystem;