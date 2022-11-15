import React, {useState} from "react";
import "./direction.scss";
import {useTranslation} from "react-i18next";
import AddCircleIcon from "@mui/material/SvgIcon/SvgIcon";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../components/Layout/Footer/Footer";
import ImgUploud from "../../components/ImgUploud/imgUploud";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveIcon from '@mui/icons-material/Save';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slayder6 from "../../components/Slayder6/slayder6";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
    const [showVariants, setShowVariants] = useState([true, false, false, false, false, false]);
    const [activeItem, setActiveItem] = useState(0);

    function Variants(q){
        let newArr = [];
        if(q === -1){
            let c = 0;
            for(let i = 0; i < 6; i ++)
                c += showVariants[i] ? 1: 0;

            showVariants[c] = true;
            setActiveItem(c);
        }
        else{
            showVariants[q] = false;
            setActiveItem(4);
        }

        newArr = newArr.concat(showVariants);
        setShowVariants(newArr);
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
        getItem(t("profile"), "2", <AccountCircleIcon/>, [
            getItem(t("directions"), "sub1"),
            getItem(t("statistics"), "2"),
        ]),
        getItem(t("gallery"), "1", <HomeIcon/>),
        getItem(t("portfolio"), "3", <SdCardIcon/>),
        getItem(t("login"), "4", <LoginIcon/>),
        getItem(t("setting"), "5", <SettingsIcon/>),
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
                                            setSelectedDirect(item)
                                        }}>
                                            <h5>{item.DirectName}</h5>
                                            <p>Педагоги: 58</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="destination" style={{display:showDirect?"block":"none"}}>
                            <Slayder6 val={activeItem}/>
                            <div className="toTeach">
                                <h3 className="itemTitle">1.Обучение физической культуре и спорту:</h3>
                                <div className="formBox">
                                    <form action="" className="forma">
                                        <div className="variants">
                                            <input type="radio" id="Higher" name="toTeach" value="Higher"/>
                                            <label htmlFor="Higher">
                                                Высшее
                                                <div className="price">
                                                    10
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="Retraining" name="toTeach" value="Retraining"/>
                                            <label htmlFor="Retraining">
                                                Переподготовка
                                                <div className="price">
                                                    5
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                    <div>
                                        <ImgUploud/>
                                    </div>
                                </div>
                            </div>
                            <div className="toTeach" style={{display:showVariants[1] ? "block" : "none"}}>
                                <h3 className="itemTitle">2.Рейтинг эффективности спортивно-образовательного учреждения
                                    за период руководства:</h3>
                                <div className="formBox">
                                    <form action="" className="forma">
                                        <div className="variants">
                                            <input type="radio" id="firstDecade" name="decade" value="first"/>
                                            <label htmlFor="firstDecade">
                                                В первой двадцатке рейтинга (1-20 места)
                                                <div className="price">
                                                    50
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="secondDecade" name="decade" value="second"/>
                                            <label htmlFor="secondDecade">
                                                Во второй двадцатке рейтинга (21-40 места)
                                                <div className="price">
                                                    30
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="thirdDecade" name="decade" value="third"/>
                                            <label htmlFor="thirdDecade">
                                                В третьей двадцатке рейтинга (41-60 места)
                                                <div className="price">
                                                    20
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                    <div>
                                        <ImgUploud/>
                                    </div>
                                </div>
                            </div>
                            <div className="toTeach" style={{display:showVariants[2] ? "block" : "none"}}>
                                <h3 className="itemTitle">3. Для спортивной категории:</h3>
                                <div className="formBox">
                                    <form action="" className="forma">
                                        <div className="variants">
                                            <input type="radio" id="firstCategory" name="category" value="first"/>
                                            <label htmlFor="firstCategory">
                                                мастер спорта международного класса
                                                <div className="price">
                                                    10
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="secondCategory" name="category" value="second"/>
                                            <label htmlFor="secondCategory">
                                                мастер спорта
                                                <div className="price">
                                                    5
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="thirdCategory" name="category" value="third"/>
                                            <label htmlFor="thirdCategory">
                                                sport ustaligiga nomzod
                                                <div className="price">
                                                    3
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                    <div>
                                        <ImgUploud/>
                                    </div>
                                </div>
                            </div>
                            <div className="toTeach" style={{display:showVariants[3] ? "block" : "none"}}>
                                <h3 className="itemTitle">4. Для категории судейства по видам спорта:</h3>
                                <div className="formBox">
                                    <form action="" className="forma">
                                        <div className="variants">
                                            <input type="radio" id="firstInter" name="InterCategory"
                                                   value="firstInter"/>
                                            <label htmlFor="firstInter">
                                                международная категория;
                                                <div className="price">
                                                    50
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="secondInter" name="InterCategory"
                                                   value="secondInter"/>
                                            <label htmlFor="secondInter">
                                                национальная категория.
                                                <div className="price">
                                                    30
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                    <div>
                                        <ImgUploud/>
                                    </div>
                                </div>
                            </div>
                            <div className="toTeach" style={{display:showVariants[4] ? "block" : "none"}}>
                                <h3 className="itemTitle">5. Подготовка учебно-методической литературы:</h3>
                                <div className="formBox">
                                    <form action="" className="forma">
                                        <div className="variants">
                                            <input type="radio" id="firstLiterature" name="literature"
                                                   value="firstLiterature"/>
                                            <label htmlFor="firstLiterature">
                                                типовой учебный план каждого отдельного автора, реализуемый в
                                                республике;
                                                <div className="price">
                                                    50
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="secondLiterature" name="literature"
                                                   value="secondLiterature"/>
                                            <label htmlFor="secondLiterature">
                                                методическое пособие, учебно-методические рекомендации, для разработок
                                                <div className="price">
                                                    30
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                    <div>
                                        <ImgUploud/>
                                    </div>
                                </div>
                            </div>
                            <div className="toTeach" style={{display:showVariants[5] ? "block" : "none"}}>
                                <h3 className="itemTitle">6. Уровень физической подготовленности по результатам
                                    спортивных проб:</h3>
                                <div className="formBox">
                                    <form action="" className="forma">
                                        <div className="variants">
                                            <input type="radio" id="firstlevel" name="level" value="firstlevel"/>
                                            <label htmlFor="firstlevel">
                                                1-е место
                                                <div className="price">
                                                    50
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="secondlevel" name="level" value="secondlevel"/>
                                            <label htmlFor="secondlevel">
                                                2-е место
                                                <div className="price">
                                                    30
                                                </div>
                                            </label>
                                        </div>
                                        <div className="variants">
                                            <input type="radio" id="thirdlevel" name="level" value="thirdlevel"/>
                                            <label htmlFor="thirdlevel">
                                                3-е место
                                                <div className="price">
                                                    20
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                    <div>
                                        <ImgUploud/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Stack spacing={2} direction="row">
                            <Button className="button" onClick={()=>Variants(-1)} style={{backgroundColor: "#0FBE7B", width:239, marginLeft:"auto", display:showVariants[5]?"none":"flex"}} variant="contained">Следующий вопрос <span className="icon" style={{marginLeft:'auto'}}><ChevronRightIcon fontSize="medium"/></span></Button>
                        </Stack>
                        <div className="NextPrev" style={{display: showVariants[5] ? "flex" : "none"}}>
                            <Stack spacing={2} direction="row">
                                <Button className="button" variant="contained" onClick={()=>Variants(5)}> <span
                                    className="icones"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
                            </Stack>
                            <Stack spacing={2} direction="row">
                                <Button className="button" href="/allInfo" style={{backgroundColor: "#0FBE7B", margin:0}}
                                        variant="contained"> <span className="icones"><SaveIcon
                                    fontSize="small"/></span> Сохранить</Button>
                            </Stack>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Direction;