import React, {useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import {useTranslation} from "react-i18next";
import "./style.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../components/Layout/Footer/Footer";
import TeacherCard from "../../components/admin/teacherCard/teacherCard";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const AdminProfile = () =>{

    let Query = [
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
                teachers:[
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                    {
                        name:"Ботиров Асадбек Алимович",
                        image:"teacher.png",
                        id:"AD 2113212",
                        score:"39",
                        speciality:"Физическая культура",
                        qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                        dateLastQual:"18.06.2022",
                        education:"еще не известно"
                    },
                ]
        },
        {
            eduName:"ТАТУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДПУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДТУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        },
        {
            eduName:"ТДИУ ҳузуридаги тармоқ маркази",
            teachers:[
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
                {
                    name:"Ботиров Асадбек Алимович",
                    image:"teacher.png",
                    id:"AD 2113212",
                    score:"39",
                    speciality:"Физическая культура",
                    qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
                    dateLastQual:"18.06.2022",
                    education:"еще не известно"
                },
            ]
        }
    ];

    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState({});
    const [showTeachers, setShowTeachers] = useState(false);
    const [showTeacher, setShowTeacher] = useState(false);
    const [indexTeacher, setIndexTeacher] = useState(0);

    function Univer(index) {
        setTeachers(Query[index].teachers);
        setShowTeachers(true);
    }

    function Teachers(index) {
        setTeacher(teachers[index]);
        setShowTeacher(true);
        setIndexTeacher(index);
        document.getElementById("teacherSpec").value = teachers[index].speciality;
    }

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

    return (
        <>
            <section id="admin" className="admin">
                <ProfileSidebar items={items}/>
                <div className="basePart">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar title={"profile"}/>
                    <div className="selection">
                        <h5 className="stat">{t("AuthorStat")}</h5>
                        <div className="filters">
                            <select className="form-control formInfo" id="list" placeholder="Список образовательных учреждений и организаций">
                                <option value="0" disabled>Список образовательных учреждений и организаций</option>
                                <option value="1">1. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                                <option value="1">2. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                                <option value="1">3. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                                <option value="1">4. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                                <option value="1">5. Типы руководителей и заместителей спортивыхных уч. завед. </option>
                            </select>
                            <select className="form-control formInfo" id="filter">
                                <option value="0" disabled={false}>ФИЛЬТР</option>
                                <option value="1">Ташкент</option>
                                <option value="2">Фергана</option>
                                <option value="3">Карши</option>
                                <option value="4">Навои</option>
                                <option value="5">Самарканд</option>
                                <option value="6">Жиззах</option>
                                <option value="7">Наманган</option>
                            </select>
                        </div>
                        <div className="listOfOrganize">
                            <div className="boxNav">
                                <h1>{t("ListOfOrganize")}</h1>
                            </div>
                            <div className="pdf-part">
                                <div className="pdf">
                                    <div className="pdf-item">
                                        {
                                            Query.map((item, index) => {
                                                return <div className="pdf-own" onClick={()=>Univer(index)}>
                                                        <div className="EduPicture">
                                                            <img src="logo.png" alt="logo"/>
                                                        </div>
                                                        <div className="EduInfo">
                                                            <h5>{item.eduName}</h5>
                                                            <h6>Педагоги:    {item.teachers.length}</h6>
                                                        </div>
                                                    </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            showTeachers ? <div className="listOfOrganize">
                                <div className="boxNav">
                                    <h1>ТДИУ Университет всего 58 педагогов</h1>
                                    <button className="btn btn-primary" onClick={()=>setShowTeachers(false)}></button>
                                </div>
                                <div className="pdf-part">
                                    <div className="pdf">
                                        <div className="pdf-item">
                                            {
                                                teachers.map((item, index) =>{
                                                    return <div style={{margin:0}} onClick={()=>Teachers(index)}>
                                                        <TeacherCard props={item}/>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div> : ""
                        }
                        {
                            showTeacher ? <div className="InfoOfTeacher">
                                <div className="boxNav">
                                    <h1>Человек {indexTeacher}</h1>
                                    <button className="btn btn-primary" onClick={()=>setShowTeacher(false)}></button>
                                </div>
                                <div className="displayFlex">
                                    <div className="leftSide">
                                        <div className="firstInfo">
                                            <div className="TeacherImage">
                                                <img src={teacher.image} alt="teacher"/>
                                            </div>
                                            <div className="FullName">
                                                <h4>{t("FullName")}</h4>
                                                <div className="BoxForInfo">
                                                    {teacher.name}
                                                </div>
                                            </div>
                                        </div>
                                        <FormGroup>
                                            <FormControlLabel style={{color:"#2B63C0"}} control={<Switch defaultChecked />} label="Мужчина" />
                                        </FormGroup>
                                        <h4 className="InfoTitle">{t("QualInfo")}</h4>
                                        <div className="QualInfo">
                                            {teacher.qualificationInformation}
                                        </div>
                                        <h4 className="InfoTitle">{t("DateLastQual")}</h4>
                                        <div className="DataQual">
                                            {teacher.dateLastQual}
                                        </div>
                                        <h4 className="InfoTitle">{t("Education")}</h4>
                                        <div className="DataQual">
                                            {teacher.education}
                                        </div>
                                    </div>
                                    <div className="rightSide">
                                        <label className="labelSpec">{t("speciality")}</label>
                                        <input type="text" id="teacherSpec" className="form-control editSpec" placeholder="Специальность"/>
                                        <label className="labelSpec">{t("DirectioName")}</label>
                                        <select id="DirectioName" className="form-control DirectForm">
                                            <option value="0">Название направления</option>
                                            <option value="1">Инвалид</option>
                                            <option value="2">Годен</option>
                                            <option value="3">Пенсионер</option>
                                            <option value="3">Женщина с ребенком</option>
                                        </select>
                                        <label className="labelSpec">{t("Subjects")}</label>
                                        <select id="Subjects" className="form-control DirectForm">
                                            <option value="0">Предметы, которые преподает учитель</option>
                                            <option value="1">Физика</option>
                                            <option value="2">Математика</option>
                                            <option value="3">Родной язык</option>
                                            <option value="3">Физическая культура</option>
                                        </select>
                                        <Stack spacing={2} direction="row">
                                            <Button style={{
                                                backgroundColor:"#0FBE7B",
                                                fontSize:16,
                                                width:270,
                                                height:48,
                                                marginLeft:'auto'
                                            }} variant="contained"> <span style={{marginRight:15}}><CheckCircleOutlineIcon fontSize="small"/></span> Перейти в профиль</Button>
                                        </Stack>
                                    </div>
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>

    )
};

export default AdminProfile;