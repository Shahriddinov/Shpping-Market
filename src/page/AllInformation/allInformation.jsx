import React, {useState} from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import {useTranslation} from "react-i18next";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import "./allInformation.scss"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import Footer from "../../components/Layout/Footer/Footer";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top' ,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = [
    'Урок 1',
    'Урок 2',
    'Урок 3',
    'Урок 4',
    'Урок 5',
    'Урок 6',
    'Урок 7',
    'Урок 8',
    'Урок 9',
    'Урок 10',
    'Урок 11',
    'Урок 12',
    'Урок 13',
    'Урок 14',
];
const background = ['#0FBE7B', '#2B63C0']
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            backgroundColor: '#2B63C0',
        },
        // {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        //     backgroundColor: '#2B63C0',
        // },
    ],
};

const AllInformation = () => {



    const {t, i18n} = useTranslation();
    const [ isClicked, setClicked ] = useState(false);
    const [ isBall, setBall ] = useState(false);

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Профиль", "1", <AccountCircleIcon/>, [
            getItem("Направление", "sub1"),
            getItem("Статистика", "2"),
        ]),
        getItem("Главная", "3", <HomeIcon/>),
        getItem("Портфолио", "4", <SdCardIcon/>),
        getItem("Логин", "5", <LoginIcon/>),
        getItem("Настройки", "6", <SettingsIcon/>),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    return (
        <div className="allInformation">
            <div className="d-flex">
                <ProfileSidebar items={items}/>
                <div className="eduPage">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar/>
                    <div style={{padding:"0 20px"}}>
                        <div className="advancedTraining">
                            <div
                                className="background-job__title-wrapper"
                                onClick={() => setClicked(!isClicked)}
                            >
                                <h2 className="background-job__title">{t("passSubject")} </h2>
                                <span className="background-job__button"></span>
                            </div>
                            <div
                                className={
                                    isClicked
                                        ? `background-job__drop-down  drop-up`
                                        : `background-job__drop-down`
                                }
                            >
                                <div>
                                    <Bar options={options} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{padding:"0 20px"}}>
                        <div className="advancedTraining">
                            <div
                                className="background-job__title-wrapper"
                                onClick={() => setBall(!isBall)}
                            >
                                <h2 className="background-job__title">{t("table")} </h2>
                                <span className="background-job__button"></span>
                            </div>
                            <div
                                className={
                                    isBall
                                        ? `background-job__drop-down  drop-up`
                                        : `background-job__drop-down`
                                }
                            >
                                <div>
                                    <div className="form-group">
                                        <div className="subjectName">1. {t("teachingCulture")}</div>
                                        <div className="subjectBall">
                                            Высшее
                                            <Chip className="chip" label="10" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="subjectName">2. {t("rating")}</div>
                                        <div className="subjectBall">
                                            Во второй двадцатке рейтинга (21-40 места)
                                            <Chip className="chip" label="30" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="subjectName">3. {t("sportCategory")}</div>
                                        <div className="subjectBall">
                                            кандидат в мастера спорта
                                            <Chip className="chip" label="3" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="subjectName">4. {t("judging")}</div>
                                        <div className="subjectBall">
                                            кандидат в мастера спорта
                                            <Chip className="chip" label="10" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="subjectName">5. {t("preparation")}</div>
                                        <div className="subjectBall">
                                            методическое пособие, учебно-методические рекомендации, для разработок
                                            <Chip className="chip" label="50" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="subjectName">6. {t("level")}</div>
                                        <div className="subjectBall">
                                            2 место
                                            <Chip className="chip" label="5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className="profileButton" href="/allPdf" style={{backgroundColor: "#0FBE7B"}}
                            variant="text"> <span className="icon"><CheckCircleOutlineIcon
                        fontSize="small"/></span> Соответствует</Button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AllInformation;