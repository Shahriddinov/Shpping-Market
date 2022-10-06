import React from 'react';
import ImageUploading from 'react-images-uploading';
import DownloadIcon from "@mui/icons-material/Download";
import "./imgUploud.scss"
import {useTranslation} from "react-i18next";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/material/SvgIcon/SvgIcon";

const ImgUploud = () => {
    const {t, i18n} = useTranslation();

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        // localStorage.setItem("setImages", setImages)
    };

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
                                <div key={index} className="image-item position-relative" style={{margin:"0 20px 10px", position:'relative'}}>
                                    <img src={image['data_url']} alt="" className="img-fluid" width="100"/>
                                    <div className="image-item__btn-wrapper position-absolute" style={{top:-20, right:-20}}>
                                        {/*<button onClick={() => onImageUpdate(index)}>Update</button>*/}
                                        <Button style={{width:50, height:50, borderRadius:'50%'}} onClick={() => onImageRemove(index)}><span style={{color:'#FE346E', width:'50%'}}><HighlightOffIcon/></span></Button>                                    </div>
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