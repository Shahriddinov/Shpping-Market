import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import "./allInformation.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import Footer from "../../components/Layout/Footer/Footer";
import axios from "axios";
import { baseApi } from "../../services/api";
import { toast } from "react-toastify";

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
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "Урок 1",
  "Урок 2",
  "Урок 3",
  "Урок 4",
  "Урок 5",
  "Урок 6",
  "Урок 7",
  "Урок 8",
  "Урок 9",
  "Урок 10",
  "Урок 11",
  "Урок 12",
  "Урок 13",
  "Урок 14",
];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: "#2B63C0",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: "#2B63C0",
    },
  ],
};

const AllInformation = () => {
  const id = localStorage.getItem("userId");
  const { t, i18n } = useTranslation();
  const [isClicked, setClicked] = useState(false);
  const [isBall, setBall] = useState(false);
  const [mainInfo, setMainInfo] = useState([]);
  const [verified, setVerified] = useState([]);

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

  const statusColor =
    verified === "failed"
      ? "rgba(254, 52, 110, 0.4)"
      : verified === "passed"
      ? "#0FBE7B"
      : "#aaa";

  useEffect(() => {
    axios
      .get(`${baseApi}/evaluate/` + id, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setMainInfo(response.data.data);
        toast.success(response.data.Message);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }, []);
  // console.log(mainInfo)
  useEffect(() => {
    axios
      .get(`${baseApi}/statisticUserById/${id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
          user_id: id,
        },
      })
      .then((response) => {
        // console.log("DATA", response.data.statisticUserById[0]?.permission);
        setVerified(response.data.statisticUserById[0]?.permission);
      })
      .catch((err) => console.log("StatisticUserID Error", err));
  }, []);
  return (
    <div className="allInformation">
      <div className="d-flex">
        <ProfileSidebar items />
        <div className="eduPage">
          <ProfileHeader handleChangeLng={handleChangeLng} />
          <ProfileNavbar />
          <div style={{ padding: "0 20px" }}>
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
          <div style={{ padding: "0 20px" }}>
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
                {console.log(mainInfo)}
                {mainInfo?.map((item, index) => (
                  <div key={index.toString()} className="form-group">
                    {console.log(item.direction_name)}
                    <div className="subjectName">
                      {item.direction_name.category_ru ??
                        item.direction_name.category_en ??
                        item.direction_name.category_uz}
                    </div>
                    <div className="subjectBall">
                      {item.direction_category_name}
                      <Chip className="chip" label={item.score} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            className="profileButton"
            href="#"
            style={{ backgroundColor: statusColor }}
            variant="text"
          >
            {" "}
            <span className="icon">
              <CheckCircleOutlineIcon fontSize="small" />
            </span>{" "}
            Соответствует
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllInformation;
