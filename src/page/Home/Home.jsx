import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./home.scss";
import Home1 from "../../assets/images/home1.svg";
import Home2 from "../../assets/images/home2.svg";
import Home3 from "../../assets/images/home3.svg";
import Home4 from "../../assets/images/home4.svg";
import Bahodir from "../../assets/images/bahodir.svg";
import Akbar from "../../assets/images/akbar.svg";
import Ulugbek from "../../assets/images/ulugbek.svg";
import Bekzod from "../../assets/images/bekzod.svg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MainProfile from "./components/MainProfile/mainProfile";
import Layout from "../../components/Layout/Layout";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";
import CarouselComponent from "../../components/Carousel";
import axios from "axios";
import { baseApi } from "../../services/api";

const Home = () => {
  const { t } = useTranslation();

  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [homeVideo, setHomeVideo] = useState("");
  const [homeImg, setHomeImg] = useState([]);

  const linkUrl = id && token ? "/allPdf" : "/";
  // useEffect(() => {
  //   getHomePage()
  // }, []);

  // async function getHomePage(){
  //   axios.get(`${baseApi}/home-pages`).then((res) => {
  //     setHomeImg(res.data.data)
  //     res.data.data.map((item) => {
  //       setHomeVideo(item.video);
  //     });
  //   });

  // }

  return (
    <>
      <Layout>
        <div className="home">
          <div className="back-navbar">
            <div className="home-navbar">
              <div className="link-item">
                <a href="/">{t("DistanceLearning")}</a>
              </div>
              <div className="link-item">
                <a href={linkUrl}>{t("portfolio")}</a>
              </div>
              <div className="link-item">
                <a href="/">{t("OnlineLibrary")}</a>
              </div>
              <div className="link-item">
                <a href="/">{t("OnlineTest")}</a>
              </div>
              <div className="link-item">
                <a href="/">{t("Re-qualification")}</a>
              </div>
            </div>
          </div>
          <CarouselComponent item={homeImg} />
          <div className="homeTitle">{t("homeTitle")}</div>

          <div className="buttons">
            <Button href="/passport" variant="outlined" className="homeButton">
              {t("loginIn")}
            </Button>
            <Button href="/loginIn" variant="outlined" className="homeButton">
              {t("welcome")}
            </Button>
          </div>
        </div>

        <div className="container">
          <div className="Categories">
            <div className="CategoriesText">
              <div className="line"></div>
              <h2 className="m-0">{t("Categories")}</h2>
            </div>
            <div className="row">
              <div className="homeCard">
                <img src={Home1} alt="" />
                <h4>{t("DistanceLearning")}</h4>
                <button className="home-btn">
                  <CheckCircleOutlineIcon />
                  <p className="m-0">Войти</p>
                </button>
              </div>
              <div className="homeCard">
                <img src={Home2} alt="" />
                <h4>{t("portfolio")}</h4>
                <button className="home-btn">
                  <CheckCircleOutlineIcon />
                  <p className="m-0">Войти</p>
                </button>
              </div>
              <div className="homeCard">
                <img src={Home3} alt="" />
                <h4>{t("OnlineLibrary")}</h4>
                <button className="home-btn">
                  <CheckCircleOutlineIcon />
                  <p className="m-0">Войти</p>
                </button>
              </div>
              <div className="homeCard">
                <img src={Home4} alt="" />
                <h4>{t("OnlineTest")}</h4>
                <button className="home-btn">
                  <CheckCircleOutlineIcon />
                  <p className="m-0">Войти</p>
                </button>
              </div>
            </div>
          </div>
          <div className="Instructional-video">
            <div className="text-video">
              <div className="line"></div>
              <h2 className="m-0">{t("InstructionalVideo")}</h2>
            </div>
            <ReactPlayer width="100%" height="500px" controls url="https://youtu.be/7deznzPAzsk" />
          </div>
        </div>
        {/* <MainProfile /> */}

        {/* <div className="container">
          <div className="champions">
            <div className="champions-text">
              <div className="line"></div>
              <h2 className="m-0">{t("OurChampions")}</h2>
            </div>
          </div>
          <div className="carousel">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src={Bahodir} alt="" />
                  <div className="name">
                    <h3>Баходир Жалолов</h3>
                    <h5>Бокс</h5>
                  </div>
                </div>
                <div className="slide">
                  <img src={Akbar} alt="" />
                  <div className="name">
                    <h3>Акбар Жураев</h3>
                    <h5>Тяжёлая атлетика</h5>
                  </div>
                </div>
                <div className="slide">
                  <img src={Ulugbek} alt="" />
                  <div className="name">
                    <h3>Улугбек Рашитов</h3>
                    <h5>Таеквандо</h5>
                  </div>
                </div>
                <div className="slide">
                  <img src={Bekzod} alt="" />
                  <div className="name">
                    <h3>Бекзод Абдурахмонов</h3>
                    <h5>Вольная борьба</h5>
                  </div>
                </div>
                <div className="slide">
                  <img src={Bahodir} alt="" />
                  <div className="name">
                    <h3>Баходир Жалолов</h3>
                    <h5>Бокс</h5>
                  </div>
                </div>
                <div className="slide">
                  <img src={Akbar} alt="" />
                  <div className="name">
                    <h3>Акбар Жураев</h3>
                    <h5>Тяжёлая атлетика</h5>
                  </div>
                </div>
                <div className="slide">
                  <img src={Ulugbek} alt="" />
                  <div className="name">
                    <h3>Улугбек Рашитов</h3>
                    <h5>Таеквандо</h5>
                  </div>
                </div>
                <div className="slide">
                  <img src={Bekzod} alt="" />
                  <div className="name">
                    <h3>Бекзод Абдурахмонов</h3>
                    <h5>Вольная борьба</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
};

export default Home;
