import React, { useEffect, useState } from "react";
import "./jobAbout.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import { baseApi } from "../../../../../../services/api";

const JobAbout = () => {
  const id = localStorage.getItem("checkId");
  const [isClicked, setClicked] = useState(false);
  const { t } = useTranslation();
  const [districts, setDistricts] = useState("");
  const [workplace, setWorkPlace] = useState("");
  const [workNumber, setWorkNumber] = useState("");
  const [workStart, setWorkStart] = useState("");
  const [faculty, setFaculty] = useState("");
  const [regionName, setRegionName] = useState("");
  const [regionOne, setRegionOne] = useState([]);
  const [cafedra, setCafedra] = useState("");
  const [level, setLevel] = useState("");
  const [workName, setWorkName] = useState("");
  const [workEnd, setWorkEnd] = useState("");
  const [nation, setNation] = useState("");

  const handleNation = (event) => {
    setNation(event.target.value);
  };
  useEffect(() => {
    axios
      .get(`${baseApi}/user_in_direction/` + id, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        // console.log(response.data.user[0].work[0]);
        setDistricts(response.data.user[0].work[0].district);
        setRegionOne(response.data.user[0].work[0].region_id);

        setWorkPlace(response.data.user[0].work[0].work_place);
        setWorkNumber(response.data.user[0].work[0].work_phone);
        setWorkStart(response.data.user[0].work[0].date_start);
        setFaculty(response.data.user[0].work[0].faculty);
        setCafedra(response.data.user[0].work[0].cafedra);
        setLevel(response.data.user[0].work[0].position);
        setWorkName(response.data.user[0].work[0].work_name_uz ?? "Malumot yuq");
        setWorkEnd(response.data.user[0].work[0].date_end);
      });
  }, []);
  useEffect(() => {
    getRegionJob();
  }, [regionOne]);

  function getRegionJob() {
    axios
      .get(`${baseApi}/region`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
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
  return (
    <div className="jobAbout">
      <div
        className="background-job__title-wrapper"
        onClick={() => setClicked(!isClicked)}
      >
        <h2 className="background-job__title">{t("jobAbout")}</h2>
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
          <div className="jobAboutLeft">
            <div className="form-group">
              <div className="jobInfos">{t("region")}</div>
              <div className="jobText">{regionName}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("district")}</div>
              <div className="jobText">{districts}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("typeWork")}</div>
              <div className="jobText">{workplace}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("workNumber")}</div>
              <div className="jobText">{workNumber}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("startJob")}</div>
              <div className="jobText">
                {workStart && new Date(workStart).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="jobAboutRight">
            <div className="form-group">
              <div className="jobInfos">{t("faculty")}</div>
              <div className="jobText">{faculty}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("department")}</div>
              <div className="jobText">{cafedra}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("jobTitle")}</div>
              <div className="jobText">{level}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("jobName")}</div>
              <div className="jobText">{workName}</div>
            </div>
            <div className="form-group">
              <div className="jobInfos">{t("fenishJob")}</div>
              <div className="jobText">
                {workEnd && new Date(workEnd).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbout;
