import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./PersonalInfo.scss";
import axios from "axios";
import Avatar from "../Avatar/Avatar";

function PersonalInfo({ obj, imageURL }) {
  const id = localStorage.getItem("userId");
  const [isClicked, setClicked] = useState(true);
  const { t } = useTranslation();
  const [allName, setAllName] = useState([]);
  const [allGender, setAllGender] = useState(null);
  const [allPasport, setAllPasport] = useState([]);
  const [allPasport_seria, setAllPasport_seria] = useState([]);
  const [education, setEducation] = useState([]);

  const [email, setEmail] = useState("");
  const [national, setNational] = useState("");
  const [brithday, setBrithday] = useState("");
  const [pnfl, setPnfl] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    axios
      .get("https://sport.napaautomotive.uz/api/allData/" + id)
      .then((response) => {
        setAllName(response.data.user_personal_info.full_name);
        setAllGender(response.data.user_personal_info.gender);
        setAllPasport(response.data.user_pasport.pasport_seria);
        setAllPasport_seria(response.data.user_pasport.pasport_seria_code);
        setEducation(response.data.user_education[0]);
        setEmail(response.data.user_personal_info.email);
        setNational(response.data.user_personal_info.nationality);
        setBrithday(response.data.user_personal_info.birth_date);
        setPnfl(response.data.user_pasport.pnfl);
        setPhone(response.data.user_personal_info.phone);
      });
  }, []);

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
              <div className="name">{allName}</div>
            </div>

            <div className="d-flex align-items-center gap-5">
              <div className="mans">{allGender && t(allGender)}</div>
              {/*<div className="stage">Опыт работы 2 года 7 месяцев</div>*/}
            </div>
            <div className="form-group">
              <div className="personalNation">{t("passport")}</div>
              <div className="nationInfo">
                {allPasport} {allPasport_seria}
              </div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("Education")}</div>
              <div className="nationInfo">{education.education_name}</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("emails")}</div>
              <div className="nationInfo">{email}</div>
            </div>
          </div>
          <div className="personalRight">
            <div className="form-group">
              <div className="personalNation">{t("nation")}</div>
              <div className="nationInfo">{national}</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("happy")}</div>
              <div className="nationInfo">
                {brithday && new Date(brithday).toLocaleDateString()}
              </div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("personal")}</div>
              <div className="nationInfo">{pnfl}</div>
            </div>
            <div className="form-group">
              <div className="personalNation">{t("phoneNumber")}</div>
              <div className="nationInfo">{phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
