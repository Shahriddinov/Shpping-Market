import React, {useState} from 'react';
import "./jobAbout.scss"
import {useTranslation} from "react-i18next";
const JobAbout = () => {
    const [ isClicked, setClicked ] = useState(false);
    const { t } = useTranslation();

    const [nation, setNation] = useState("");

    const handleNation = (event) => {
        setNation(event.target.value);
    };
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
                            <div className="jobText">Toshkent</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("district")}</div>
                            <div className="jobText">yangi Obod</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("typeWork")}</div>
                            <div className="jobText">Образавательное учреждение</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("workNumber")}</div>
                            <div className="jobText">Номер</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("startJob")}</div>
                            <div className="jobText">02. 05. 2021 г.</div>
                        </div>
                    </div>
                    <div className="jobAboutRight">
                        <div className="form-group">
                            <div className="jobInfos">{t("faculty")}</div>
                            <div className="jobText">Факультет</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("department")}</div>
                            <div className="jobText">Кафедра</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("jobTitle")}</div>
                            <div className="jobText">Должность</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("jobName")}</div>
                            <div className="jobText">Название</div>
                        </div>
                        <div className="form-group">
                            <div className="jobInfos">{t("fenishJob")}</div>
                            <div className="jobText">02. 05. 2021 г.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobAbout;