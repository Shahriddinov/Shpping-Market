import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./PersonalInfo.scss";

function PersonalInfo({obj, imageURL}) {
  const [isClicked, setClicked] = useState(true);
  const { t } = useTranslation();

  return (
    <div className="personal-info">
      <div
        className="personal-info__title-wrapper"
      >
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
              <img
                  src={imageURL}
                  alt="personal info user picture"
                  className="personal-info__user-pic"
                  width="80"
                  height="80"
              />
              <div className="name">Botir Qodirov</div>
            </div>

            <div className="d-flex align-items-center gap-5">
              <div className="mans">{t("sex")}</div>
              <div className="stage">Опыт работы 2 года 7 месяцев</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("passport")}</div>
              <div className="nationInfo">AS 1234567</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("Education")}</div>
              <div className="nationInfo">Высшее</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("emails")}</div>
              <div className="nationInfo">test02@gmail.com</div>
            </div>
          </div>
          <div className="personalRight">
            <div className="form-group">
              <div className="personalNation">{t("nation")}</div>
              <div className="nationInfo">Uzbek</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("happy")}</div>
              <div className="nationInfo">05.10.2002 г</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("personal")}</div>
              <div className="nationInfo">16141232354578</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("phoneNumber")}</div>
              <div className="nationInfo">+998 99 123 45 67</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
