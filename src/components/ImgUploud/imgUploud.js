import React from 'react';
import ImageUploading from 'react-images-uploading';
import DownloadIcon from "@mui/icons-material/Download";
import "./imgUploud.scss"
import {useTranslation} from "react-i18next";

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
                        >
                            <DownloadIcon/>
                            {t("upload")}
                        </button>
                        &nbsp;
                        {/*<button onClick={onImageRemoveAll}>Remove all images</button>*/}
                        <div className="colms">
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item " style={{margin:"0 20px 10px"}}>
                                    <img src={image['data_url']} alt="" width="100"/>
                                    {/*<div className="image-item__btn-wrapper">*/}
                                    {/*    <button onClick={() => onImageUpdate(index)}>Update</button>*/}
                                    {/*    <button onClick={() => onImageRemove(index)}>Remove</button>*/}
                                    {/*</div>*/}
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