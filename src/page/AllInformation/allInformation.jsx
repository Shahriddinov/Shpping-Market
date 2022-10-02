import React from 'react';
import {useTranslation} from "react-i18next";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import DownloadIcon from '@mui/icons-material/Download';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Inst from "../../assets/images/inst.svg"
import "./allInformation.scss"
import ImageUploading from 'react-images-uploading';
import ImgUploud from "../../components/ImgUploud/imgUploud";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Certification from "../../assets/images/certification.png";
import BlackCertification from "../../assets/images/blackCer.png"
const label = {inputProps: {'aria-label': 'Switch demo'}};
const AllInformation = () => {


    const {t, i18n} = useTranslation();
    const [listEducation, setListEducation] = React.useState('');
    const [directions, setDirections] = React.useState('');
    const [filter, setFilter] = React.useState('');
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };


    const handleListEducation = (event) => {
        setListEducation(event.target.value);
    };
    const handleDirections = (event) => {
        setDirections(event.target.value);
    };
    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    <Stack direction="row" spacing={1}>
        <Chip label="Clickable" onClick={handleClick}/>
        <Chip label="Clickable" variant="outlined" onClick={handleClick}/>
    </Stack>

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
        <>
            <section id="certificates" className="allInformation">
                <ProfileSidebar items={items}/>
                <div className="allInfor">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar title={"portfolio"}/>
                    <div className="allInfoText">{t("subjectPoints")}</div>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            height: "auto",
                            border: "0.5px solid rgba(0, 0, 0, 0.04)",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                            borderRadius: "12px",
                            marginTop: "30px",
                            marginBottom: "30px"
                        }}
                    >
                        <div className="selects">
                            <Box sx={{minWidth: "46%"}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">{t("listEducation")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={listEducation}
                                        label={t("listEducation")}
                                        onChange={handleListEducation}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{minWidth: "46%"}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">{t("ListOfOrganize")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={directions}
                                        label={t("ListOfOrganize")}
                                        onChange={handleDirections}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <Accordion style={{width: "100%", marginTop: "30px"}}>
                            <AccordionSummary
                                expandIcon={<RemoveIcon style={{color: "#2B63C0", fontSize: "42px"}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="iconFormat">
                                    <div className="organizations">{t("ListOfOrganize")}</div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>



                                    <div className="inst">
                                        <div className="instInfo">
                                            <div className="d-flex">
                                                <div className="img">
                                                    <img src={Inst} alt=""/>
                                                </div>
                                                <div className="instInfos">
                                                    <div className="instText">{t("network")}</div>
                                                    <div className="teacher">{t("teachers")} 58</div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="instInfo">
                                            <div className="d-flex">
                                                <div className="img">
                                                    <img src={Inst} alt=""/>
                                                </div>
                                                <div className="instInfos">
                                                    <div className="instText">{t("network")}</div>
                                                    <div className="teacher">{t("teachers")} 58</div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="instInfo">
                                            <div className="d-flex">
                                                <div className="img">
                                                    <img src={Inst} alt=""/>
                                                </div>
                                                <div className="instInfos">
                                                    <div className="instText">{t("network")}</div>
                                                    <div className="teacher">{t("teachers")} 58</div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    <div className="inst">
                                        <div className="instInfo">
                                            <div className="d-flex">
                                                <div className="img">
                                                    <img src={Inst} alt=""/>
                                                </div>
                                                <div className="instInfos">
                                                    <div className="instText">{t("network")}</div>
                                                    <div className="teacher">{t("teachers")} 58</div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="instInfo">
                                            <div className="d-flex">
                                                <div className="img">
                                                    <img src={Inst} alt=""/>
                                                </div>
                                                <div className="instInfos">
                                                    <div className="instText">{t("network")}</div>
                                                    <div className="teacher">{t("teachers")} 58</div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="instInfo">
                                            <div className="d-flex">
                                                <div className="img">
                                                    <img src={Inst} alt=""/>
                                                </div>
                                                <div className="instInfos">
                                                    <div className="instText">{t("network")}</div>
                                                    <div className="teacher">{t("teachers")} 58</div>
                                                </div>
                                            </div>
                                            
                                        </div>


                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{width: "100%", marginTop: "30px"}}>
                            <AccordionSummary
                                expandIcon={<RemoveIcon style={{color: "#2B63C0", fontSize: "42px"}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    <div className="networkCenter">{t("networkCenter")}</div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="d-flex">
                                        <div className="accordionLeft">
                                            <div className="accordionTitle">{t("teaching")}</div>
                                            <div className="d-flex align-items-center">
                                                <Switch {...label} defaultChecked/>
                                                <div className="switchText">{t("higher")}</div>
                                                <Chip label="10" className="clickable" onClick={handleClick}/>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <Switch {...label} disabled/>
                                                <div className="switchText">{t("return")}</div>
                                                <Chip label="5" className="clickables" onClick={handleClick}/>
                                            </div>

                                            <ImgUploud/>
                                            <div className="accordionTitle mt-1"
                                                 style={{paddingRight: "20px"}}>{t("rating")}</div>
                                            <div className="d-flex mt-2 mb-2">
                                                <div className="ScoreLeft">
                                                    <Switch {...label} defaultChecked/>
                                                    <div className="ScoreText">{t("ranting")}</div>
                                                </div>
                                                <div className="ScoreRight">
                                                    <Chip label="10" className="clickable" onClick={handleClick}/>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2 mb-2">
                                                <div className="ScoreLeft">
                                                    <Switch {...label} defaultChecked/>
                                                    <div className="ScoreText">{t("rantingSecond")}</div>
                                                </div>
                                                <div className="ScoreRight">
                                                    <Chip label="20" className="clickable" onClick={handleClick}/>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2 mb-2">
                                                <div className="ScoreLeft">
                                                    <Switch {...label} defaultChecked/>
                                                    <div className="ScoreText">{t("rantingThree")}</div>
                                                </div>
                                                <div className="ScoreRight">
                                                    <Chip label="40" className="clickable" onClick={handleClick}/>
                                                </div>
                                            </div>
                                            <ImgUploud/>

                                        </div>
                                        <div className="accordionLeft">
                                            <div className="accordionTitle">{t("teaching")}</div>
                                            <div className="d-flex align-items-center">
                                                <Switch {...label} defaultChecked/>
                                                <div className="switchText">{t("higher")}</div>
                                                <Chip label="10" className="clickable" onClick={handleClick}/>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <Switch {...label} disabled/>
                                                <div className="switchText">{t("return")}</div>
                                                <Chip label="5" className="clickables" onClick={handleClick}/>
                                            </div>
                                            <ImgUploud/>
                                            <div className="accordionTitle mt-1"
                                                 style={{paddingRight: "20px"}}>{t("rating")}</div>
                                            <div className="d-flex mt-2 mb-2">
                                                <div className="ScoreLeft">
                                                    <Switch {...label} defaultChecked/>
                                                    <div className="ScoreText">{t("ranting")}</div>
                                                </div>
                                                <div className="ScoreRight">
                                                    <Chip label="10" className="clickable" onClick={handleClick}/>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2 mb-2">
                                                <div className="ScoreLeft">
                                                    <Switch {...label} defaultChecked/>
                                                    <div className="ScoreText">{t("rantingSecond")}</div>
                                                </div>
                                                <div className="ScoreRight">
                                                    <Chip label="20" className="clickable" onClick={handleClick}/>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2 mb-2">
                                                <div className="ScoreLeft">
                                                    <Switch {...label} defaultChecked/>
                                                    <div className="ScoreText">{t("rantingThree")}</div>
                                                </div>
                                                <div className="ScoreRight">
                                                    <Chip label="40" className="clickable" onClick={handleClick}/>
                                                </div>
                                            </div>
                                            <ImgUploud/>

                                        </div>
                                    </div>
                                    <div className="next-page">

                                        <div className="back-btn">
                                            <Stack spacing={2} direction="row">
                                                <Button className="button" href="#" variant="contained"> <span
                                                    className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                                            </Stack>
                                        </div>
                                        <div className="next-btn">
                                            {/*<button>Продолжить</button>*/}
                                            <Stack spacing={2} direction="row">
                                                <Button className="button" href="#" style={{backgroundColor: "#0FBE7B"}}
                                                        variant="contained"> <span className="icon"><SaveAsIcon
                                                    fontSize="small"/></span> Сохранить</Button>
                                            </Stack>
                                        </div>
                                    </div>

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <div className="d-flex justify-content-between">
                            <Accordion style={{width: "47%", marginTop: "30px"}}>
                                <AccordionSummary
                                    expandIcon={<RemoveIcon style={{color: "#2B63C0", fontSize: "42px"}}/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>
                                        <div className="networkCenter">{t("items")}</div>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="sport">{t("sport")}</div>
                                        <div className="d-flex mt-4 mb-2">
                                            <div className="ScoreLeft">
                                                <div className="HighText">{t("high")}</div>
                                            </div>
                                            <div className="ScoreRight">
                                                <Chip label="10" className="clickable" onClick={handleClick}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="d-flex mt-4 mb-2">
                                            <div className="ScoreLeft">
                                                <div className="HighText">{t("return")}</div>
                                            </div>
                                            <div className="ScoreRight">
                                                <Chip label="5" className="clickable" onClick={handleClick}/>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion style={{width: "47%", marginTop: "30px"}}>
                                <AccordionSummary
                                    expandIcon={<RemoveIcon style={{color: "#2B63C0", fontSize: "42px"}}/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>
                                        <div className="networkCenter">{t("chronology")}</div>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="scrolls">
                                            <div className="sport">{t("CertificationName")}</div>
                                            <div className="colorCertification">
                                                <div className="imgis">
                                                    <img src={Certification} alt=""/>
                                                </div>
                                                <div className="imgsText">
                                                    {t("biography")} <br/>
                                                    {t("biography")}
                                                </div>
                                            </div>
                                            <div className="sport">{t("CertificationName")}</div>
                                            <div className="colorCertification">
                                                <div className="imgis">
                                                    <img src={BlackCertification} alt=""/>
                                                </div>
                                                <div className="imgsText">
                                                    {t("biography")} <br/>
                                                    {t("biography")}
                                                </div>
                                            </div>
                                        </div>

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllInformation;