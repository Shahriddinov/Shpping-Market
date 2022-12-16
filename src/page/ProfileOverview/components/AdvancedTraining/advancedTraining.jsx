import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./advancedTraining.scss";
import axios from "axios";
import { baseApi } from "../../../../services/api";
import { toast } from "react-toastify";

const AdvancedTraining = () => {
  const id = localStorage.getItem("userId");
  const [isClicked, setClicked] = useState(false);
  const { t } = useTranslation();

  const [nation, setNation] = useState("");
  const [regionsTwo, setRegionsTwo] = useState([]);
  const [GetAdopted, setGetAdopted] = useState("");
  const [adopteds, setAdopteds] = useState("");
  const [direction, setDirection] = useState("");
  const [trainingStart, setSetTrainingStart] = useState("");
  const [trainingEnd, setSetTrainingEnd] = useState("");
  const [regionName, setRegionName] = useState("");
  const handleNation = (event) => {
    setNation(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${baseApi}/allData/` + id, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        setRegionsTwo(response.data.user_training[0].region_id);
        setGetAdopted(response.data.user_training[0].fillial_id);
        setDirection(response.data.user_training[0].direction);
        setSetTrainingStart(response.data.user_training[0].date_start);
        setSetTrainingEnd(response.data.user_training[0].date_end);
      });
  }, []);
  useEffect(() => {
    getAdopt();
  }, [regionsTwo, GetAdopted]);

  function getAdopt() {
    axios
      .get(`${baseApi}/region`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        return response?.data?.regions?.map((item) => {
          if (item.id === regionsTwo) {
            return setRegionName(item.name_ru ?? item.name_en ?? item.name_uz);
          }
          if (item.id === GetAdopted) {
            return setAdopteds(item.name_ru ?? item.name_en ?? item.name_uz);
          }
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }

  return (
    <div className="advancedTraining">
      <div
        className="background-job__title-wrapper"
        onClick={() => setClicked(!isClicked)}
      >
        <h2 className="background-job__title">{t("advancedTraining")} </h2>
        <span className="background-job__button"></span>
      </div>
      <div
        className={
          isClicked
            ? `background-job__drop-down  drop-up`
            : `background-job__drop-down`
        }
      >
        <div className="background-job__sections">
          <div className="jobSectionLeft">
            <div className="form-group">
              <div className="jobInfos">{t("region")}</div>
              <div className="jobText">{regionName}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("attended")}</div>
              <div className="jobText">{adopteds}</div>
            </div>
          </div>
          <div className="jobSectionRight">
            <div className="form-group">
              <div className="jobInfos">{t("direction")}</div>
              <div className="jobText">{direction}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("qualificationStart")}</div>
              <div className="jobText">
                {trainingStart && new Date(trainingStart).toLocaleDateString()}{" "}
                --{t("to")}--{" "}
                {trainingEnd && new Date(trainingEnd).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTraining;
