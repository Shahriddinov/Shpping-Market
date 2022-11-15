import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import Logo from "../../assets/images/logo.svg"
import "./comeSystem.scss"
import 'antd/dist/antd.css';
import UzFlag from "../../assets/images/Uz.png";
import RuFlag from "../../assets/images/ruFlag.png";
import {useTranslation} from "react-i18next";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SpeedIcon from '@mui/icons-material/Speed';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Notification from "../../components/Notification/notification";
import Switch from '@mui/material/Switch';
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Stack from "@mui/material/Stack";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {TextField} from "./components/TextFiled";

const label = {inputProps: {'aria-label': 'Switch demo'}};
const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const ComeSystem = () => {
    const [regions, setRegions] = React.useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [fillial_id, setFillial_id] = useState([]);
    const [pasport_id, setPasport_id] = useState([]);
    const [filialId, setFilialId] = useState([]);

    const handleRegions = (event) => {
        setRegions(event.target.value);
    };
    const [collapsed, setCollapsed] = useState(false);

    const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    const validate = Yup.object({
        Логин: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })

    function loginIn() {

        axios.post("https://micros-test.w.wschool.uz/public/api/register", {
            fillial_id: fillial_id,
            login: login,
            password: password,
            // pasport_id: pasport_id
        }).then((response) => {
            setText(response.data.message)
            setFillial_id(response.data)
            setText(response.data.status)
            console.log(response.data)
            if (response.data.status >= 'success') {
                localStorage.setItem("token", response.data.authorisation)
            }
            // if (response.data.status === 'success') {
            //     localStorage.setItem("token", response.data.authorisation)
            // }
        }).catch((error) => {
            if (error.response.data.message >= 422)
                setText("Kiritilgan ma'lumotlarda xatolik");
        })
    }



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
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        <div className="container">
                            <div className="leftses">
                                {/*<div className="name">ФИО</div>*/}
                                <div className="jobTitle">{t("jobTitle")}</div>
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
                                <Notification/>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >

                        <div className="info">
                            <a href="/" className="left">
                                <ArrowBackIosNewIcon className="icon"/>
                                <div className="pro">{t("comeSystem")}</div>
                            </a>

                            <div className="rights">
                                <SpeedIcon className="icon"/>
                                <Breadcrumb.Item style={{color: "#2B63C0"}}>{t("gallery")}</Breadcrumb.Item>
                                <Breadcrumb.Item style={{opacity: "0.5"}}> {t("systemAccess")}</Breadcrumb.Item>
                                {/*<Breadcrumb.Item style={{opacity:"0.5"}}> Профиль</Breadcrumb.Item>*/}
                            </div>
                        </div>
                        <Formik
                            initialValues={{
                                Логин: '',
                                password: '',
                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <div>
                                    <Form>
                                        <div
                                            className="site-layout-background"
                                            style={{
                                                padding: 24,
                                                height: "68vh",
                                                border: "0.5px solid rgba(0, 0, 0, 0.04)",
                                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                                                borderRadius: "12px",
                                            }}
                                        >


                                            <div className="form-control">
                                                <label className="cityLabel">Филиалы *</label>

                                                <select className="city" name="select" onChange={(e)=>fillial_id(e.target.value)}>

                                                    <option value="Toshkent">Toshkent</option>
                                                    <option value="Samarkhand">Samarkhand</option>
                                                    <option value="Nukus">Nukus</option>
                                                    <option value="Fargana">Fargana</option>
                                                </select>


                                                <TextField label="Логин *" name="Логин" type="text" className="city"/>

                                                <TextField
                                                    label="Пароль *"
                                                    name="password"
                                                    type="password"
                                                    className="city"
                                                />
                                                {/*<button className="btn btn-dark mt-3" type="submit">Register</button>*/}
                                                {/*<button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>*/}


                                            </div>
                                            <div className="d-flex p-3 align-items-center justify-content-end">

                                                <div className="passwordError">
                                                    <Link to="/register">
                                                        Забыли пароль ?
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="NextPrev">
                                            <Stack spacing={2} direction="row">
                                                <Button type="reset" className="button" href="/"
                                                        variant="contained"> <span
                                                    className="icones"><CancelOutlinedIcon
                                                    fontSize="small"/></span> Назад</Button>
                                            </Stack>
                                            <Stack spacing={2} direction="row">
                                                {/*href="/profile"*/}
                                                <Button type="submit" onClick={loginIn} className="button"
                                                        style={{backgroundColor: "#0FBE7B"}}
                                                        variant="contained"> <span
                                                    className="icones"><CheckCircleOutlineOutlinedIcon
                                                    fontSize="small"/></span> Продолжить</Button>
                                            </Stack>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
        ;
};

export default ComeSystem;