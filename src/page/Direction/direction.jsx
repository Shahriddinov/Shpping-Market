import React, { useEffect, useState } from "react";
import "./direction.scss";
import { useTranslation } from "react-i18next";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Footer from "../../components/Layout/Footer/Footer";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PDFIMG from "../../assets/images/pdfImg.svg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Toast from "light-toast";
import "react-toastify/dist/ReactToastify.css";
import ClearIcon from "@mui/icons-material/Clear";
import CategoryId from "./categoryId";
import { baseApi } from "../../services/api";

const Direction = (props) => {
  const { t, i18n } = useTranslation();
  const [directionCategoryId, setDirectionCategoryId] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const [pdfImgs, setPdfImgs] = useState(false);
  const [selectedDirect, setSelectedDirect] = useState([]);
  const [showVariants, setShowVariants] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [activeItem, setActiveItem] = useState(0);
  const [direction, setDirection] = useState([]);
  const [directionCategory, setDirectionCategory] = useState([]);
  const [IdCategory, setIdCategory] = useState("");
  const [check, setCheck] = useState("");
  const [allScore, setAllScore] = useState(0);

  const notify = () => toast("Wow so easy!");

  function Variants(q) {
    let newArr = [];
    if (q === -1) {
      let c = 0;
      for (let i = 0; i < 6; i++) c += showVariants[i] ? 1 : 0;

      showVariants[c] = true;
      setActiveItem(c);
    } else {
      showVariants[q] = false;
      setActiveItem(4);
    }

    newArr = newArr.concat(showVariants);
    setShowVariants(newArr);
  }

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  useEffect(() => {
    handleChange();
  }, []);

  function handleChange() {
    axios
      .get("https://sport.napaautomotive.uz/api/direction ", {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        setDirection(response.data.direction);
        console.log("hello", response.data.direction.id);
      });
  }

  async function handleChangeTwo(e) {
    axios
      .get(`https://sport.napaautomotive.uz/api/directionCategory`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        const d = response?.data?.directionCategory?.filter((v) => {
          if (Number(v.direction_id) === e) return v;
        });
        setDirectionCategory(d);
        console.log("hello", d);
      });
    setIdCategory(e);
  }

  const dataOne = (e) => {
    handleChangeTwo(e);
    console.log(e);
  };

  return (
    <>
      <section id="direction" className="direction">
        <ProfileSidebar items />
        <div className="basePart">
          <ProfileHeader handleChangeLng={handleChangeLng} />
          <ProfileNavbar title={"direction"} />
          <Box sx={{ width: "44%", minWidth: "44%", ml: "22px", mt: 1, mb: 5 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t("allDirections")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={direction}
                label={t("allDirections")}
                onChange={(e) => dataOne(e.target.value)}
              >
                {direction?.map((item, index) => {
                  console.log(item.id);
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item.title_ru ?? item.title_uz ?? item.title_en}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>

          <div className="Box">
            <div className="destination">
              {directionCategory?.map((item) => (
                <CategoryId item={item} key={item.id} IdCategory={IdCategory} />
              ))}
            </div>

            <div className="NextPrev">
              <Stack spacing={2} direction="row">
                <Button
                  className="button"
                  variant="contained"
                  href="/profileOver"
                >
                  <span className="icones">
                    <CancelOutlinedIcon fontSize="small" />
                  </span>
                  Назад
                </Button>
              </Stack>
              <Stack spacing={2} direction="row">
                <Button
                  className="button"
                  onClick={handleChangeTwo}
                  href="/allInfo"
                  style={{ backgroundColor: "#0FBE7B", margin: 0 }}
                  variant="contained"
                >
                  <span className="icones">
                    <SaveIcon fontSize="small" />
                  </span>
                  Сохранить
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Direction;
