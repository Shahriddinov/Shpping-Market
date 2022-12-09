import React, {useEffect, useState} from "react";
import "./style.scss";
import {useTranslation} from "react-i18next";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../components/Layout/Footer/Footer";
import DownloadIcon from '@mui/icons-material/Download';
import "../../components/admin/teacherCard/teacherCardStyle.scss"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Imgs from "../../assets/images/avatar.png"

import {baseApi} from "../../services/api";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ProfileSidebarAdmin from "../../components/admin/profileSidebarAdmin/profileSidebarAdmin";

const Direction = () => {
    const {t, i18n} = useTranslation();

    const Filters = () => [
        {label: 'Список стажеров, запланированных на обучение', val: 0},
        {label: 'Список назначенных на повторные курсы', val: 1},
        {label: 'Список не обучавшихся на повторных курсах', val: 2},
        {label: 'Список людей, участвующих в повторных курсах', val: 3},
        {label: 'Список не прошедших повторные курсы', val: 4}
    ]

    const Directions = [
        {
            DirectName: "I. Руководители и заместители спортивных учебных заведений"
        },
        {
            DirectName: "II. Инструкторы-методисты спортивных учебных заведений"
        },
        {
            DirectName: "III. Тренеры республиканских школ высшего спортивного мастерства, колледжей олимпийского резерва, специализированных детско-юношеских спортивных школ, специализированных школ олимпийского резерва"
        },
        {
            DirectName: "IV. Тренеры спортивных школ для детей и подростков"
        },
        {
            DirectName: "V. Спортивные психологи"
        },
        {
            DirectName: "VI. Руководители и педагоги высших учебных заведений по физической культуре и спорту"
        },
        {
            DirectName: "VII. Преподаватели физической культуры профессиональных образовательных учреждений (кроме специальностей физической культуры и спорта)"
        },
        {
            DirectName: "VIII. Учителя физической культуры общеобразовательных и средних специальных образовательных организаций"
        },
        {
            DirectName: "IX. Инструкторы по физической культуре дошкольных образовательных организаций"
        }
    ];

    const [showDirect, setShowDirect] = useState(false);
    const [showTeachers, setShowTeachers] = useState(false);
    const [teacher, setTeacher] = useState([]);
    const [filterType, setFilterType] = useState(0);
    const [directions, setDirections] = useState([]);
    const [getDirectionId, setGetDirectionId] = useState([])
    const [usersId, setUsersId] = useState([])
    const handleSubmit = (e) => e.preventDefault()

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
    useEffect(() => {
        DirectionNames()
        // directionsUser()
        // directionUserid()
    }, [])


    function DirectionNames() {
        axios.get(`${baseApi}/direction`, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response) => {
            setDirections(response.data.direction)
            console.log(response.data)
            setGetDirectionId(response.data.datas)

        }).catch((error) => {

        })
    }

    function directionsUser(id) {
        axios.get(`${baseApi}/direction_with_user/${id}`, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response) => {

            setTeacher(response.data.user)
        }).catch((error) => {

        })
    }

    function directionUserid(user_id) {
        console.log(user_id)
        axios.get(`${baseApi}/user_in_direction/${user_id}`, {
            headers: {
                "Accept-Language": localStorage.getItem("lng",) || "uz"
            }
        }).then((response) =>
            setUsersId(response.data.user[0] ))
            // const dataFilter = response?.data?.training_date_end.filter(item =>{
            //     console.log()
            // })
            .catch((error) => {

        })
    }


    return (
        <>
            <section id="direction" className="direction">
                <ProfileSidebarAdmin items/>
                <div className="basePart">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar title={showDirect ? "profile" : "direction"}/>
                    <div className="Box">
                        <div className="destination">
                            <div className="directions" style={{display: "flex"}}>
                                {
                                    directions.map((item, index) => {
                                        return <div className="directItem" onClick={() => {
                                            directionsUser(item.id)
                                        }}>
                                            <h5>{item?.title_ru ?? item?.title_en ?? item?.title_uz}</h5>
                                            <p>Педагоги: {getDirectionId[index]}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                        <div>
                            <div className="d-flex justify-content-between">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={Filters()}
                                    onChange={(event, value) => setFilterType(value.val)}
                                    sx={{width: 560}}
                                    renderInput={(params) => <TextField {...params} label="Filter"/>}
                                />
                                <TextField id="outlined-basic" style={{width:"560px"}} label="Filter Data" variant="outlined" />
                            </div>
                            <div className="listOfOrganize">
                                <div className="boxNav">
                                    <h1>ТДИУ Университет всего педагогов</h1>
                                    <div className="Cancel" onClick={() => setShowTeachers(false)}></div>
                                </div>
                                {
                                    directionsUser ?
                                        <div>
                                            <div className="pdf-part">
                                                <div className="pdf">
                                                    <div className="pdf-item">
                                                        {
                                                            teacher?.map((item, index) =>
                                                                <div key={index.toString()} style={{margin: 0}}>
                                                                    <div className="teachCard"
                                                                         onClick={() => directionUserid(item.user_id)}>
                                                                        <div className="teacherImage">
                                                                            <img
                                                                                src={`https://sport.napaautomotive.uz/storage/${item?.avatar}`}
                                                                                alt="No img"/>
                                                                        </div>
                                                                        <div className="teacherInfo">
                                                                            <h4>{item.user_name}</h4>
                                                                            <div className="d-flex">
                                                                                <div>
                                                                                    <h5>Номер
                                                                                        ID: {item.pasport_seria}</h5>
                                                                                    <h5>Балл: {item.pasport_seria_code}</h5>
                                                                                </div>
                                                                                <div>
                                                                                    <h5>{item.id}</h5>
                                                                                    <div className="score">
                                                                                        {item.all_score}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="DownloadFile">
                                                <div className="downloadItem"
                                                    // onClick={() => onButtonClick('doc')}
                                                >
                                                    <span><DownloadIcon fontSize="small"/></span>Загрузить в Word
                                                </div>
                                                <div className="downloadItem"
                                                    // onClick={() => onButtonClick('xls')}
                                                >
                                                    <span><DownloadIcon fontSize="small"/></span>Загрузить в Excel
                                                </div>
                                                <div className="downloadItem"
                                                    // onClick={() => onButtonClick('pdf')}
                                                >
                                                    <span><DownloadIcon fontSize="small"/></span>Загрузить в PDF
                                                </div>
                                            </div>
                                        </div> : ""
                                }

                            </div>
                        </div>

                    </div>
                    <div className="Box">
                        <div className="teachCards mt-5">
                            <div className="leftUser">
                                <div className="d-flex gap-4">


                                    <img className="userImg"
                                        src={`https://sport.napaautomotive.uz/storage/${usersId.avatar}`}
                                        alt="No img"/>
                                    <div>
                                        <div>ФИО</div>
                                        <div className="userName">{usersId?.user_name}</div>
                                    </div>
                                </div>
                                <div className="gender">{usersId?.gender}</div>
                                <div className="info">
                                    Информация о квалификации
                                </div>
                                <div className="textarea" placeholder="Информация о квалификации">{usersId?.training_direction}</div>
                                <div className="info">
                                    Дата последней квалификации
                                </div>
                                <div className="textsa">{usersId?.training_date_end}</div>

                                <div className="info">
                                    Образование
                                </div>
                                <div className="textsa">{usersId?.education_specialization?.specialization_uz ?? usersId?.education_specialization?.specialization_ru ?? usersId?.education_specialization?.specialization_en}</div>
                            </div>

                            <div className="RightUser">
                                <div className="RightInfo">
                                    <div className="RightInfo">Специальность</div>


                                </div>
                                <div className="RightTextsa"> {usersId?.education_specialization?.specialization_uz ?? usersId?.education_specialization?.specialization_ru ?? usersId?.education_specialization?.specialization_en}</div>
                                <div className="RightInfos">
                                    Название направления
                                </div>
                                <div className="RightTextsa"> {usersId?.education_specialization?.specialization_uz ?? usersId?.education_specialization?.specialization_ru ?? usersId?.education_specialization?.specialization_en}</div>
                                <div className="d-flex mt-3 gap-2">
                                    <div className="scores">Женщина с ребенком</div>
                                    <div className="scores">Годен</div>
                                </div>
                                <div className="d-flex mt-3 gap-2">
                                    <div className="scores">Пенсионер</div>
                                    <div className="scores">Пенсионер</div>
                                </div>
                                <Stack spacing={2} direction="row">
                                    <Button style={{
                                        backgroundColor: "#0FBE7B",
                                        fontSize: 16,
                                        width: 270,
                                        height: 48,
                                        marginTop:"24%"
                                    }} variant="contained"> <span
                                        style={{marginRight: 15}}><CheckCircleOutlineIcon
                                        fontSize="small"/></span> Перейти в профиль</Button>
                                </Stack>
                                <div className="DownloadFile">
                                    <div className="downloadItem"
                                        // onClick={() => onButtonClick('doc')}
                                    >
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в Word
                                    </div>
                                    <div className="downloadItem"
                                        // onClick={() => onButtonClick('xls')}
                                    >
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в Excel
                                    </div>
                                    <div className="downloadItem"
                                        // onClick={() => onButtonClick('pdf')}
                                    >
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в PDF
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Direction;