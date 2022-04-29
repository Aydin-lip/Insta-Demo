import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

import Story from "./story";

class SwiperStory extends Component {
  render() {
    return (
      <>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          slidesPerGroup={4}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
          <SwiperSlide>
            <Story />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default SwiperStory;
