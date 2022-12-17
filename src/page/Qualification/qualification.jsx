import React, {useEffect, useState} from 'react';
import "./qualification.scss";
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
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {baseApi} from "../../services/api";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Qualification() {
    const {t, i18n} = useTranslation();
    const [count, setCount] = useState('');
    const [region_id, setRegion_id] = useState('');
    const [fillial_id, setFillial_id] = useState('');
    const [direction, setDirection] = useState('');
    const [date_start, setDate_start] = React.useState(dayjs('2014-08-18'));
    const [date_end, setDate_end] = React.useState(dayjs('2014-08-18'));
    const [text, setText] = useState('')
    const [trainingRegion, setTrainingRegion] = useState([]);
    const navigate = useNavigate();






    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
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
        axios.post(`${baseApi}/training`, train, {
            headers:{
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response) => {
            console.log(response.data);
            if (response.data.status === 'ok') {
                setTimeout(() => {
                    navigate(`/profileOver/${localStorage.getItem('userId')}`);
                }, 100);
                toast.success(response.data.Message);
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message)
        })
    }
    useEffect(()=>{
        axios.get(`${baseApi}/region`,{
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then(res=>{
            setTrainingRegion(res.data.regions)
            console.log(res.data.regions)
        })
    },[localStorage.getItem("lng")])

    return (
        <section className="qualification">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items/>
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                {/*<Page1/>*/}
                <div className="forms">
                    <Slayder val={3}/>
                    <div className="title"> {t("advanced")}</div>
                    <div className="form-control">
                        <div className="form">
                            <FormControl sx={{minWidth: "100%"}} size="small">
                                <InputLabel className="mt-1" id="demo-select-small">{t("region")}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label={t("region")}
                                    onChange={(e,v) => setRegion_id(v.props.children)}
                                >
                                    {trainingRegion?.map((item, index)=>{
                                        return <MenuItem value={item?.id}>{item?.name_uz ?? item?.name_en ?? item?.name_ru ?? ''}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>

                        </div>
                        <div className="form">
                            <Box sx={{ minWidth: "500px", mb: 4}}>
                                <TextField
                                    label={t("direction")}
                                    name="direction"
                                    type="text"

                                    className="city w-100"
                                    onChange={(e) => setDirection(e.target.value)}
                                />
                            </Box>
                        </div>


                    </div>

                    <div className="form-control">
                        <div className="form">
                            <FormControl sx={{minWidth: "100%"}} size="small">
                                <InputLabel className="mt-1" id="demo-select-small">{t("attended")}</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    className="mb-4"
                                    label={t("attended")}
                                    onChange={(e) => setFillial_id(e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Toshkent</MenuItem>
                                    <MenuItem value={2}>Nukus</MenuItem>
                                    <MenuItem value={3}>Samarkhand</MenuItem>
                                    <MenuItem value={4}>Fargana</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                        className="schedule"
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
                    <div className="d-flex  justify-content-between">
                        <div style={{width:"47%"}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                    <DesktopDatePicker
                                        className=" startDate mt-2 w-100"
                                        label={t("data_end")}
                                        inputFormat="MM/DD/YYYY"
                                        value={date_start}
                                        onChange={setDate_start}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </div>
                        {/*<Button className=" added" onClick={() => {*/}
                        {/*    setCount(count + 1);*/}
                        {/*}} variant="outlined"><ControlPointIcon/>{t("addWork")}</Button>*/}
                    </div>

                </div>
                {/*{count.length > 0 && (*/}
                {/*    <div className="forms mt-5">*/}
                {/*        <div className="form-control">*/}
                {/*            <div className="form">*/}
                {/*                <FormControl sx={{minWidth: "100%"}} size="small">*/}
                {/*                    <InputLabel className="mt-1" id="demo-select-small">{t("region")}</InputLabel>*/}
                {/*                    <Select*/}
                {/*                        labelId="demo-simple-select-label"*/}
                {/*                        id="demo-simple-select"*/}
                {/*                        label={t("region")}*/}
                {/*                        onChange={(e) => setRegion_id(e.target.value)}*/}
                {/*                    >*/}
                {/*                        <MenuItem value={1}>Ташкент</MenuItem>*/}
                {/*                        <MenuItem value={2}>Nukus</MenuItem>*/}
                {/*                        <MenuItem value={3}>Samarkand</MenuItem>*/}
                {/*                        <MenuItem value={4}>Fergana</MenuItem>*/}
                {/*                        <MenuItem value={5}>Kashkadarya</MenuItem>*/}
                {/*                        <MenuItem value={6}>Navoi</MenuItem>*/}
                {/*                        <MenuItem value={7}>Namangan</MenuItem>*/}
                {/*                        <MenuItem value={8}>Bukhara</MenuItem>*/}
                {/*                        <MenuItem value={9}>Sirdarya</MenuItem>*/}
                {/*                        <MenuItem value={10}>Surkhandarya</MenuItem>*/}
                {/*                        <MenuItem value={11}>Jizzakh</MenuItem>*/}
                {/*                        <MenuItem value={12}>Khorezm</MenuItem>*/}
                {/*                    </Select>*/}
                {/*                </FormControl>*/}

                {/*            </div>*/}
                {/*            <div className="form">*/}
                {/*                <Box sx={{ minWidth: "500px", mb: 4}}>*/}
                {/*                    <TextField*/}
                {/*                        label={t("direction")}*/}
                {/*                        name="direction"*/}
                {/*                        type="text"*/}
                {/*                        style={{width: "538px"}}*/}
                {/*                        className="city"*/}
                {/*                        onChange={(e) => setDirection(e.target.value)}*/}
                {/*                    />*/}
                {/*                </Box>*/}
                {/*            </div>*/}


                {/*        </div>*/}

                {/*        <div className="form-control">*/}
                {/*            <div className="form">*/}
                {/*                <FormControl sx={{minWidth: "100%"}} size="small">*/}
                {/*                    <InputLabel className="mt-1" id="demo-select-small">{t("attended")}</InputLabel>*/}
                {/*                    <Select*/}
                {/*                        labelId="demo-select-small"*/}
                {/*                        id="demo-select-small"*/}
                {/*                        className="mb-4"*/}
                {/*                        label={t("attended")}*/}
                {/*                        onChange={(e) => setFillial_id(e.target.value)}*/}
                {/*                    >*/}
                {/*                        <MenuItem value="">*/}
                {/*                            <em>None</em>*/}
                {/*                        </MenuItem>*/}
                {/*                        <MenuItem value={1}>Toshkent</MenuItem>*/}
                {/*                        <MenuItem value={2}>Nukus</MenuItem>*/}
                {/*                        <MenuItem value={3}>Samarkhand</MenuItem>*/}
                {/*                        <MenuItem value={4}>Fargana</MenuItem>*/}
                {/*                    </Select>*/}
                {/*                </FormControl>*/}
                {/*            </div>*/}
                {/*            <div className="form">*/}
                {/*                <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                {/*                    <Stack spacing={3}>*/}
                {/*                        <DesktopDatePicker*/}
                {/*                            className="form-control formData"*/}
                {/*                            label={t("date")}*/}
                {/*                            inputFormat="MM/DD/YYYY"*/}
                {/*                            value={date_start}*/}
                {/*                            onChange={setDate_start}*/}
                {/*                            renderInput={(params) => {*/}
                {/*                                return <TextField {...params} />*/}
                {/*                            }}*/}
                {/*                        />*/}
                {/*                    </Stack>*/}
                {/*                </LocalizationProvider>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*        <div className="d-flex  justify-content-between">*/}
                {/*            <div>*/}
                {/*                <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                {/*                    <Stack spacing={3}>*/}
                {/*                        <DesktopDatePicker*/}
                {/*                            className=" startDate mt-2"*/}
                {/*                            label={t("date")}*/}
                {/*                            inputFormat="MM/DD/YYYY"*/}
                {/*                            value={date_end}*/}
                {/*                            onChange={setDate_end}*/}
                {/*                            renderInput={(params) => <TextField {...params} />}*/}
                {/*                        />*/}
                {/*                    </Stack>*/}
                {/*                </LocalizationProvider>*/}
                {/*            </div>*/}
                {/*            <Button className=" added" onClick={() => {*/}
                {/*                setCount(count + 1);*/}
                {/*            }} variant="outlined"><ControlPointIcon/>{t("addWork")}</Button>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*)}*/}

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
