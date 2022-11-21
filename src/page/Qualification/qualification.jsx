import React, {useState} from 'react';
import "./qualification.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Select from '@mui/material/Select';
import {useTranslation} from "react-i18next";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Slayder from "../../components/Slayder/slayder";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";


function Qualification() {
    const [region, setRegion] = React.useState('');
    const [direction, setDirection] = React.useState('');
    const [attended, setAttended] = React.useState('');
    const {t, i18n} = useTranslation();
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [count, setCount] = useState('');
    const [region_id, setRegion_id] = useState('');
    const [fillial_id, setFillial_id] = useState('');
    const [direction, setDirection] = useState('');
    const [date_start, setDate_start] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [date_end, setDate_end] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [text, setText] = useState('')
    const navigate = useNavigate();


    const handleChanges = (newValue) => {
        setValue(newValue);
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
        getItem(t("portfolio"), "3", <SdCardIcon/>),
        getItem(t("login"), "4", <LoginIcon/>),
        getItem(t("setting"), "5", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    const handleChange = (event) => {
        setRegion(event.target.value);
    };
    const handleDirection = (event) => {
        setDirection(event.target.value);
    };
    const handleAttended = (event) => {
        setAttended(event.target.value);
    };

    function training() {
        let train = {
            user_id: localStorage.getItem('userId'),
            region_id,
            fillial_id,
            direction,
            date_start,
            date_end
        }
        axios.post('https://micros-test.w.wschool.uz/public/api/training', train).then((response) => {
            console.log(response.data);
            if (response.data.status === 'success') {
                setTimeout(() => {
                    navigate("/profileOver");
                }, 100);
            }
        }).catch((error) => {
            if (error.response.status >= 500)
                setText("server connection error");
        })
    }

    return (
        <section className="qualification">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items={items}/>
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                {/*<Page1/>*/}
                <div className="forms">
                    <Slayder val={3}/>
                    <div className="title"> {t("advanced")}</div>
                    <div className="form-control">
                        <div className="form">
                            <label className="qualificationLabel">{t("region")}*</label>
                            <FormControl sx={{minWidth: "100%"}} size="small">
                                <InputLabel id="demo-select-small">{t("region")}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
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

                        </div>
                        <div className="form">
                            <label className="qualificationLabel">{t("direction")}*</label>
                            <Box sx={{ minWidth: "500px"}}>
                                <TextField
                                    label={t("direction")}
                                    name="direction"
                                    type="text"
                                    style={{width: "538px"}}
                                    className="city"
                                    onChange={(e) => setDirection(e.target.value)}
                                />
                            </Box>
                        </div>


                    </div>

                    <div className="form-control">
                        <div className="form">
                            <label className="qualificationLabel">{t("attended")}*</label>
                            <FormControl sx={{minWidth: "100%"}} size="small">
                                <InputLabel id="demo-select-small">{t("attended")}</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"

                                    label={t("attended")}
                                    onChange={(e) => setFillial_id(e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Toshkent</MenuItem>
                                    <MenuItem value={2}>Samarkhand</MenuItem>
                                    <MenuItem value={3}>Samarkhand</MenuItem>
                                    <MenuItem value={4}>Fargana</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form">
                            <label className="qualificationLabel">{t("date")}*</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                        className="form-control formData"
                                        label={t("date")}
                                        inputFormat="MM/DD/YYYY"
                                        value={date_start}
                                        onChange={setDate_start}
                                        renderInput={(params) => {
                                            return <TextField {...params} />
                                        }}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </div>

                    </div>
                    <div className="d-flex  justify-content-between">
                        <div className="">
                            <label className="qualificationLabel m-lg-2">{t("date")}*</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                        className=" startDate"
                                        label={t("date")}
                                        inputFormat="MM/DD/YYYY"
                                        value={date_end}
                                        onChange={setDate_end}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </div>
                        <Button className=" added" onClick={() => {
                            setCount(count + 1);
                        }} variant="outlined"><ControlPointIcon/>{t("addWork")}</Button>
                    </div>

                </div>
                {count.length > 0 && (
                    <div className="forms mt-5">
                        <div className="form-control">
                            <div className="form">
                                <label className="qualificationLabel">{t("region")}*</label>
                                <FormControl sx={{minWidth: "100%"}} size="small">
                                    <InputLabel id="demo-select-small">{t("region")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
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

                            </div>
                            <div className="form">
                                <label className="qualificationLabel">{t("direction")}*</label>
                                <Box sx={{ minWidth: "500px"}}>
                                    <TextField
                                        label={t("direction")}
                                        name="direction"
                                        type="text"
                                        className="city"
                                        onChange={(e) => setDirection(e.target.value)}
                                    />
                                </Box>
                            </div>


                        </div>

                        <div className="form-control">
                            <div className="form">
                                <label className="qualificationLabel">{t("attended")}*</label>
                                <FormControl sx={{minWidth: "100%"}} size="small">
                                    <InputLabel id="demo-select-small">{t("attended")}</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label={t("attended")}
                                        onChange={(e) => setFillial_id(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Toshkent</MenuItem>
                                        <MenuItem value={2}>Samarkhand</MenuItem>
                                        <MenuItem value={3}>Nukus</MenuItem>
                                        <MenuItem value={4}>Fargana</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="form">
                                <label className="qualificationLabel">{t("date")}*</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className="form-control formData"
                                            label={t("date")}
                                            inputFormat="MM/DD/YYYY"
                                            value={date_start}
                                            onChange={setDate_start}
                                            renderInput={(params) => {
                                                return <TextField {...params} />
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>

                        </div>
                        <div className="d-flex  justify-content-between">
                            <div className="">
                                <label className="qualificationLabel m-lg-2">{t("date")}*</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className=" startDate"
                                            label={t("date")}
                                            inputFormat="MM/DD/YYYY"
                                            value={date_end}
                                            onChange={setDate_end}
                                            renderInput={(params) => {
                                                return <TextField {...params} />
                                            }}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>

                        </div>

                    </div>
                )}

                <div className="next-page">

                    <div className="back-btn">
                        <Stack spacing={2} direction="row">
                            <Button
                                className="button"
                                href="/work"
                                variant="contained">
                                <span className="icon">
                                    <CancelOutlinedIcon fontSize="small"/>
                                </span> Назад
                            </Button>
                        </Stack>
                    </div>
                    <div className="next-btn">
                        {/*<button>Продолжить</button>*/}
                        <Stack spacing={2} direction="row">
                            <Button className="button" onClick={training} style={{backgroundColor: "#0FBE7B"}}
                                    variant="contained"> <span className="icon"><SaveAsIcon
                                fontSize="small"/></span> Сохранить</Button>
                        </Stack>
                    </div>
                </div>

            </section>

        </section>
    );
}

export default Qualification;
