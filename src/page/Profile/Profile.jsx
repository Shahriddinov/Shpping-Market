import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import {useTranslation} from "react-i18next";
import "antd/dist/antd.css";
import "./Profile.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Page1 from "../../components/Page1/Page1";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import React, {useState} from "react";
import dayjs from "dayjs";
import Slayder from "../../components/Slayder/slayder";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {func} from "prop-types";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Profile() {
    // const [user_id, setUser_id] = useState('');
    const [full_name, setFull_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birth_date, setBirth_date] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [nationality, setNationality] = useState('');
    const [text, setText]= useState('545454');
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    // const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));


    /********Errors*******/
    const initialError={
        frame:false,
        eText:''
    };

    const [eEmail, setEEmail] = useState(initialError);
    const [eNumber, setENumber] = useState(initialError);

    function errorEmail(e){
        if(e.target.value.endsWith('@gmail.com'))
            setEEmail(initialError);
        else
            setEEmail({frame:true, eText:'Incorrect email'});
    }

    function errorNumber(e){
        if(e.target.value.substring(0, 4) === '+998' && e.target.value.length === 13) setENumber(initialError);
        else setENumber({frame:true, eText:'Incorrect phone number'});
    }

    /********Errors*******/




    const handleChange = (newValue: Date | null) => {
        setBirth_date(newValue);
    };

    // const handleNation = (event) => {
    //     setNation(event.target.value);
    // };

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem(t("profile"), "1", <AddCircleIcon/>),
        getItem(t("gallery"), "2", <HomeIcon/>),
        getItem(t("portfolio"), "3", <SdCardIcon/>),
        getItem(t("login"), "4", <LoginIcon/>),
        getItem(t("setting"), "5", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    // const pnfl = () => {
    //     localStorage.getItem('pnfl')
    // }

    function personalInfo() {
        let info = {
            user_id: localStorage.getItem('id'),
            full_name,
            email,
            phone,
            gender,
            birth_date,
            nationality,
            pasport_id: localStorage.getItem('pasportId')
        };
        axios.post('https://micros-test.w.wschool.uz/public/api/personal', info).then((response) => {
            console.log(response.data);
            if (response.data.status === 'success') {
                setTimeout(() => {
                    navigate("/education");
                }, 100);

            }
        }).catch((error)=>{
            if (error.response.status >= 500)
                setText("server connection error");
        })
    }

    return (
        <section id="Profile" className="Profile">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items={items} userName={t("fio")}/>
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng} questionNeed={true}/>
                <ProfileNavbar title={t("fullInfo")}/>
                <div className="Page1">
                    <Slayder/>
                    <form action="post" className="page1__form">
                        <div className="page1__form-left w-100">
                            <label className="fio__label page1__label" htmlFor="fio">
                                {t("userName")} *


                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="fio__input page1__input mt-3"
                                        id="outlined-basic"
                                        label={t("userName")}
                                        onChange={(e) => setFull_name(e.target.value)}
                                        variant="outlined"
                                    />
                                </Box>
                            </label>
                            <FormGroup
                                className="page1__gender"
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <FormControlLabel control={<Switch/>} label={t("women")}/>
                                <FormControlLabel control={<Switch/>} label={t("man")}/>
                            </FormGroup>

                            <label className="email__label page1__label" style={{marginTop: "11%"}} htmlFor="email">
                                {t("Email")} *

                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        error={eEmail.frame}
                                        helperText={eEmail.eText}
                                        className="email__input page1__input mt-4"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            errorEmail(e)
                                        }}
                                        id="outlined-basic"
                                        label={t("Email")}
                                        variant="outlined"
                                    />
                                </Box>

                            </label>
                        </div>
                        <div className="page1__form-right">
                            <div className="page1__nationality-wrapper mt-2">
                                <label className="email__label page1__label mt-1" htmlFor="nation">
                                    {t("nation")} *

                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': {width: '100%'},
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            className="email__input page1__input mt-2"
                                            onChange={(e) => setNationality(e.target.value)}
                                            id="outlined-basic"
                                            label={t("nation")}
                                            variant="outlined"
                                        />
                                    </Box>

                                </label>
                            </div>
                            <label className="date__label page1__label" htmlFor="date">
                                {t("happy")} *
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className="mt-3"
                                            value={birth_date}
                                            label="Date desktop"
                                            inputFormat="MM/DD/YYYY"

                                            onChange={setBirth_date}
                                            renderInput={(params) => {
                                                return <TextField {...params}  />
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </label>

                            <label
                                className="phone-number__label page1__label mt-2"
                                htmlFor="phone-number"
                            >
                                {t("phoneNumber")} *
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        error={eNumber.frame}
                                        helperText={eNumber.eText}
                                        className="phone-number__input page1__input mt-3"
                                        type="text"
                                        id="outlined-basic"
                                        label={t("phoneNumber")}
                                        variant="outlined"
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            errorNumber(e);
                                        }}
                                    />
                                </Box>
                            </label>
                        </div>
                    </form>

                </div>
                <div className="NextPrev">
                    <Stack spacing={2} direction="row">
                        <Button className="button" href="/userInfo" variant="contained">
                            {" "}
                            <span className="icones">
                <CancelOutlinedIcon fontSize="small"/>
              </span>{" "}
                            Назад
                        </Button>
                    </Stack>
                    <Stack spacing={2} direction="row" className="mb-4">
                        <Button
                            className="button"
                            onClick={personalInfo}
                            // href="/education"
                            style={{backgroundColor: "#0FBE7B"}}
                            variant="contained"
                        >
                            {" "}
                            <span className="icones">
                <CheckCircleOutlineOutlinedIcon fontSize="small"/>
              </span>{" "}
                            Продолжить
                        </Button>
                    </Stack>
                </div>
            </section>
        </section>
    );
}

export default Profile;