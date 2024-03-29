import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./oneEducation.scss";
import axios from "axios";
import { baseApi } from "../../../../services/api";
import { toast } from "react-toastify";

function OneEducation({ obj }) {
  const [isClicked, setClicked] = useState(false);
  const { t } = useTranslation();
  const [nation, setNation] = useState("");
  const id = localStorage.getItem("userId");

  const [regionOne, setRegionOne] = useState(0);
  const [regionName, setRegionName] = useState("");
  const [education, setEducation] = useState([]);
  const [specializations, setSpecialization] = useState("");
  const [startData, setStartData] = useState("");
  const [endData, setEndData] = useState("");
  const useToken = localStorage.getItem('token');

  const handleNation = (event) => {
    setNation(event.target.value);
  };
  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    getRegion();
  }, [regionOne]);

  function getRegion() {
    axios
      .get(`${baseApi}/region`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
          Authorization : `Bearer ${useToken}`
        },
      })
      .then((response) => {
        // console.log(response?.data?.regions)

        return response?.data?.regions?.map((item) => {
          if (item.id === regionOne) {
            return setRegionName(item.name_ru ?? item.name_en ?? item.name_uz);
          }
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }

  async function getAllData() {
    axios
      .get(`${baseApi}/allData/` + id, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
          Authorization : `Bearer ${useToken}`
        },
      })
      .then((response) => {
        // console.log(response.data.pending)
        setRegionOne(response.data.user_education[0].region_id);
        setEducation(response.data.user_education[0]);
        setSpecialization(response.data.user_education[0]);
        setStartData(response.data.user_education[0].enter_date);
        setEndData(response.data.user_education[0].end_date);
      });
  }



  return (
    <div className="background-job">
      <div
        className="background-job__title-wrapper"
        onClick={() => setClicked(!isClicked)}
      >
        <h2 className="background-job__title">{t("oneEducationInfo1")} </h2>
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
              <div className="jobInfos">{t("institution")}</div>
              <div className="jobText">{education.education_name}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("speciality")}</div>
              <div className="jobText">{specializations.specialization}</div>
            </div>
          </div>
          <div className="jobSectionRight">
            <div className="form-group">
              <div className="jobInfos">{t("dateReceived")}</div>
              <div className="jobText">
                {startData && new Date(startData).toLocaleDateString()}
              </div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("expirationDate")}</div>
              <div className="jobText">
                {endData && new Date(endData).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneEducation;
