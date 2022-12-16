import React, { useEffect, useState } from "react";
import axios from "axios";
import Imgs from "../../../../assets/images/avatar.png";
import Camera from "../../../../assets/images/camera.svg";
import "./avatar.scss";
import { useTranslation } from "react-i18next";
import { baseApi } from "../../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SUCCESS } from "redux-saga-routines/dist/routineStages";

function Avatar(props) {
  const id = localStorage.getItem("userId");
  const { t, i18n } = useTranslation();
  const [photos, setPhotos] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [imgId, setImgId] = useState("");
  const [photoAddress, setPhotoAddress] = useState();

  const imgUpload = (v) => {
    let formData = new FormData();
    formData.append("photo", v.target.files[0]);
    formData.append("user_id", localStorage.getItem("userId"));

    axios
      .post(`${baseApi}/avatar`, formData)
      .then((res) => {
        setPhotos(res.data.avatar.id);
        // if (res.data.status === 200) {
        toast.success(SUCCESS);
        // }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  };

  useEffect(() => {
    axios
      .get(`${baseApi}/allData/` + id)
      .then((response) => {
        setImgId(response.data.user_avatar.id);
        setPhotoAddress(response.data.user_avatar.photo);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }, []);

  function deleteImg() {
    axios
      .delete(`${baseApi}/avatar/${imgId}/delete`, {
        headers: {
          "Accept-Language": localStorage.getItem("lng") || "uz",
        },
      })
      .then((response) => {
        toast.success(SUCCESS);
        setPhotoAddress(null);
        setPhotos(null);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }

  return (
    <div className="avatar">
      <h5>{photoError}</h5>
      {/*<h4>{photos}</h4>*/}
      <img
        className="defaultImg"
        onClick={deleteImg}
        src={
          photoAddress
            ? `https://sport.napaautomotive.uz/storage/${photoAddress}`
            : Imgs
        }
        alt="avatar"
      />
      <label className="avatarLabel" htmlFor="file">
        <input
          className="InputAvatar"
          onChange={imgUpload}
          type="file"
          name="img"
          id="file"
          accept="image/*"
        />

        <img src={Camera} alt="" />
      </label>
    </div>
  );
}

export default Avatar;
