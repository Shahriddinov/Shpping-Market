import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import HomeImgs from "../../assets/images/homeImg.JPG";
import HomeImgsTwo from "../../assets/images/homeImg2.JPG";
import HomeImgsThree from "../../assets/images/homeImg3.JPG";
import axios from "axios";
import { baseApi } from "../../services/api";
const contentStyle = {
  height: "70px",
  textAlign: "center",
  background: "#364d79",
};
export default function CarouselComponent() {
  const [homeImage, setHomeImage] = useState([]);

  useEffect(() => {
    axios.get(`${baseApi}/home-pages`).then((res) => {
      setHomeImage(res.data.data)
    });
  }, []);

  return (
    <Carousel autoplay style={{height:"700px"}}>
      {
        homeImage.map((el,i)=><div style={contentStyle} key={i}>
        <img src={`https://sport.napaautomotive.uz/storage/${el.photo}`} alt="logo" width={"100%"} />
      </div>)
      }
    </Carousel>
  );
}
