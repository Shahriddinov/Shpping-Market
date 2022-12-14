import React from "react";
import Stepper from "react-stepper-horizontal";
import {useTranslation} from "react-i18next";
import "./slayder.scss";

const styles = {
    textAlign: "center",
};

var num = 0;


const Slayder = (active) => {

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    const {t, i18n} = useTranslation();

    return <div style={styles}>
        <div>
            <Stepper
                steps={[
                    {title: t("PersonalData")},
                    {title: t("oneEducationInfo1")},
                    {title: t("jobAbout1")},
                    {title: t("advancedTraining")}
                ]}
                activeStep={active.val}
                activeColor="#2B63C0"
                completeColor="#2B63C0"
                activeTitleColor="#2B63C0"
                completeTitleColor="#2B63C0"
                circleFontColor="#FFF"
                defaultBorderColor="#046DAF"
                defaultBorderStyle="#046DAF"
                completeBarColor="#2B63C0"
            />
        </div>
    </div>
};

export default Slayder;