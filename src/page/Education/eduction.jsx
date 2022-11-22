import React, {useState} from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useTranslation} from "react-i18next";
import "./education.scss";
import Slayder from "../../components/Slayder/slayder";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TextField from "@mui/material/TextField";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Education = () => {

    const {t, i18n} = useTranslation();
    const [text, setText] = useState('')
    const [region, setRegion] = useState('');
    const [institution, setInstitution] = React.useState('');
    const [speciality, setSpeciality] = React.useState('');
    const [text, setText] = useState('')
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [count, setCount] = useState('');
    const [region_id, setRegion_id] = useState('');
    const [enter_date, setEnter_date] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [end_date, setEnd_date] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [education_name, setEducation_name] = useState('');
    const [specialization, setSpecialization] = useState('');
    const navigate = useNavigate();
    const sayHello = () => {

    };

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
        getItem(t("partfolio"), "3", <SdCardIcon/>),
        getItem(t("login"), "4", <LoginIcon/>),
        getItem(t("setting"), "5", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    function educations() {
        let education = {
            user_id: localStorage.getItem('userId'),
            region_id,
            enter_date,
            end_date,
            education_name,
            specialization
        }
        axios.post('https://micros-test.w.wschool.uz/public/api/education', education).then((response) => {
            console.log(response.data);
            if (response.data.status === 'success') {
                setTimeout(() => {
                    navigate("/work");
                }, 100);
            }

        }).catch((error) => {
            if (error.response.status >= 500)
                setText("server connection error");
        })
    }

    function educations() {
        let education = {
            user_id: localStorage.getItem('id'),
            region_id,
            enter_date,
            end_date,
            education_name,
            specialization
        }
        axios.post('https://micros-test.w.wschool.uz/public/api/education', education).then((response) => {
            console.log(response.data);
            if (response.data.status === 'success') {
                setTimeout(() => {
                    navigate("/work");
                }, 100);
            }

        }).catch((error) => {
            if (error.response.status >= 500)
                setText("server connection error");
        })
    }

    return (
        <section id="education" className="education">
            <ProfileSidebar items={items}/>
            <div className="eduPage">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>

                <div className="formBox">
                    <Slayder val={1}/>
                    {/*<div className="eduInfo">{t("eduInfo")}</div>*/}
                    <div className="infoEdu">
                        <h3 className="title">{t("aboutEducation")}</h3>
                        <div className="side-by-side">
                            <div className="leftSide">
                                <label className="label" htmlFor="region">{t("region")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={region}
                                            label={t("region")}
                                            onChange={(e) => setRegion_id(e.target.value)}
                                        >
                                            <MenuItem value={1}>Ташкент</MenuItem>
                                            <MenuItem value={2}>Andijan</MenuItem>
                                            <MenuItem value={3}>Bukhara</MenuItem>
                                            <MenuItem value={4}>Jizzakh</MenuItem>
                                            <MenuItem value={5}>Kashkadarya</MenuItem>
                                            <MenuItem value={6}>Navoi</MenuItem>
                                            <MenuItem value={7}>Namangan</MenuItem>
                                            <MenuItem value={8}>Samarkand</MenuItem>
                                            <MenuItem value={9}>Sirdarya</MenuItem>
                                            <MenuItem value={10}>Surkhandarya</MenuItem>
                                            <MenuItem value={11}>Fergana</MenuItem>
                                            <MenuItem value={12}>Khorezm</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <label className="label mt-3" htmlFor="institution">{t("institution")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px"}}>
                                    <TextField
                                        label={t("institution")}
                                        name="institution"
                                        type="text"
                                        style={{width: "550px"}}
                                        className="city"
                                        onChange={(e) => setEducation_name(e.target.value)}
                                    />
                                </Box>
                                <label className="label mt-3" htmlFor="speciality">{t("speciality")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px"}}>
                                    <TextField
                                        label={t("speciality")}
                                        name="speciality"
                                        type="text"
                                        style={{width: "550px"}}
                                        className="city"
                                        onChange={(e) => setSpecialization(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <div className="rightSide" style={{width: "45%"}}>
                                <label className="label mb-2" htmlFor="dateReceived">{t("dateReceived")} *</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className="mt-2"
                                            label={t("dateReceived")}
                                            inputFormat="MM/DD/YYYY"
                                            value={enter_date}
                                            onChange={setEnter_date}
                                            renderInput={(params) => {
                                                return <TextField {...params} />
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <label className="label mt-2" htmlFor="expirationDate">{t("expirationDate")} *</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className="mt-2"
                                            label={t("expirationDate")}
                                            inputFormat="MM/DD/YYYY"
                                            value={end_date}
                                            onChange={setEnd_date}
                                            renderInput={(params) => {
                                                return <TextField {...params} />
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <Button className=" added" onClick={() => {
                                    setCount(count + 1);
                                }} variant="outlined"><ControlPointIcon/>{t("addEduc")}</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{count.length > 0 && (
                    <div className="formBox">
                        <Slayder val={1}/>
                        {/*<div className="eduInfo">{t("eduInfo")}</div>*/}
                        <div className="infoEdu">
                            <h3 className="title">{t("aboutEducation")}</h3>
                            <div className="side-by-side">
                                <div className="leftSide">
                                    <label className="label" htmlFor="region">{t("region")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px"}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label={t("region")}
                                                onChange={(e) => setRegion_id(e.target.value)}
                                            >
                                                <MenuItem value="1">Ташкент</MenuItem>
                                                <MenuItem value="2">Andijan</MenuItem>
                                                <MenuItem value="3">Bukhara</MenuItem>
                                                <MenuItem value="4">Jizzakh</MenuItem>
                                                <MenuItem value="5">Kashkadarya</MenuItem>
                                                <MenuItem value="6">Navoi</MenuItem>
                                                <MenuItem value="7">Namangan</MenuItem>
                                                <MenuItem value="8">Samarkand</MenuItem>
                                                <MenuItem value="9">Sirdarya</MenuItem>
                                                <MenuItem value="10">Surkhandarya</MenuItem>
                                                <MenuItem value="11">Fergana</MenuItem>
                                                <MenuItem value="12">Khorezm</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <label className="label mt-3" htmlFor="institution">{t("institution")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px"}}>
                                        <TextField
                                            label={t("institution")}
                                            name="institution"
                                            type="text"
                                            style={{width: "550px"}}
                                            className="city"
                                            onChange={(e) => setEducation_name(e.target.value)}
                                        />
                                    </Box>
                                    <label className="label mt-3" htmlFor="speciality">{t("speciality")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px"}}>
                                        <TextField
                                            label={t("speciality")}
                                            name="speciality"
                                            type="text"
                                            style={{width: "550px"}}
                                            className="city"
                                            onChange={(e) => setSpecialization(e.target.value)}
                                        />
                                    </Box>
                                </div>
                                <div className="rightSide" style={{width: "45%"}}>
                                    <label className="label mb-2" htmlFor="dateReceived">{t("dateReceived")} *</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                className="mt-2"
                                                label={t("dateReceived")}
                                                inputFormat="MM/DD/YYYY"
                                                value={enter_date}
                                                onChange={setEnter_date}
                                                renderInput={(params) => {
                                                    return <TextField {...params} />
                                                }}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <label className="label mt-2" htmlFor="expirationDate">{t("expirationDate")} *</label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                className="mt-2"
                                                label={t("expirationDate")}
                                                inputFormat="MM/DD/YYYY"
                                                value={end_date}
                                                onChange={setEnd_date}
                                                renderInput={(params) => {
                                                    return <TextField {...params} />
                                                }}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                    <Button className=" added" onClick={() => {
                                        setCount(count + 1);
                                    }} variant="outlined"><ControlPointIcon/>{t("addEduc")}</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}</div>

                <div className="NextPrev">
                    <Stack spacing={2} direction="row">
                        <Button className="button" href="/profile" variant="contained"> <span
                            className="icones"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Button className="button" onClick={educations} style={{backgroundColor: "#0FBE7B"}}
                                variant="contained"> <span className="icones"><CheckCircleOutlineOutlinedIcon
                            fontSize="small"/></span> Продолжить</Button>
                    </Stack>
                </div>
            </div>
        </section>
    );
};

export default Education;