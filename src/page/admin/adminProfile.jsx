import React, { useEffect, useState } from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../components/Layout/Footer/Footer";
import DownloadIcon from "@mui/icons-material/Download";
import "../../components/admin/teacherCard/teacherCardStyle.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Imgs from "../../assets/images/avatar.png";
import { useNavigate } from "react-router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { baseApi, baseApiImg } from "../../services/api";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import id from "faker/lib/locales/id_ID";

const Filters = [
  { label: "Список стажеров, запланированных на обучение", val: 0 },
  { label: "Список назначенных на повторные курсы", val: 1 },
  { label: "Список не обучавшихся на повторных курсах", val: 2 },
  { label: "Список людей, участвующих в повторных курсах", val: 3 },
  { label: "Список не прошедших повторные курсы", val: 4 },
];

const Direction = () => {
  const { t, i18n } = useTranslation();

  const [showDirect, setShowDirect] = useState(false);
  const [showTeachers, setShowTeachers] = useState(false);
  const [teacher, setTeacher] = useState([]);
  const [teacher2, setTeacher2] = useState([]);
  const [filterType, setFilterType] = useState(0);
  const [serchByName, setSerchByName] = useState("");
  const [checkUserList, setCheckUserList] = useState([]);

  const [directions, setDirections] = useState([]);
  const [getDirectionId, setGetDirectionId] = useState([]);
  const [usersId, setUsersId] = useState([]);
  const [count, setCount] = useState(false);
  const [checked, setChecked] = useState(false);
  const [idUsers, setIdUsers] = useState(0);
  const [downloadExelId, setDownloadExelId] = useState("");

  const navigate = useNavigate();
  const [value, setValue] = React.useState(null);

  const language = localStorage.getItem("lng");

  const handleSubmit = (e) => e.preventDefault();

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  const filliad_id = localStorage.getItem('fillialId')
  console.log(filliad_id);

  useEffect(() => {
    axios
      .get(`${baseApi}/direction/${filliad_id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        console.log(response.data);
        setDirections(response.data.direction);
        // setGetDirectionId(response.data.datas.user)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function directionsUser(id) {
    setDownloadExelId(id);
    axios
      .get(`${baseApi}/direction_with_user/${id}/${filliad_id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        console.log(response.data);
        let map = Object.values(response.data.data);
        setTeacher2(map);
        setCheckUserList(map);
        console.log(map);
      })
      .catch((error) => {});
  }

  function directionUserid(user_id) {
    setIdUsers(user_id);
    axios
      .get(`${baseApi}/user_in_direction/${user_id}`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        localStorage.setItem("checkId", user_id);
        setUsersId(response.data.user[0]);
      })
      .catch((error) => {});
  }

  function onClick() {
    navigate(`/adminProfile/checkUser/${idUsers}`);
  }

  const [dataValueState, setDataValueState] = React.useState({
    y: null,
    d: null,
    m: null,
  });
  const dataValue = (newValue) => {
    setValue(newValue);
    setDataValueState({
      y: newValue?.$y,
      d: newValue?.$D,
      m: newValue?.$M + 1,
    });
    if (newValue?.$y.length < 3) {
      setTeacher2([]);
    }
  };
  const filterTecher = () => {
    let data = teacher?.filter((item) => {
      let timeTeacher = item?.training_date_start.substring(0, 10)?.split("-");
      if (
        dataValueState.y == timeTeacher[0] &&
        dataValueState.m == timeTeacher[1] &&
        dataValueState.d == timeTeacher[2]
      ) {
        return item;
      }
    });
    setTeacher2(data);
  };

  function onChangeFilterUser(info) {
    setSerchByName(info);
    const search = checkUserList.filter((item) =>
      item.user_name.toLowerCase().includes(info.toLowerCase())
    );
    setTeacher2((prev) => (prev = search));

    console.log(search);
  }

  const downloadExcelUrl = `${baseApiImg}/oneUserInfo/${idUsers}/export`;
  const downloadExcelAll = `${baseApiImg}/userInfo/${downloadExelId}/export`;

  return (
    <>
      <section id="direction" className="direction">
        <ProfileSidebar admin={true} />
        <div className="basePart">
          <ProfileHeader handleChangeLng={handleChangeLng} />
          <ProfileNavbar title={showDirect ? "profile" : "direction"} />
          <div className="Box">
            <div className="destination">
              <div className="directions">
                {directions?.map((item, index) => {
                  return (
                    <div
                      className="directItem"
                      onClick={() => {
                        directionsUser(item.id);
                        setCount(true);
                      }}
                    >
                      <h5>{item?.title}</h5>
                      <div className="scores">
                        <p>
                          Педагоги:{" "}
                          {
                            item.users.filter(
                              (el) =>
                                el.check_user !== null &&
                                el.portfolio_user !== null &&
                                el.statistic_user !== null
                            ).length
                          }{" "}
                        </p>
                        <div>
                          +
                          {
                            item.users.filter(
                              (el) =>
                                el.check_user === null ||
                                el.portfolio_user === null ||
                                el.statistic_user === null
                            ).length
                          }
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              {count && (
                <div>
                  <div className="filters">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={Filters}
                      className="stepFilter"
                      onChange={(event, value) => setFilterType(value.val)}
                      renderInput={(params) => (
                        <TextField {...params} label={t("filter")} />
                      )}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label={t("filterData")}
                        value={value}
                        className="stepFilter"
                        onChange={(newValue) => dataValue(newValue)}
                        renderInput={(params) => (
                          <TextField style={{ width: "500px" }} {...params} />
                        )}
                      />
                    </LocalizationProvider>
                    <Button
                      onClick={filterTecher}
                      variant="contained"
                      className="btn btn-primary"
                    >
                      {t("search")}
                    </Button>
                  </div>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    value={serchByName}
                    label={t("userName")}
                    onChange={(e) => onChangeFilterUser(e.target.value)}
                    variant="outlined"
                    className="w-100 mt-4"

                  />
                  {/* <input type="text" value={serchByName} className="form-control" onChange={e =>onChangeFilterUser(e.target.value)}/> */}
                </div>
              )}

              {count && (
                <div className="listOfOrganize">
                  <div className="boxNav">
                    <h1>{t("totals")}</h1>

                    <div
                      className="Cancel"
                      onClick={() => setShowTeachers(false)}
                    ></div>
                  </div>
                  <div>
                    <div className="pdf-part">
                      <div className="pdf">
                        <div className="pdf-item">
                          {teacher2?.map((item, index) => {
                            return (
                              <div key={index.toString()} style={{ margin: 0 }}>
                                <div
                                  className={
                                    item.check_user !== null &&
                                    item.portfolio_user !== null &&
                                    item.statistic_user !== null
                                      ? "teachCard "
                                      : "teachCard newUsers"
                                  }
                                  onClick={() => {
                                    directionUserid(item.user_id);
                                    setChecked(true);
                                  }}
                                >
                                  <div className="teacherImage">
                                    <img
                                      src={
                                        item?.avatar
                                          ? `${baseApiImg}/${item?.avatar}`
                                          : Imgs
                                      }
                                      alt="No img"
                                    />
                                  </div>
                                  <div className="teacherInfo">
                                    <h4>{item?.user_name}</h4>
                                    <div className="persons">
                                      <h4>{t("numberID")}: </h4>
                                      <h4>{item?.pasport_seria}</h4>
                                      <h4> {item?.pasport_seria_code}</h4>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <h5>{t("mark")} :</h5>
                                      <div className="score">
                                        {item?.all_score ?? 0}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="DownloadFile">
                      <a
                        href={downloadExcelAll}
                        download
                        target="__blank"
                        className="downloadItem"
                      >
                        <span>
                          <DownloadIcon fontSize="small" />
                        </span>
                        {t("excelDownloud")}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {checked && (
            <div className="Box">
              <div className="teachCards mt-5">
                <div className="leftUser">
                  <div className="d-flex gap-4">
                    <img
                      className="userImg"
                      src={
                        usersId.avatar
                          ? `${baseApiImg}/${usersId.avatar}`
                          : Imgs
                      }
                      alt="No img"
                    />
                    <div className="w-100">
                      <div>{t("userName")}</div>
                      <div className="userName">{usersId?.user_name}</div>
                    </div>
                  </div>
                  <div className="gender">{usersId?.gender}</div>
                  <div className="info">{t("QualInfo")}</div>
                  <div
                    className="textarea"
                    placeholder={t("QualInfo")}
                  >
                    {usersId?.training_direction}
                  </div>
                  <div className="info">{t("DateLastQual")}</div>
                  <div className="textsa">
                    {usersId?.training_date_end &&
                      new Date(usersId?.training_date_end).toLocaleDateString()}
                    {/*{usersId?.training_date_end}*/}
                  </div>

                  <div className="info">{t("Education")}</div>
                  <div className="textsa">
                    {usersId.education_specialization?.specialization ??
                      "Malumot yuq"}
                  </div>
                </div>

                <div className="RightUser">
                  <div className="RightInfo">
                    <div className="RightInfo">{t("speciality")}</div>
                  </div>
                  <div className="RightTextsa">
                    {" "}
                    {usersId.education_specialization?.specialization ?? "Malumot yuq"}
                  </div>
                  <div className="RightInfos" style={{ marginTop: "5%" }}>
                   {t("dirName")}
                  </div>
                  <div className="RightTextsa">
                    {" "}
                    {usersId?.education_specialization?.specialization ??
                      "malumot yuq"}
                  </div>
                  <div className="d-flex gap-2" style={{ marginTop: "5%" }}>
                    <div className="scores">Женщина с ребенком</div>
                    <div className="scores">Годен</div>
                  </div>
                  <div className="d-flex mt-3 gap-2">
                    <div className="scores">Пенсионер</div>
                    <div className="scores">Пенсионер</div>
                  </div>
                  <Stack spacing={2} direction="row">
                    <Button
                      onClick={onClick}
                      style={{
                        backgroundColor: "#0FBE7B",
                        fontSize: 16,
                        width: 270,
                        height: 48,
                        marginTop: "25%",
                      }}
                      variant="contained"
                    >
                      {" "}
                      <span style={{ marginRight: 15 }}>
                        <CheckCircleOutlineIcon fontSize="small" />
                      </span>{" "}
                      {t("goProfile")}
                    </Button>
                  </Stack>
                  <div className="DownloadFile">
                    <a
                      href={downloadExcelUrl}
                      download
                      className="downloadItem"
                      // onClick={() => onButtonClick('xls')}
                    >
                      <span>
                        <DownloadIcon fontSize="small" />
                      </span>
                      {t("excelDownloud")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Direction;
