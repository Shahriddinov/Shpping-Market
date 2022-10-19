import Sider from "antd/lib/layout/Sider";
import UserPicture from "../userPicture/userPicture";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./ProfileSidebar.scss";

function ProfileSidebar({ items, userName, userPic }) {
  return (
    <Sider
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            top: 0,
            bottom: 0,
        }}
        className="profile__sider">
      <div className="d-flex align-items-center px-3 mt-3">
        <UserPicture pictureURL={userPic} />
        <span className="profile__title">{userName}</span>
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
