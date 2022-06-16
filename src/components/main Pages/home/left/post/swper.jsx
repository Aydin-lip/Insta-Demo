import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

const SwiperPost = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loopFillGroupWithBlank={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {props.data.map((p, index) => (
          <SwiperSlide key={index}>
            <img src={p} alt="post" width="100%" height="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperPost;
