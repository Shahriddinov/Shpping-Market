import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputView from "../inputView/inputView";
import "./PersonalInfo.scss";

function PersonalInfo({obj, imageURL}) {
  const [isClicked, setClicked] = useState(true);
  const { t } = useTranslation();

  return (
    <div className="personal-info">
      <div
        className="personal-info__title-wrapper"
        onClick={() => setClicked(!isClicked)}
      >
        <h2 className="personal-info__title">{t("personalInfo")}</h2>
        <span className="personal-info__button"></span>
      </div>
      <div
        className={
          isClicked
            ? `personal-info__drop-down  drop-up`
            : `personal-info__drop-down`
        }
      >
        <div className="personal-info__user">
          <img
            src={imageURL}
            alt="personal info user picture"
            className="personal-info__user-pic"
            width="80"
            height="80"
          />
          <div className="personal-info__user-wrapper">
            <p className="personal-info__name-text">{t("fio")} *</p>
            <p className="personal-info__name">
              <InputView>{t(obj.fullName)}</InputView>
            </p>
          </div>
        </div>
        <FormGroup className="personal-info__gender">
          <FormControlLabel control={<Switch />} label={t("man")} />
        </FormGroup>
        <div className="personal-info__wrapper">
          <div className="personal-info__passport-id">
            <p className="personal-info__text">{t(obj.passportId)}</p>
            <InputView>AS 1234567</InputView>
          </div>
          <div className="personal-info__education">
            <p className="personal-info__text">{t(obj.education)}</p>
            <InputView>{t(obj.education)}</InputView>
          </div>
          <div className="personal-info__email">
            <p className="personal-info__text">{t(obj.email)}</p>
            <InputView>{t(obj.email)}</InputView>
          </div>
          <div className="personal-info__nationality">
            <p className="personal-info__text">{t("nation")}</p>
            <InputView>{t(obj.nationality)}</InputView>
          </div>
          <div className="personal-info__date-bitrth">
            <p className="personal-info__text">{t("happy")}</p>
            <InputView>{t(obj.dateBirth)}</InputView>
          </div>
          <div className="personal-info__data">
            <p className="personal-info__text">{t("personal")}</p>
            <InputView>{t(obj.pinfl)}</InputView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
