import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RuFlag from "../../assets/images/ruFlag.png";
import QuestionMark from "../../assets/images/QuestionMark.svg";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./ProfileHeader.scss";

const { Header } = Layout;

function ProfileHeader({ handleChangeLng }) {
  return (
    <Layout>
      <Header>
        <div className="profile__container">
          <div className="left">
            <div className="name">ФИО</div>
            <div className="jobTitle">должность</div>
          </div>
          <div className="right">
            <button
              className="flagButton"
              onClick={() => handleChangeLng("ru")}
            >
              <img className="iconFlag" src={RuFlag} alt="" />
              Ру
            </button>
            <NotificationsNoneIcon className="icon" />
            <Link className="question" to="/">
              <img src={QuestionMark} width="20" height="20" />
            </Link>
          </div>
        </div>
      </Header>
    </Layout>
  );
}

export default ProfileHeader;
