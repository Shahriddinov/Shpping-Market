import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import SdCardIcon from "@mui/icons-material/SdCard";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import "antd/dist/antd.css";
import "./work.scss";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Page1 from "../../components/Page1/Page1";
import Slayder from "../../components/Slayder/slayder";
import Button from '@mui/material/Button';


function Work() {
    const { t, i18n } = useTranslation();

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem("Профиль", "1", <AddCircleIcon />),
        getItem("Главная", "2", <HomeIcon />),
        getItem("Портфолио", "3", <SdCardIcon />),
        getItem("Логин", "4", <LoginIcon />),
        getItem("Настройки", "5", <SettingsIcon />),
    ];

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
        <section id="Profile" className="Profile">
            <h1 className="visually-hidden">Profile Page</h1>
            <ProfileSidebar items={items} />
            <section className="profile__page">
                <ProfileHeader handleChangeLng={handleChangeLng}/>
                <ProfileNavbar/>
                {/*<Page1/>*/}
                <div className="forms">
                    <Slayder/>
                    <div className="form">
                        <div className="left-form">
                            <div className="Region">
                                <label htmlFor="">Область *</label>
                                <select name="" id="">
                                    <option value="Toshkent">Toshkent</option>
                                    <option value="Samarqand">Samarqand</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="Area">
                                <label htmlFor="">Район *</label>
                                <select  name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="institution">
                                <label htmlFor="">Образовательное учреждение *</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="place-work">
                                <label htmlFor="">Тип место работы *</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="place-number">
                                <label htmlFor="">Номер место работы </label>
                                <input className='m-0' placeholder='Номер' type="number"/>
                            </div>
                        </div>
                        <div className="right-form">
                            <div className="Faculty">
                                <label htmlFor="">Факультет *</label>
                                <select name="" id="">
                                    <option value="toshkent">Toshkent</option>
                                    <option value="toshkent">Toshkent</option>
                                </select>
                            </div>
                            <div className="">
                                <label htmlFor="">Кафедра *</label>
                                <input placeholder='Кафедра' type="text"/>
                            </div>
                            <div className="">
                                <label htmlFor="">Должность *</label>
                                <input placeholder='Тренер' type="text"/>
                            </div>
                            <div className="">
                                <label htmlFor="">Название место работы *</label>
                                <input placeholder='Название' type="text"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="next-page">
                    <div className="back-btn">
                        <button>Назад</button>
                    </div>
                    <div className="next-btn">
                        <button>Продолжить</button>

                    </div>
                </div>
            </section>

        </section>
    );
}

export default Work;
