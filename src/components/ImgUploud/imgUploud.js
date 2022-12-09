import React, {useState} from 'react';
import ImageUploading from 'react-images-uploading';
import DownloadIcon from "@mui/icons-material/Download";
import "./imgUploud.scss"
import {useTranslation} from "react-i18next";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/material/SvgIcon/SvgIcon";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import {useNavigate} from "react-router";

const ImgUploud = (props) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate()
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        pdfAll(imageList)
    };

    function pdfAll(v) {
        let formData = new FormData();
        formData.append("user_id", localStorage.getItem("userId"));
        formData.append("direction_category_id", localStorage.getItem('pdf'));
        formData.append("pdf", v[0]);
        console.log(v[0])
        console.log(formData.getAll("direction_category_id"))
        axios.post('https://sport.uz.napaautomotive.uz/public/api/userPdf', formData).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button className="file"
                                style={isDragging ? {color: 'red'} : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                disabled={images.length === 1}
                        >
                            <DownloadIcon/>
                            {t("upload")}
                        </button>
                        {/*<button onClick={onImageRemoveAll}>Remove all images</button>*/}
                        <div className="colms">
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" className="img-fluid" width="100"/>
                                    <div className="image-item__btn-wrapper">
                                        <Button className="DeleteButton" onClick={() => onImageRemove(index)}><span
                                            className="delete-Icon"><CloseIcon color="red"/></span></Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </>
    );
};

export default ImgUploud;