import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";

const Residencies = () => {
  return (
    <section className="r-wrapper" id="residencies">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices </span>
          <span className="primaryText">Popular Residencies </span>
        </div>
        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
          <SliderButtons />
          {/* <SliderButtons /> */}
          {data?.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexEnd r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
