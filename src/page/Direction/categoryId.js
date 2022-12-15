import React, { useState } from "react";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";
import PDFIMG from "../../assets/images/pdfImg.svg";
import axios from "axios";
import Toast from "light-toast";
import { useTranslation } from "react-i18next";
import { baseApi } from "../../services/api";

function CategoryId({ item, IdCategory }) {
    const { t } = useTranslation();
    const [check, setCheck] = useState(false);
    const [nameCategory, setNameCategory] = useState("");
    const [directionCategoryId, setDirectionCategoryId] = useState("");
    const [scores, setScores] = useState("");
    const [directionFileId, setDirectionFileID] = useState(null);

    function pdfAll(v) {
        const formData = new FormData();
        formData.append("user_id", localStorage.getItem("userId"));
        formData.append("direction_category_id", directionCategoryId);
        formData.append("direction_id", IdCategory);
        formData.append("direction_category_name", nameCategory);
        formData.append("score", scores);
        formData.append("pdf", v.target.files[0]);

        axios
            .post(`${baseApi}/check`, formData, {
                headers: {
                    "Accept-Language": localStorage.getItem("lng") || "uz",
                },
            })
            .then((response) => {
                setCheck(true);
                setDirectionFileID(response?.data?.check?.id);
                toast.success(response.data.Message);
                toast.success(response.data.check.message);
                toast.success(response.data.check.admin_permission);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data?.message);
            });
    }

    function deletePdf() {
        axios
            .delete(`${baseApi}/check/${directionFileId}/delete`, {
                headers: {
                    "Accept-Language": localStorage.getItem("lng") || "uz",
                },
            })
            .then((response) => {
                console.log(response);
                setCheck(false);
                setDirectionFileID(null);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data?.message);
                setDirectionFileID(null);
            });
    }

    return (
        <div className="toTeach" key={item.id}>
            <h3 className="itemTitle">
                {item?.category_ru ?? item?.category_uz ?? item?.category_en}
            </h3>
            <div className="formBox">
                <form action="" className="forma">
                    {item?.sub_category?.map((i, index) =>
                        item?.category_uz && i.name_uz ? (
                            <div className="variants" key={index.toString()}>
                                {
                                    <label
                                        className="radioButton"
                                        onInput={() => {
                                            console.log(i?.id, IdCategory);
                                            setNameCategory(i?.name_uz);
                                            setDirectionCategoryId(item.id);
                                            {
                                                setScores(i.score);
                                            }
                                        }}
                                    >
                                        <input
                                            className="toTeach m-lg-2"
                                            type="radio"
                                            name="radio"
                                            value="Higher"
                                        />
                                        {i?.name_uz}
                                        <div className="price">{i?.score}</div>
                                    </label>
                                }
                            </div>
                        ) : item?.category_ru && i.name_ru ? (
                            <div className="variants">
                                {
                                    <label
                                        className="radioButton"
                                        onInput={() => {
                                            {
                                                setScores(i.score);
                                            }
                                            setNameCategory(i?.name_ru);
                                            setDirectionCategoryId(item.id);
                                        }}
                                    >
                                        <input
                                            className="toTeach m-lg-2"
                                            type="radio"
                                            name="radio"
                                            value="Higher"
                                        />
                                        {i?.name_ru}
                                        <div className="price">{i?.score}</div>
                                    </label>
                                }
                            </div>
                        ) : item?.category_en && i.name_en ? (
                            <div className="variants">
                                {
                                    <label
                                        className="radioButton"
                                        onInput={() => {
                                            {
                                                setScores(i.score);
                                            }
                                            setNameCategory(i?.name_en);
                                            setDirectionCategoryId(item.id);
                                            // console.log(i?.id, IdCategory)
                                        }}
                                    >
                                        <input
                                            className="toTeach m-lg-2"
                                            type="radio"
                                            name="radio"
                                            value="Higher"
                                        />
                                        {i?.name_en}
                                        <div className="price">{i?.score}</div>
                                    </label>
                                }
                            </div>
                        ) : (
                            ""
                        )
                    )}
                </form>

                <div className="d-flex align-items-center">
                    <label htmlFor="fileUpload" className={"position-relative"}>
                        <input
                            id="fileUpload"
                            type="file"
                            className={check ? "d-none" : "d-flex"}
                            multiple
                            accept="application/pdf"
                            onChange={pdfAll}
                            style={{ width: "125px" }}
                        />
                    </label>
                    {check ? (
                        <div className="imgsPdf" onClick={deletePdf}>
                            <ClearIcon className="clearIcon" />
                            <img src={PDFIMG} alt="" />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default CategoryId;