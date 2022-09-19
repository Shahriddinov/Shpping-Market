import React from 'react';
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
import Notification from "../../components/Notification/notification";
import Next from "../../components/NextButton/next";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TextField from "@mui/material/TextField";

const Eduction = () => {

    const {t, i18n} = useTranslation();
    const [region, setRegion] = React.useState('');
    const [institution, setInstitution] = React.useState('');
    const [speciality, setSpeciality] = React.useState('');

    const handleRegion = (event) => {
        setRegion(event.target.value);
    };
    const handleInstitution = (event) => {
        setInstitution(event.target.value)
    }
    const handleSpeciality = (event) => {
        setSpeciality(event.target.value)
    }

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Профиль", "1", <AddCircleIcon/>),
        getItem("Главная", "2", <HomeIcon/>),
        getItem("Портфолио", "3", <SdCardIcon/>),
        getItem("Логин", "4", <LoginIcon/>),
        getItem("Настройки", "5", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
        <section id="education" className="education">
            <ProfileSidebar items={items}/>
            <div className="eduPage">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                <div className="formBox">
                    <Slayder/>
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
                                            onChange={handleRegion}
                                        >
                                            <MenuItem value={10}>Ташкент</MenuItem>
                                            <MenuItem value={20}>Бухара</MenuItem>
                                            <MenuItem value={30}>Самарканд</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <label className="label mt-3" htmlFor="institution">{t("institution")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("institution")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={institution}
                                            label={t("institution")}
                                            onChange={handleInstitution}
                                        >
                                            <MenuItem value={10}>Образавательное учреждение1</MenuItem>
                                            <MenuItem value={20}>Образавательное учреждение1</MenuItem>
                                            <MenuItem value={30}>Образавательное учреждение1</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <label className="label mt-3" htmlFor="speciality">{t("speciality")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("speciality")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={speciality}
                                            label={t("speciality")}
                                            onChange={handleSpeciality}
                                        >
                                            <MenuItem value={10}>Специальность</MenuItem>
                                            <MenuItem value={20}>Специальность</MenuItem>
                                            <MenuItem value={30}>Специальность</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="rightSide">
                                <label className="label" htmlFor="dateReceived">{t("dateReceived")} *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        className="form-control formData"
                                        label={t("experience")}
                                        type="date"
                                        variant="outlined"
                                    />
                                </Box>
                                <label className="label" htmlFor="expirationDate">{t("expirationDate")} *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        className="form-control formData"
                                        label={t("experience")}
                                        type="date"
                                        variant="outlined"
                                    />
                                </Box>
                                <label className="label" htmlFor="experience">{t("experience")} *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {width: '100%'},
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        className="form-control formData"
                                        label={t("experience")}
                                        type="date"
                                        variant="outlined"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NextPrev">
                    <Stack spacing={2} direction="row">
                        <Button className="button" href="/profile" variant="contained"> <span
                            className="icones"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Button className="button" href="/work" style={{backgroundColor: "#0FBE7B"}}
                                variant="contained"> <span className="icones"><CheckCircleOutlineOutlinedIcon
                            fontSize="small"/></span> Продолжить</Button>
                    </Stack>
                </div>
            </div>
        </section>
    );
};

export default Eduction;