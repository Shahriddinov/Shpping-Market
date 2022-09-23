import Person2Icon from "@mui/icons-material/Person2";
import "./userPicture.scss";

function UserPicture({ pictureURL }) {
  if (pictureURL) {
    return <img className="profile-icon" src={pictureURL} alt="user Picture" />;
  }
  return (
    <span className="profile-icon__wrapper">
      <Person2Icon />
    </span>
  );
}

export default UserPicture;
