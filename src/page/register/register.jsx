import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import Logo from "../../assets/images/logo.svg"
import "./register.scss"
import 'antd/dist/antd.css';
import UzFlag from "../../assets/images/Uz.png";
import RuFlag from "../../assets/images/ruFlag.png";
import {useTranslation} from "react-i18next";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SpeedIcon from '@mui/icons-material/Speed';
import Notification from "../../components/Notification/notification";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Stack from "@mui/material/Stack";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import axios from "axios";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {TextField} from "./components/TextFiled";
import Toast from "light-toast";
import EnFlag from "../../assets/images/en.png";
import {baseApi} from "../../services/api";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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


const Register = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [fillial_id, setFillial_id] = useState([]);
    const [getFillial, setGetFillial] = useState([])
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
        let user = {
            login,
            password,
            fillial_id,
            pasport_id: localStorage.getItem('passport')
        }


        axios.post(`${baseApi}/register`, user, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response) => {

            toast.success(response.data.message);
            localStorage.setItem('userId', response.data.user.id)
            localStorage.setItem("token", response.data.authorisation.token)

            if ((response.data.status === 'ok')) {
                setTimeout(() => {
                    navigate("/profile");
                }, 100);
                toast.success(response.data.Message);
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }
    useEffect(()=>{
        axios.get(`${baseApi}/filial`, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response)=>{
            setGetFillial(response.data.filial)
            console.log(response.data.filial)
        })
    },[])


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
                    <Menu theme="dark" style={{marginTop: "36%"}}  defaultSelectedKeys={['1']} mode="inline"
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
                                {/* <div className="jobTitle">{t("jobTitle")}</div> */}
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
                                <button className="flagButton"
                                        onClick={() => handleChangeLng("en")}>
                                    <img className="iconFlag" src={EnFlag} alt=""/>
                                    En
                                </button>
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
                                <div className="pro">{t("register")}</div>
                            </a>

                            <div className="rights">
                                <SpeedIcon className="icon"/>
                                <Breadcrumb.Item style={{color: "#2B63C0"}}>{t("gallery")}</Breadcrumb.Item>
                                <Breadcrumb.Item style={{opacity: "0.5"}}> {t("systemAccess")}</Breadcrumb.Item>
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
                                                <label className="cityLabel">{t('filial')}</label>
                                                <select className="city" name="select" defaultValue={'DEFAULT'} 
                                                        onChange={(e) => setFillial_id(e.target.value)}>
                                                    <option value="DEFAULT">
                                                        {t("choose")}
                                                    </option>
                                                    {getFillial?.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item?.id}>
                                                                {item?.name_uz ??
                                                                item?.name_en ??
                                                                item?.name_ru ??
                                                                ""}
                                                            </option>
                                                        );
                                                    })}
                                                </select>


                                                <TextField
                                                    label={t("login")}
                                                    name="Логин"
                                                    type="text"
                                                    className="city"
                                                    onKeyUp={(e) => setLogin(e.target.value)}
                                                />

                                                <TextField
                                                    label={t("parol")}
                                                    name="password"
                                                    type="password"
                                                    className="city"
                                                    onKeyUp={(e) => setPassword(e.target.value)}
                                                    // onChange={(e) => setPassword(e.target.value)}
                                                />
                                                {/*<button className="btn btn-dark mt-3" type="submit">Register</button>*/}
                                                {/*<button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>*/}


                                            </div>
                                        </div>
                                        <div className="NextPrev">
                                            <Stack spacing={2} direction="row">
                                                <Button type="reset" className="button" href="/passport"
                                                        variant="contained"> <span
                                                    className="icones"><CancelOutlinedIcon
                                                    fontSize="small"/></span> {t("back")}</Button>
                                            </Stack>
                                            <Stack spacing={2} direction="row">
                                                {/*href="/profile"*/}
                                                <Button type="submit" onClick={loginIn} className="button"
                                                        style={{backgroundColor: "#0FBE7B"}}
                                                        variant="contained"> <span
                                                    className="icones"><CheckCircleOutlineOutlinedIcon
                                                    fontSize="small"/></span>{t("countinue")}</Button>
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

export default Register;