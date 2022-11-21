import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./oneEducation.scss";

function OneEducation({obj}) {
  const [ isClicked, setClicked ] = useState(false);
  const { t } = useTranslation();

  const [nation, setNation] = useState("");

  const handleNation = (event) => {
    setNation(event.target.value);
  };

  return (
    <div className="background-job">
      <div
        className="background-job__title-wrapper"
        onClick={() => setClicked(!isClicked)}
      >
        <h2 className="background-job__title">{t("oneEducationInfo")} </h2>
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
                  <div className="jobText">Toshkent</div>
              </div>
              <div className="form-group">
                  <div className="jobInfos">{t("institution")}</div>
                  <div className="jobText">ТДТУ</div>
              </div>
              <div className="form-group">
                  <div className="jobInfos">{t("speciality")}</div>
                  <div className="jobText">Физрук</div>
              </div>
          </div>
          <div className="jobSectionRight">
              <div className="form-group">
                  <div className="jobInfos">{t("dateReceived")}</div>
                  <div className="jobText">02. 05. 2020 г.</div>
              </div>
              <div className="form-group">
                  <div className="jobInfos">{t("expirationDate")}</div>
                  <div className="jobText">02. 05. 2022 г.</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneEducation