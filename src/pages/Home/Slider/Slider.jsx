import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Slider = () => {
  const slides = [
    {
      musicName: "Drums",
      imageSrc: "https://i.ibb.co/CWRz0jg/little.jpg",
      quote: "Discover the rhythm of drums",
    },
    {
      musicName: "Guitar",
      imageSrc: "https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg",
      quote: "Express your creativity through guitar",
    },
    {
      musicName: "Piano",
      imageSrc: "https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg",
      quote: "Unlock the magic of piano melodies",
    },
    {
      musicName: "Banjo",
      imageSrc: "https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg",
      quote: "Explore the soulful sounds of the banjo",
    },
    {
      musicName: "Drum",
      imageSrc: "https://i.ibb.co/NScYCfF/lasse-bergqvist-TYj7ey6xn9-M-unsplash.jpg",
      quote: "Feel the groove with drum beats",
    },
  ];
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">Music Learning Quotes</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={slide.imageSrc} alt="" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                <h2 className="text-xl text-white font-extrabold text-center mb-3"> {slide.musicName}</h2>
                <p className="text-white text-2xl font-bold">
                 {slide.quote}
                </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
