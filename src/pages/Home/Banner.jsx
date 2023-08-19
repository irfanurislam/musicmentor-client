import React from "react";

const Banner = () => {
  return (
    <div className="mt-6">
      <div className="carousel w-full h-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/DYZvZGm/mandarin.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12 w-1/2 sm:w-full md:w-3/4 lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable for price{" "}
                <span className="text-pink-600">Violin</span> Learn
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                The violin is the voice of the soul, the drum is the heartbeat
                of the world...
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5 hover:bg-">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/rb0xnV4/gabriel-gurrola-2-Uuh-MZEChdc-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12 w-1/2 sm:w-full md:w-3/4 lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable for price{" "}
                <span className="text-pink-600">Violin</span> Learn
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                The violin is the voice of the soul, the drum is the heartbeat
                of the world...
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/F7pPjRr/jonathan-chng-QKIc-W-4-Qlqw-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12 w-1/2 sm:w-full md:w-3/4 lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable for price{" "}
                <span className="text-pink-600">Violin</span> Learn
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                The violin is the voice of the soul, the drum is the heartbeat
                of the world...
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/WxWHTVp/hannah-busing-Vl-VAlw-AH2-E-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center justify-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12 w-1/2 sm:w-full md:w-1/2 lg:w-1/2 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable for price{" "}
                <span className="text-pink-600">Violin</span> Learn
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                The violin is the voice of the soul, the drum is the heartbeat
                of the world...
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
