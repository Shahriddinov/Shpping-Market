import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./PersonalInfo.scss";

import Avatar from "../Avatar/Avatar";

function PersonalInfo({ personalInfo, passportInfo, education }) {
  const [isClicked, setClicked] = useState(true);
  const { t } = useTranslation();
  const birthDay = new Date(personalInfo?.birth_date).toLocaleDateString();

  return (
    <div className="personal-info">
      <div className="personal-info__title-wrapper">
        <h2 className="personal-info__title">{t("PersonalData")}</h2>
      </div>
      <div
        className={
          isClicked
            ? `personal-info__drop-down  drop-up`
            : `personal-info__drop-down`
        }
      >
        <div className="personaly">
          <div className="personalLeft">
            <div className="personal-info__user">
              <Avatar />
              <div className="name">{personalInfo?.full_name}</div>
            </div>

            <div className="d-flex align-items-center gap-5">
              <div className="mans">
                {personalInfo?.gender && t(personalInfo?.gender)}
              </div>
              {/*<div className="stage">Опыт работы 2 года 7 месяцев</div>*/}
            </div>
            <div className="form-group">
              <div className="personalNation">{t("passport")}</div>
              <div className="nationInfo">
                {passportInfo?.pasport_seria} {passportInfo?.pasport_seria_code}
              </div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("Education")}</div>
              <div className="nationInfo">{education.specialization}</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("emails")}</div>
              <div className="nationInfo">{personalInfo?.email}</div>
            </div>
          </div>
          <div className="personalRight">
            <div className="form-group">
              <div className="personalNation">{t("nation")}</div>
              <div className="nationInfo">{personalInfo?.nationality}</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("happy")}</div>
              <div className="nationInfo">{birthDay}</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("personal")}</div>
              <div className="nationInfo">{passportInfo?.pnfl}</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("phoneNumber")}</div>
              <div className="nationInfo">{personalInfo?.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
