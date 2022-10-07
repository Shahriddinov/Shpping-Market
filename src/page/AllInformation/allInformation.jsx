import React from 'react';
import {useTranslation} from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./allInformation.scss"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SpeedIcon from "@mui/icons-material/Speed";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
const label = {inputProps: {'aria-label': 'Switch demo'}};
const AllInformation = () => {


    const {t, i18n} = useTranslation();
    const [allDirections, setAllDirections] = React.useState('');
    const [directions, setDirections] = React.useState('');
    const [filter, setFilter] = React.useState('');
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };


    const handleAllDirections = (event) => {
        setAllDirections(event.target.value);
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
        getItem("Профиль", "sub1", <AccountCircleIcon/>, [
            getItem("Статистика", "1"),
        ]),
        getItem("Главная", "2", <HomeIcon/>),
        getItem("Портфолио", "3", <SdCardIcon/>),
        getItem("Логин", "4", <LoginIcon/>),
        getItem("Настройки", "5", <SettingsIcon/>),
    ];
    const userInformations = {
        userName: "Botirov Asadbek",
        fullName: "fullName",
        passportId: "passportId",
        education: "education",
        email: "email",
        nationality: "nationality",
        dateBirth: "dateBirth",
        pinfl: "PINFL",
        learningBuild: "learningBuild",
        department: "department",
        district: "district"
    };


    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };


    return (
        <div>
            <section id="certificates" className="allInformation">
                <ProfileSidebar items={items} userName={t(userInformations.userName)}/>
                <section className="profile-overview__page">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <nav className="profile__navbar">
                        <div className="profile__container">
                            <div className="profile__navbar-lef">
                                <Link to="#">
                                    <ArrowBackIosIcon className="arrow-back" />
                                </Link>
                                <h2 className="profile__navbar-left--title">{t("statistics")}</h2>
                            </div>
                            <div className="profile__navbar-right">
                                <SpeedIcon className="icon" />
                                <ul className="profile__navbar-list">
                                    <li className="profile__navbar-list--item">
                                        <Link style={{color: "#2B63C0"}} to="/">{t("gallery")} /</Link>
                                    </li>
                                    <li className="profile__navbar-list--item">
                                        <Link to="#">{t("profile")} /</Link>
                                    </li>
                                    <li className="profile__navbar-list--item">
                                        <Link to="#">{t("statistics")}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                   <div className="p-4">
                       <Accordion>
                           <AccordionSummary
                               expandIcon={<div className="mines"></div>}
                               aria-controls="panel1a-content"
                               id="panel1a-header"
                           >
                               <Typography><div className="passSub">{t("passSubject")}</div></Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                               <Typography>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                   malesuada lacus ex, sit amet blandit leo lobortis eget.
                               </Typography>
                           </AccordionDetails>
                       </Accordion>
                   </div>
                </section>

            </section>

        </div>
    );
};

export default AllInformation;