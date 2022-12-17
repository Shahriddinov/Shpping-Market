import {useTranslation} from "react-i18next";
import "antd/dist/antd.css";
import "./Profile.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
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
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Toast from "light-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {baseApi} from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";
import en from "react-phone-number-input/locale/en";

function Profile() {
    const [full_name, setFull_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [birth_date, setBirth_date] = React.useState(
        dayjs("2014-08-18T21:11:54")
    );
    const [nationality, setNationality] = useState("");
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    /********Errors*******/
    const initialError = {
        frame: false,
        eText: "",
    };

    const [eEmail, setEEmail] = useState(initialError);
    const [eNumber, setENumber] = useState(initialError);

    function errorEmail(e) {
        if (e.target.value.endsWith("@gmail.com")) setEEmail(initialError);
        else setEEmail({frame: true, eText: "Incorrect email"});
    }

    function errorNumber(e) {
        if (
            e.target.value.substring(0, 4) === "+998" &&
            e.target.value.length === 13
        )
            setENumber(initialError);
        else setENumber({frame: true, eText: "Incorrect phone number"});
    }

    /********Errors*******/

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    function personalInfo() {
        let info = {
            user_id: localStorage.getItem("userId"),
            full_name,
            email,
            phone,
            gender,
            birth_date,
            nationality,
            pasport_id: localStorage.getItem("passport"),
        };
        axios
            .post(`${baseApi}/personal`, info, {
                headers: {
                    "Accept-Language": localStorage.getItem("lng") || "uz",
                },
            })
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "ok") {
                    setTimeout(() => {
                        navigate("/education");
                    }, 100);
                    toast.success(response.data.Message);
                }
            })
            .catch((error) => {
                // toast.error(error.response?.data?.message)
            });
    }

    return (
        <section id="Profile" className="Profile">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items userName={t("fio")}/>
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng} questionNeed={true}/>
                <ProfileNavbar title={t("fullInfo")}/>
                <div className="Page1">
                    <Slayder/>
                    <form action="post" className="page1__form">
                        <div className="page1__form-left w-50">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": {width: "100%"},
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
                            <FormGroup className="page1__gender">
                                <input
                                    type="radio"
                                    className="womenInput"
                                    name="gender"
                                    id="women"
                                    value="women"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label htmlFor="women" className="women">
                                    {t("women")}
                                </label>
                                <input
                                    type="radio"
                                    className="womenInput"
                                    name="gender"
                                    id="man"
                                    value="man"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label htmlFor="man" className="women">
                                    {t("man")}
                                </label>
                            </FormGroup>

                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": {width: "100%"},
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
                                        errorEmail(e);
                                    }}
                                    id="outlined-basic"
                                    label={t("Email")}
                                    variant="outlined"
                                />
                            </Box>
                        </div>
                        <div className="page1__form-right w-50">
                            <div className="page1__nationality-wrapper mt-2">
                                <Box
                                    component="form"
                                    sx={{
                                        "& > :not(style)": {width: "100%"},
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
                            </div>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                        className="mt-3"
                                        value={birth_date}
                                        label={t("happy")}
                                        inputFormat="MM/DD/YYYY"
                                        onChange={setBirth_date}
                                        renderInput={(params) => {
                                            return <TextField {...params} />;
                                        }}
                                    />
                                </Stack>
                            </LocalizationProvider>

                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": {width: "100%"},
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <PhoneInput
                                    international
                                    labels={en}
                                    limitMaxLength={13}
                                    placeholder="Ваш телефон"
                                    value={phone}
                                    onChange={(e) => setPhone(e)}
                                />
                            </Box>
                        </div>
                    </form>
                </div>
                <div className="NextPrev">
                    <Stack spacing={2} direction="row">
                        <Button className="button" href="/register" variant="contained">
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
