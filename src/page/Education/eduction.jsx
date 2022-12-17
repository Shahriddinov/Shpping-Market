import React, {useEffect, useState} from 'react';
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
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {baseApi} from "../../services/api";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Autocomplete from "@mui/material/Autocomplete";

const Education = () => {

    const {t, i18n} = useTranslation();
    const [count, setCount] = useState('');
    const [region_id, setRegion_id] = useState('');
    const [enter_date, setEnter_date] = React.useState(dayjs('2014-08-18'));
    const [end_date, setEnd_date] = React.useState(dayjs('2014-08-18'));
    const [education_name, setEducation_name] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [nameEducations, setNameEducations] = useState([]);
    const [selectedEducationName, setSelectedEducationName] = useState('')
    const [regionse, setRegionse] = useState([])

    const navigate = useNavigate();


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
            education_name: selectedEducationName,
            specialization
        }
        axios.post(`${baseApi}/education`, education, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response) => {
            console.log(response.data);
            if (response.data.status === 'ok') {
                setTimeout(() => {
                    navigate("/work");
                }, 100);
                toast.success(response.data.Message);
            }

        }).catch((error) => {
            // toast.error(error.response?.data?.message)

        })
    }

    useEffect(() => {
        university()
    },[])

    function university() {
        axios.get(`${baseApi}/educationname`, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then(res => {
            setNameEducations(res.data.educationName)
            console.log(res.data.educationName)
        })
    }
    useEffect(()=>{
        axios.get(`${baseApi}/region`,{
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then(res=>{
            setRegionse(res.data.regions)
            console.log(res.data.regions)
        })
    },[localStorage.getItem("lng")])


    return (
        <section id="education" className="education">
            <ProfileSidebar items/>
            <div className="eduPage">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>

                <div className="formBox">
                    <Slayder val={1}/>
                    <div className="infoEdu">
                        <h3 className="title">{t("aboutEducation")}</h3>
                        <div className="side-by-side">
                            <div className="leftSide w-50">
                                <Box sx={{mt: 1, minWidth: "500px"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            className="mb-4"
                                            label={t("region")}
                                            onChange={(e,v) => {
                                                setRegion_id(v.props.children)
                                                // console.log(v.props.children)
                                            }}
                                        >
                                            {regionse?.map((item, index)=>{
                                               return <MenuItem value={item?.id}>{item?.name_uz ?? item?.name_en ?? item?.name_ru ?? ''}</MenuItem>
                                            })}

                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{mt: 1}}>
                                    <Autocomplete
                                        freeSolo
                                        id="free-solo-2-demo"
                                        disableClearable
                                        options={nameEducations?.map((option) => option?.name_uz ?? option?.name_en ?? option?.name_ru ?? "")}
                                        onChange={(event, value) => setSelectedEducationName(value)}

                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label={t("institution")}
                                                // onChange={(e) => setEducation_name(e.target.value)}

                                                className="w-100 mb-4"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                    {/*<TextField*/}
                                    {/*    label={t("institution")}*/}
                                    {/*    name="institution"*/}
                                    {/*    type="text"*/}
                                    {/*    // style={{width: "550px"}}*/}
                                    {/*    className="w-100 mb-4"*/}

                                    {/*/>*/}
                                </Box>
                                <Box sx={{mt: 1}}>
                                    <TextField
                                        label={t("speciality")}
                                        name="speciality"
                                        type="text"
                                        className="w-100 mb-4"
                                        onChange={(e) => setSpecialization(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <div className="rightSide" style={{width: "45%"}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className="mt-2 mb-4"
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
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className="mt-3 mb-4"
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
                                {/*<Button className=" added" onClick={() => {*/}
                                {/*    setCount(count + 1);*/}
                                {/*}} variant="outlined"><ControlPointIcon/>{t("addEduc")}</Button>*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div>{count.length > 0 && (*/}
                {/*    <div className="formBox">*/}
                {/*        <div className="infoEdu">*/}
                {/*            <h3 className="title">{t("aboutEducation")}</h3>*/}
                {/*            <div className="side-by-side">*/}
                {/*                <div className="leftSide">*/}
                {/*                    <Box sx={{mt: 1, minWidth: "500px"}}>*/}
                {/*                        <FormControl fullWidth>*/}
                {/*                            <InputLabel id="demo-simple-select-label">{t("region")}</InputLabel>*/}
                {/*                            <Select*/}
                {/*                                labelId="demo-simple-select-label"*/}
                {/*                                id="demo-simple-select"*/}
                {/*                                className="mb-4"*/}
                {/*                                label={t("region")}*/}
                {/*                                onChange={(e) => setRegion_id(e.target.value)}*/}
                {/*                            >*/}
                {/*                                <MenuItem value={1}>Ташкент</MenuItem>*/}
                {/*                                <MenuItem value={2}>Andijan</MenuItem>*/}
                {/*                                <MenuItem value={3}>Bukhara</MenuItem>*/}
                {/*                                <MenuItem value={4}>Jizzakh</MenuItem>*/}
                {/*                                <MenuItem value={5}>Kashkadarya</MenuItem>*/}
                {/*                                <MenuItem value={6}>Navoi</MenuItem>*/}
                {/*                                <MenuItem value={7}>Namangan</MenuItem>*/}
                {/*                                <MenuItem value={8}>Samarkand</MenuItem>*/}
                {/*                                <MenuItem value={9}>Sirdarya</MenuItem>*/}
                {/*                                <MenuItem value={10}>Surkhandarya</MenuItem>*/}
                {/*                                <MenuItem value={11}>Fergana</MenuItem>*/}
                {/*                                <MenuItem value={12}>Khorezm</MenuItem>*/}
                {/*                            </Select>*/}
                {/*                        </FormControl>*/}
                {/*                    </Box>*/}
                {/*                    <Box sx={{mt: 1, minWidth: "500px"}}>*/}
                {/*                        <TextField*/}
                {/*                            label={t("institution")}*/}
                {/*                            name="institution"*/}
                {/*                            type="text"*/}
                {/*                            style={{width: "550px"}}*/}
                {/*                            className="city mb-4"*/}
                {/*                            onChange={(e) => setEducation_name(e.target.value)}*/}
                {/*                        />*/}
                {/*                    </Box>*/}
                {/*                    <Box sx={{mt: 1, minWidth: "500px"}}>*/}
                {/*                        <TextField*/}
                {/*                            label={t("speciality")}*/}
                {/*                            name="speciality"*/}
                {/*                            type="text"*/}
                {/*                            style={{width: "550px"}}*/}
                {/*                            className="city mb-4"*/}
                {/*                            onChange={(e) => setSpecialization(e.target.value)}*/}
                {/*                        />*/}
                {/*                    </Box>*/}
                {/*                </div>*/}
                {/*                <div className="rightSide" style={{width: "45%"}}>*/}
                {/*                    <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                {/*                        <Stack spacing={3}>*/}
                {/*                            <DesktopDatePicker*/}
                {/*                                className="mt-2 mb-4"*/}
                {/*                                label={t("dateReceived")}*/}
                {/*                                inputFormat="MM/DD/YYYY"*/}
                {/*                                value={enter_date}*/}
                {/*                                onChange={setEnter_date}*/}
                {/*                                renderInput={(params) => {*/}
                {/*                                    return <TextField {...params} />*/}
                {/*                                }}*/}
                {/*                            />*/}
                {/*                        </Stack>*/}
                {/*                    </LocalizationProvider>*/}
                {/*                    <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                {/*                        <Stack spacing={3}>*/}
                {/*                            <DesktopDatePicker*/}
                {/*                                className="mt-3 mb-4"*/}
                {/*                                label={t("expirationDate")}*/}
                {/*                                inputFormat="MM/DD/YYYY"*/}
                {/*                                value={end_date}*/}
                {/*                                onChange={setEnd_date}*/}
                {/*                                renderInput={(params) => {*/}
                {/*                                    return <TextField {...params} />*/}
                {/*                                }}*/}
                {/*                            />*/}
                {/*                        </Stack>*/}
                {/*                    </LocalizationProvider>*/}
                {/*                    <Button className=" added" onClick={() => {*/}
                {/*                        setCount(count + 1);*/}
                {/*                    }} variant="outlined"><ControlPointIcon/>{t("addEduc")}</Button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}</div>*/}

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