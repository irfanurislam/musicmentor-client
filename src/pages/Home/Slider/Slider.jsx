import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Slider = () => {
  const slides = [
    {
      musicName: "Violin",
      imageSrc: "https://i.ibb.co/DYZvZGm/mandarin.jpg",
      quote: "Discover the rhythm of drums",
    },
    {
      musicName: "Guitar",
      imageSrc: "https://i.ibb.co/rb0xnV4/gabriel-gurrola-2-Uuh-MZEChdc-unsplash.jpg",
      quote: "Express your creativity through guitar",
    },
    {
      musicName: "Piano",
      imageSrc: "https://i.ibb.co/F7pPjRr/jonathan-chng-QKIc-W-4-Qlqw-unsplash.jpg",
      quote: "Unlock the magic of piano melodies",
    },
    {
      musicName: "Banjo",
      imageSrc: "https://i.ibb.co/WxWHTVp/hannah-busing-Vl-VAlw-AH2-E-unsplash.jpg",
      quote: "Explore the soulful sounds of the banjo",
    },
    {
      musicName: "Drum Lesson",
      imageSrc: "https://i.ibb.co/4fQ4nDT/drum.jpg",
      quote: "Feel the groove with drum beats",
    },
  ];
  return (
    <div className="">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper min-h-screen">
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative opacity-90">
          <img src={slide.imageSrc} alt="" className="w-full object-fit" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex justify-center items-center">
            <div className="max-w-xl mt-auto">
              <h2 className="text-2xl md:text-6xl lg:text-7xl text-pink-700 md:font-extrabold text-center mb-3">
                {slide.musicName}
              </h2>
              <p className="text-lg md:text-2xl lg:text-3xl text-pink-700 font-bold ">
                {slide.quote}
              </p>
            </div>
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
