import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
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
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Works() {
    const { t, i18n } = useTranslation();

    const [region, setRegion] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [learningBuild, setLearningBuild] = React.useState('');
    const [typeWork, setTypeWork] = React.useState('');
    const [faculty, setFaculty] = React.useState('');

    const [count, setCount] = useState('');
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
        getItem("Профиль", "1", <AddCircleIcon />),
        getItem("Главная", "2", <HomeIcon />),
        getItem("Портфолио", "3", <SdCardIcon />),
        getItem("Логин", "4", <LoginIcon />),
        getItem("Настройки", "5", <SettingsIcon />),
    ];



    const handleRegion = (event) => {
        setRegion(event.target.value)
    };
    const handleDistrict = (event) => {
        setDistrict(event.target.value)
    };
    const handleLearningBuild = (event) => {
        setLearningBuild(event.target.value)
    };
    const handleTypeWork = (event) => {
        setTypeWork(event.target.value)
    };
    const handleFaculty = (event) => {
        setFaculty(event.target.value)
    };




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
                    <Slayder/>
                    <div className="workInfo">
                        <div className="workAbout">{t("workAbout")}</div>
                    </div>

                    <div className="form">
                        <div className="left-form">
                            <div className="Region">
                                <label className="mt-2" htmlFor="">{t("region")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px", mb:  2}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={region}
                                            label={t("region")}
                                            onChange={handleRegion}
                                        >
                                            <MenuItem value={10}>Toshkent</MenuItem>
                                            <MenuItem value={20}>Forg'ona</MenuItem>
                                            <MenuItem value={30}>Nukus</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="Area">
                                <label htmlFor="">{t("district")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px", mb: 2}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("district")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={district}
                                            label={t("district")}
                                            onChange={handleDistrict}
                                        >
                                            <MenuItem value={10}>Toshkent</MenuItem>
                                            <MenuItem value={20}>Forg'ona</MenuItem>
                                            <MenuItem value={30}>Nukus</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="institution">
                                <label htmlFor="">{t("learningBuild")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px", mb:  2}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("learningBuild")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={learningBuild}
                                            label={t("learningBuild")}
                                            onChange={handleLearningBuild}
                                        >
                                            <MenuItem value={10}>Toshkent</MenuItem>
                                            <MenuItem value={20}>Forg'ona</MenuItem>
                                            <MenuItem value={30}>Nukus</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="place-work">
                                <label htmlFor="">Тип место работы *</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label={t("check")} />
                            </FormGroup>
                        </div>
                        <div className="right-form">
                            <div className="Faculty">
                                <label className="mt-2" htmlFor="">{t("faculty")} *</label>
                                <Box sx={{mt: 1, minWidth: "500px", mb:  2}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("faculty")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={faculty}
                                            label={t("faculty")}
                                            onChange={handleFaculty}
                                        >
                                            <MenuItem value={10}>Toshkent</MenuItem>
                                            <MenuItem value={20}>Forg'ona</MenuItem>
                                            <MenuItem value={30}>Nukus</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="">
                                <label htmlFor="">{t("department")} *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="mt-1"
                                        id="outlined-basic"
                                        label={t("department")}
                                        variant="outlined"
                                    />
                                </Box>
                            </div>
                            <div className="">
                                <label className="mt-2" htmlFor="">{t("jobTitle")} *</label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="mt-1"
                                        id="outlined-basic"
                                        label={t("jobTitle")}
                                        variant="outlined"
                                    />
                                </Box>
                            </div>
                            <div className="">
                                <label className="mt-2" htmlFor="">{t("workNumber")} </label>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="mt-1"
                                        id="outlined-basic"
                                        label={t("workNumber")}
                                        variant="outlined"
                                    />
                                </Box>
                            </div>
                            <Button className=" added"  onClick={() => {setCount(count + 1);}} variant="outlined"><ControlPointIcon/>{t("addWork")}</Button>

                        </div>
                    </div>

                </div>
                {count.length > 0 && (
                    <div className="forms mt-5">
                        <div className="form">
                            <div className="left-form">
                                <div className="Region">
                                    <label className="mt-2" htmlFor="">{t("region")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px", mb:  2}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={region}
                                                label={t("region")}
                                                onChange={handleRegion}
                                            >
                                                <MenuItem value={10}>Toshkent</MenuItem>
                                                <MenuItem value={20}>Forg'ona</MenuItem>
                                                <MenuItem value={30}>Nukus</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="Area">
                                    <label htmlFor="">{t("district")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px", mb: 2}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("district")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={district}
                                                label={t("district")}
                                                onChange={handleDistrict}
                                            >
                                                <MenuItem value={10}>Toshkent</MenuItem>
                                                <MenuItem value={20}>Forg'ona</MenuItem>
                                                <MenuItem value={30}>Nukus</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="institution">
                                    <label htmlFor="">{t("learningBuild")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px", mb:  2}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("learningBuild")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={learningBuild}
                                                label={t("learningBuild")}
                                                onChange={handleLearningBuild}
                                            >
                                                <MenuItem value={10}>Toshkent</MenuItem>
                                                <MenuItem value={20}>Forg'ona</MenuItem>
                                                <MenuItem value={30}>Nukus</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="place-work">
                                    <label htmlFor="">{t("typeWork")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px", mb:  2}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("typeWork")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={typeWork}
                                                label={t("typeWork")}
                                                onChange={handleTypeWork}
                                            >
                                                <MenuItem value={10}>Toshkent</MenuItem>
                                                <MenuItem value={20}>Forg'ona</MenuItem>
                                                <MenuItem value={30}>Nukus</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label={t("check")} />
                                </FormGroup>
                            </div>
                            <div className="right-form">
                                <div className="Faculty">
                                    <label className="mt-2" htmlFor="">{t("faculty")} *</label>
                                    <Box sx={{mt: 1, minWidth: "500px", mb:  2}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("faculty")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={faculty}
                                                label={t("faculty")}
                                                onChange={handleFaculty}
                                            >
                                                <MenuItem value={10}>Toshkent</MenuItem>
                                                <MenuItem value={20}>Forg'ona</MenuItem>
                                                <MenuItem value={30}>Nukus</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="">
                                    <label htmlFor="">{t("department")} *</label>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            className="mt-1"
                                            id="outlined-basic"
                                            label={t("department")}
                                            variant="outlined"
                                        />
                                    </Box>
                                </div>
                                <div className="">
                                    <label className="mt-2" htmlFor="">{t("jobTitle")} *</label>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            className="mt-1"
                                            id="outlined-basic"
                                            label={t("jobTitle")}
                                            variant="outlined"
                                        />
                                    </Box>
                                </div>
                                <div className="">
                                    <label className="mt-2" htmlFor="">{t("workNumber")} </label>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            className="mt-1"
                                            id="outlined-basic"
                                            label={t("workNumber")}
                                            variant="outlined"
                                        />
                                    </Box>
                                </div>
                                <Button className=" added"  onClick={() => {setCount(count + 1);}} variant="outlined"><ControlPointIcon/>{t("addWork")}</Button>

                            </div>

                        </div>

                    </div>
                )}
                <div className="next-page">

                    <div className="back-btn">
                        <Stack spacing={2} direction="row">
                            <Button className="button" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>

                            <Button  href="/education" className="button" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                        </Stack>
                    </div>
                    <div className="next-btn">
                        {/*<button>Продолжить</button>*/}
                        <Next/>
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Work;