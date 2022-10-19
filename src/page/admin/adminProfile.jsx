import React, {useState} from "react";
import "./style.scss";
import {useTranslation} from "react-i18next";
import AddCircleIcon from "@mui/material/SvgIcon/SvgIcon";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../components/Layout/Footer/Footer";
import TeacherCard from "../../components/admin/teacherCard/teacherCard";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ImgUploud from "../../components/ImgUploud/imgUploud";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveIcon from '@mui/icons-material/Save';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DownloadIcon from '@mui/icons-material/Download';

const Direction = () => {
    const {t, i18n} = useTranslation();


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
    const [selectedDirect, setSelectedDirect] = useState(Directions[0]);
    const [showTeachers, setShowTeachers] = useState(false);
    const [showTeacher, setShowTeacher] = useState(false);
    const [teachers, setTeachers] = useState([
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        },
        {
            name:"Ботиров Асадбек Алимович",
            image:"teacher.png",
            id:"AD 2113212",
            score:"39",
            speciality:"Физическая культура",
            qualificationInformation:"Высшее образование и 10 лет стажа. Преподаватель высокого уровня.",
            dateLastQual:"18.06.2022",
            education:"еще не известно"
        }
    ]);
    const [teacher, setTeacher] = useState({});
    const [indexTeacher, setIndexTeacher] = useState(0);
    const [directName, setDirectName] = useState("Название направления");

    function Teachers(index) {
        setTeacher(teachers[index]);
        setShowTeacher(true);
        setIndexTeacher(index);
        document.getElementById("teacherSpec").value = teachers[index].speciality;
    }

    const onButtonClick = (typeDoc) => {
        // using Java Script method to get PDF file
        fetch(`Algoritmlar.${typeDoc}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `Algoritmlar.${typeDoc}`;
                alink.click();
            })
        })
    }


    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Главная", "1", <HomeIcon/>),
        getItem("Профиль", "2", <AccountCircleIcon/>, [
            getItem("Направление", "sub1"),
            getItem("Статистика", "2"),
        ]),
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
            <section id="direction" className="direction">
                <ProfileSidebar items={items}/>
                <div className="basePart">
                    <ProfileHeader handleChangeLng={handleChangeLng}/>
                    <ProfileNavbar title={"direction"}/>
                    <div className="Box">
                        <div className="destination">
                            <h4 className="destination-title">Список направлений</h4>
                            <div className="dest-direct" style={{display:showDirect?"block":"none"}} onClick={()=>setShowDirect(false)}>
                                <h5>{selectedDirect.DirectName}</h5>
                                <p>Педагоги: 58</p>
                            </div>
                            <div className="directions" style={{display:showDirect?"none":"flex"}}>
                                {
                                    Directions.map((item, index)=>{
                                        return  <div className="directItem" onClick={()=>{
                                            setShowDirect(true);
                                            setSelectedDirect(item);
                                            setShowTeachers(!showTeachers);
                                        }}>
                                            <h5>{item.DirectName}</h5>
                                            <p>Педагоги: 58</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        {
                            showTeachers ? <div className="listOfOrganize">
                                <div className="boxNav">
                                    <h1>ТДИУ Университет всего 58 педагогов</h1>
                                    <div className="Cancel" onClick={()=>setShowTeachers(false)}></div>
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
                                <div className="DownloadFile">
                                    <div className="downloadItem" onClick={()=>onButtonClick('doc')}>
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в Word
                                    </div>
                                    <div className="downloadItem" onClick={()=>onButtonClick('xls')}>
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в Excel
                                    </div>
                                    <div className="downloadItem" onClick={()=>onButtonClick('pdf')}>
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в PDF
                                    </div>
                                </div>
                            </div> : ""
                        }
                        {
                            showTeacher ? <div className="InfoOfTeacher">
                                <div className="boxNav">
                                    <h1>Человек {indexTeacher}</h1>
                                    <div className="Cancel" onClick={()=>setShowTeacher(false)}></div>
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
                                        <div id="DirectioName" className="DirectForm">{directName}</div>
                                        <div className="Variants">
                                            <div className="directVariant">
                                                <div className="directType" onClick={()=>setDirectName("Инвалид")}>Инвалид</div>
                                                <div className="directType" onClick={()=>setDirectName("Годен")}>Годен</div>
                                            </div>
                                            <div className="directVariant">
                                                <div className="directType" onClick={()=>setDirectName("Пенсионер")}>Пенсионер</div>
                                                <div className="directType" onClick={()=>setDirectName("Женщина с ребенком")}>Женщина с ребенком</div>
                                            </div>
                                        </div>
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
                                                marginLeft:'auto',
                                                marginTop:52
                                            }} variant="contained"> <span style={{marginRight:15}}><CheckCircleOutlineIcon fontSize="small"/></span> Перейти в профиль</Button>
                                        </Stack>
                                    </div>
                                </div>
                                <div className="DownloadFile">
                                    <div className="downloadItem" onClick={()=>onButtonClick('doc')}>
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в Word
                                    </div>
                                    <div className="downloadItem" onClick={()=>onButtonClick('xls')}>
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в Excel
                                    </div>
                                    <div className="downloadItem" onClick={()=>onButtonClick('pdf')}>
                                        <span><DownloadIcon fontSize="small"/></span>Загрузить в PDF
                                    </div>
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Direction;