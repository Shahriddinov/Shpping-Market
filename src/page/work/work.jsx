import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";
import "antd/dist/antd.css";
import "./work.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Page1 from "../../components/Page1/Page1";
import Slayder from "../../components/Slayder/slayder";
import Next from "../../components/NextButton/next";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import * as React from "react";


function Work() {
    const { t, i18n } = useTranslation();
    const [region, setRegion] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [learning, setLearning] = React.useState('');
    const [typeWork, setTypeWork] = React.useState('');
    const [faculty, setFaculty] = React.useState('');

    const handleRegion = (event) => {
        setRegion(event.target.value);
    };
    const handleDistrict = (event) => {
        setDistrict(event.target.value);
    };
    const handleLearning = (event) => {
        setLearning(event.target.value);
    };
    const handleTypeWork = (event) => {
        setTypeWork(event.target.value);
    };
    const handleFaculty = (event) => {
        setFaculty(event.target.value);
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
        getItem("Профиль", "1", <AddCircleIcon />),
        getItem("Главная", "2", <HomeIcon />),
        getItem("Портфолио", "3", <SdCardIcon />),
        getItem("Логин", "4", <LoginIcon />),
        getItem("Настройки", "5", <SettingsIcon />),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
        <section id="Profile" className="Profile">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items={items} />
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                {/*<Page1/>*/}
                <div className="forms">
                    <Slayder val={2}/>
                    <div className="title"> {t("jobDetails")}</div>
                    <div className="form">
                        <div className="left-form">
                            <div className="Region">
                                <label htmlFor="">{t("region")} *</label>
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">{t("region")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={region}
                                        label={t("region")}
                                        onChange={handleRegion}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="Area">
                                <label style={{marginTop:"15px"}}>{t("district")} *</label>
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">{t("district")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={district}
                                        label={t("district")}
                                        onChange={handleDistrict}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="institution">
                                <label style={{marginTop:"15px"}} htmlFor="">{t("learningBuild")} *</label>
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">{t("learningBuild")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={learning}
                                        label={t("learningBuild")}
                                        onChange={handleLearning}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="place-work">
                                <label style={{marginTop:"15px"}} htmlFor="">{t("typeWork")} *</label>
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">{t("typeWork")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={typeWork}
                                        label={t("typeWork")}
                                        onChange={handleTypeWork}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="place-number">
                                <label style={{marginTop:"15px"}} htmlFor="">{t("workNumber")} </label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField type="text" className='m-0' id="outlined-basic" label={t("workNumber")} variant="outlined" />
                                </Box>
                            </div>
                        </div>
                        <div className="right-form">
                            <div className="Faculty">
                                <label style={{marginTop:"15px"}} htmlFor="">{t("faculty")} *</label>
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">{t("faculty")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={faculty}
                                        label={t("faculty")}
                                        onChange={handleFaculty}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                                <label style={{marginTop:"15px"}} htmlFor="">{t("chair")} *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField type="text" id="outlined-basic" label={t("chair")} variant="outlined" />
                                </Box>
                                <label style={{marginTop:"15px"}} htmlFor="">{t("jobTitle")} *</label>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField type="text" id="outlined-basic" label={t("jobTitle")} variant="outlined" />
                            </Box>
                            <div className="">
                                <label style={{marginTop:"15px"}} htmlFor="">{t("jobName")} *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField type="text" id="outlined-basic" label={t("jobName")} variant="outlined" />
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="next-page">

                    <div className="back-btn">
                        <Stack spacing={2} direction="row">
                            <Button className="button" href="/education" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                        </Stack>
                    </div>
                    <div className="next-btn">
                        {/*<button>Продолжить</button>*/}
                        <Stack spacing={2} direction="row">
                            <Button className="button" href="/qualification" style={{backgroundColor: "#0FBE7B"}} variant="contained"> <span className="icon"><CheckCircleOutlineOutlinedIcon fontSize="small"/></span> Продолжить</Button>
                        </Stack>
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Work;
