import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slayder from "../Slayder/slayder";
import "./Page1.scss";
import { Option } from "antd/lib/mentions";
import { Select } from "antd";

function Page1() {
  return (
    <div className="Page1">
      <Slayder />
      <form action="post" className="page1__form">
        <div className="page1__form-left">
          <label className="fio__label page1__label" htmlFor="fio">
            ФИО *
            <input
              className="fio__input page1__input"
              id="fio"
              type="text"
              placeholder="Ботиров Асадбек Олимович"
            />
          </label>
          <FormGroup className="page1__gender">
            <FormControlLabel control={<Switch />} label="Женщина" />
            <FormControlLabel control={<Switch />} label="Мужчина" />
          </FormGroup>
          <label
            className="identity-card__label page1__label"
            htmlFor="identity-card"
          >
            Паспорт серии *
            <input
              className="identity-card__input page1__input"
              id="identity-card"
              type="text"
              placeholder="AS 1234567"
            />
          </label>
          <label className="email__label page1__label" htmlFor="email">
            Электронная почта *
            <input
              className="email__input page1__input"
              id="email"
              type="text"
              placeholder="Электронная почта"
            />
          </label>
        </div>
        <div className="page1__form-right">
          <div className="page1__nationality-wrapper">
            <span className="page1__nationality-title">Национальность *</span>
            <Select
              className="page1__nationality"
              defaultValue="natio"
              bordered={false}
            >
              <Option value="natio" disabled>
                Nationality
              </Option>
              <Option value="uz">Uzbek</Option>
              <Option value="ru">Russian</Option>
            </Select>
          </div>
          <label className="date__label page1__label" htmlFor="date">
            Дата Рождения *
            <input
              className="date__input page1__input"
              id="date"
              type="date"
              placeholder="Дата Рождения"
            />
          </label>
          <label className="number__label page1__label" htmlFor="number">
            Личный номер Индификации ПИНФЛ *
            <input
              className="number__input page1__input"
              id="number"
              type="number"
              placeholder="ПИНФЛ"
            />
          </label>
          <label
            className="phone-number__label page1__label"
            htmlFor="phone-number"
          >
            Телефон номер *
            <input
              className="phone-number__input page1__input"
              id="phone-number"
              type="number"
              placeholder="+998 90 721 88 36"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Page1;
