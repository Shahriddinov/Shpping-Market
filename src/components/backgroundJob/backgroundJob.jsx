import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputView from "../inputView/inputView";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import "./backgroundJob.scss";

function BackgroundJob({obj}) {
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
        <h2 className="background-job__title">{t("jobBackground")}</h2>
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
          <div className="background-job__learning-build">
            <p className="background-job__text">{t("learningBuild")}</p>
            <InputView>{t(obj.learningBuild)}</InputView>
          </div>
          <div className="background-job__department">
            <p className="background-job__text">{t("department")}</p>
            <InputView>{t(obj.department)}</InputView>
          </div>
          <div className="background-job__district">
            <p className="background-job__text">{t("district")}</p>
            <InputView>{t(obj.district)}</InputView>
          </div>
          <div className="background-job__email">
            <p className="background-job__text">{t("email")}</p>
            <InputView>{t(obj.email)}</InputView>
          </div>
          <div className="background-job-wrapper">
            <span className="background-job-title">{t("nation")} *</span>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  {t("nation")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nation}
                  label={t("nation")}
                  onChange={handleNation}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="background-job__district">
            <p className="background-job__text">{t("district")}</p>
            <InputView>{t(obj.district)}</InputView>
          </div>
          <div className="background-job__email">
            <p className="background-job__text">{t("email")}</p>
            <InputView>{t(obj.email)}</InputView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundJob