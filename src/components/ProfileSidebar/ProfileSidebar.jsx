import Sider from "antd/lib/layout/Sider";
import Person2Icon from "@mui/icons-material/Person2";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./ProfileSidebar.scss";

function ProfileSidebar({items}) {
  return (
    <Sider className="profile__sider">
      <div className="d-flex align-items-center px-3 mt-3">
        <span className="profile-icon__wrapper">
          <Person2Icon />
        </span>
        <span className="profile__title">ФИО</span>
      </div>
      <Menu
        theme="dark"
        style={{ marginTop: "20px" }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}

export default ProfileSidebar;
