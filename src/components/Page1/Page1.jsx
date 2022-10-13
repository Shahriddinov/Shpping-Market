import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slayder from "../Slayder/slayder";
import "./Page1.scss";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';

import { Option } from "antd/lib/mentions";
// import { Select } from "antd";
import {useTranslation} from "react-i18next";
import TextField from "@mui/material/TextField";
import React from "react";

function Page1() {
  const {t} = useTranslation();
  const [nation, setNation] = React.useState('');
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleNation = (event) => {
    setNation(event.target.value);
  };
  return (
      <div className="Page1">
        <Slayder />
        <form action="post" className="page1__form">
          <div className="page1__form-left w-100">
            <label className="fio__label page1__label" htmlFor="fio">
              {t("userName")} *


              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                <TextField
                    className="fio__input page1__input mt-3"
                    id="outlined-basic"
                    label={t("userName")}
                    variant="outlined"
                />
              </Box>
            </label>
            <FormGroup className="page1__gender">
              <FormControlLabel control={<Switch />} label={t("women")} />
              <FormControlLabel control={<Switch />} label={t("man")} />
            </FormGroup>
            <label
                className="identity-card__label page1__label " style={{marginTop:"10%"}}
                htmlFor="identity-card"
            >
              {t("passportNumber")} *
              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                <TextField
                    className="identity-card__input page1__input mt-3"
                    id="outlined-basic"
                    label={t("passportNumber")}
                    variant="outlined"
                />
              </Box>
            </label>
            <label className="email__label page1__label" htmlFor="email">
              {t("Email")} *

              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                <TextField
                    className="email__input page1__input mt-3"

                    id="outlined-basic"
                    label={t("Email")}
                    variant="outlined"
                />
              </Box>

            </label>
          </div>
          <div className="page1__form-right">
            <div className="page1__nationality-wrapper mt-2">
              <span className="page1__nationality-title">{t("nation")} *</span>
              <Box sx={{ minWidth: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{t("nation")}</InputLabel>
                  <Select
                      className="mt-2"
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
            <label className="date__label page1__label" htmlFor="date">
              {t("happy")} *
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <Stack spacing={3}>
                  <DesktopDatePicker
                      className="mt-3"
                      label="Date desktop"
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </label>
            <label className="number__label page1__label" htmlFor="number">
              {t("personal")} *
              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                <TextField
                    className="number__input page1__input mt-3"
                    type="text"
                    id="outlined-basic"
                    label={t("personal")}
                    variant="outlined"
                />
              </Box>
            </label>
            <label
                className="phone-number__label page1__label mt-2"
                htmlFor="phone-number"
            >
              {t("phoneNumber")} *
              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                <TextField
                    className="phone-number__input page1__input mt-3"
                    type="number"
                    id="outlined-basic"
                    label={t("phoneNumber")}
                    variant="outlined"
                />
              </Box>
            </label>
          </div>
        </form>

      </div>
  );
}

export default Page1;
