import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="my-10">

   
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://i.ibb.co/CWRz0jg/little.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
};

export default Slider;
