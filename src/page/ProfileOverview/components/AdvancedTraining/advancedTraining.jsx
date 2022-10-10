import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import"./advancedTraining.scss"
const AdvancedTraining = () => {
    const [ isClicked, setClicked ] = useState(false);
    const { t } = useTranslation();

    const [nation, setNation] = useState("");

    const handleNation = (event) => {
        setNation(event.target.value);
    };

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
                            <div className="jobText">Toshkent</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("attended")}</div>
                            <div className="jobText">Образавательное учреждение</div>
                        </div>
                    </div>
                    <div className="jobSectionRight">
                        <div className="form-group">
                            <div className="jobInfos">{t("direction")}</div>
                            <div className="jobText">Специальность</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("qualificationStart")}</div>
                            <div className="jobText">02. 05. 2022 г.    05. 10. 2021 г.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedTraining;