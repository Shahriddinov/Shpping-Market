import React from 'react';
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


function Qualification() {
    const [region, setRegion] = React.useState('');
    const [direction, setDirection] = React.useState('');
    const [attended, setAttended] = React.useState('');

    const {t, i18n} = useTranslation();

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

    const handleChange = (event) => {
        setRegion(event.target.value);
    };
    const handleDirection = (event) => {
        setDirection(event.target.value);
    };
    const handleAttended = (event) => {
        setAttended(event.target.value);
    };

    return (
        <section className="qualification">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items={items}/>
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                {/*<Page1/>*/}
                <div className="forms">
                    <Slayder/>
                    <div className="title"> {t("advanced")}</div>
                    <div className="form-control">
                        <div className="form">
                            <label className="qualificationLabel">{t("region")}*</label>
                            <FormControl sx={{ minWidth: "100%" }} size="small">
                                <InputLabel id="demo-select-small">{t("region")}</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={region}
                                    label={t("region")}
                                    onChange={handleChange}
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
                        <div className="form">
                            <label className="qualificationLabel">{t("direction")}*</label>
                            <FormControl sx={{ minWidth: "100%" }} size="small">
                                <InputLabel id="demo-select-small">{t("direction")}</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={direction}
                                    label={t("direction")}
                                    onChange={handleDirection}
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
                    </div>
                    <div className="form-control">
                        <div className="form">
                            <label className="qualificationLabel">{t("attended")}*</label>
                            <FormControl sx={{ minWidth: "100%" }} size="small">
                                <InputLabel id="demo-select-small">{t("attended")}</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={attended}
                                    label={t("attended")}
                                    onChange={handleAttended}
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
                        <div className="form">
                            <label className="qualificationLabel">{t("date")}*</label>
                            <input type="date" className="qualificationInput"/>
                        </div>
                    </div>
                </div>

                <div className="next-page">

                    <div className="back-btn">
                        <Stack spacing={2} direction="row">
                            <Button className="button" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                        </Stack>
                    </div>
                    <div className="next-btn">
                        {/*<button>Продолжить</button>*/}
                        <Stack spacing={2} direction="row">
                            <Button className="button" href="/qualification" style={{backgroundColor: "#0FBE7B"}} variant="contained"> <span className="icon"><SaveAsIcon fontSize="small"/></span> Сохранить</Button>
                        </Stack>
                    </div>
                </div>

            </section>

        </section>
    );
}

export default Qualification;
