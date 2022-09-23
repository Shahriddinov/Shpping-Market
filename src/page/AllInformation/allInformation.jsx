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
import DownloadIcon from '@mui/icons-material/Download';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Inst from "../../assets/images/inst.svg"
import "./allInformation.scss"


const label = {inputProps: {'aria-label': 'Switch demo'}};
const AllInformation = () => {


    const {t, i18n} = useTranslation();
    const [listEducation, setListEducation] = React.useState('');
    const [directions, setDirections] = React.useState('');
    const [filter, setFilter] = React.useState('');

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
                                    <InputLabel id="demo-simple-select-label">{t("directions")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={directions}
                                        label={t("directions")}
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
                                expandIcon={<ArrowDropDownIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="iconFormat">
                                    <div className="organizations">{t("organizations")}</div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                    <div style={{width: "46%"}}>
                                        <Box sx={{minWidth: "46%"}}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={filter}
                                                    label="Filter"
                                                    onChange={handleFilter}
                                                >
                                                    <MenuItem value={10}>Фергана</MenuItem>
                                                    <MenuItem value={20}>Джиззах</MenuItem>
                                                    <MenuItem value={30}>Самарканд</MenuItem>
                                                    <MenuItem value={40}>Навои</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
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
                                            <Accordion style={{width: "100%",}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{marginRight: "40%"}}
                                                >
                                                    {/*<Typography>Accordion 1</Typography>*/}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="view">
                                                        <Button variant="contained" className="go">
                                                            <CheckCircleOutlineIcon style={{marginRight: "10px"}}/>
                                                            {t("go")}
                                                        </Button>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
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
                                            <Accordion style={{width: "100%",}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{marginRight: "40%"}}
                                                >
                                                    {/*<Typography>Accordion 1</Typography>*/}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="view">
                                                        <Button variant="contained" className="go">
                                                            <CheckCircleOutlineIcon style={{marginRight: "10px"}}/>
                                                            {t("go")}
                                                        </Button>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
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
                                            <Accordion style={{width: "100%",}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{marginRight: "40%"}}
                                                >
                                                    {/*<Typography>Accordion 1</Typography>*/}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="view">
                                                        <Button variant="contained" className="go">
                                                            <CheckCircleOutlineIcon style={{marginRight: "10px"}}/>
                                                            {t("go")}
                                                        </Button>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
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
                                            <Accordion style={{width: "100%",}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{marginRight: "40%"}}
                                                >
                                                    {/*<Typography>Accordion 1</Typography>*/}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="view">
                                                        <Button variant="contained" className="go">
                                                            <CheckCircleOutlineIcon style={{marginRight: "10px"}}/>
                                                            {t("go")}
                                                        </Button>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
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
                                            <Accordion style={{width: "100%",}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{marginRight: "40%"}}
                                                >
                                                    {/*<Typography>Accordion 1</Typography>*/}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="view">
                                                        <Button variant="contained" className="go">
                                                            <CheckCircleOutlineIcon style={{marginRight: "10px"}}/>
                                                            {t("go")}
                                                        </Button>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
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
                                            <Accordion style={{width: "100%",}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    style={{marginRight: "40%"}}
                                                >
                                                    {/*<Typography>Accordion 1</Typography>*/}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="view">
                                                        <Button variant="contained" className="go">
                                                            <CheckCircleOutlineIcon style={{marginRight: "10px"}}/>
                                                            {t("go")}
                                                        </Button>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>


                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{width: "100%", marginTop: "30px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon/>}
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
                                            <button type="download" className="file">
                                                <label htmlFor="imgs">
                                                    <DownloadIcon/>
                                                    Загрузить Файл</label>
                                                <input id="imgs" placeholder="Загрузить Файл" type="file" />
                                            </button>
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
                                            <button type="download" className="file">
                                                <label htmlFor="imgs">
                                                    <DownloadIcon/>
                                                    Загрузить Файл</label>
                                                <input id="imgs"  type="file" />
                                            </button>
                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllInformation;