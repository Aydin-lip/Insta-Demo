import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

import Story from "./story";
import Live from "./live";

class SwiperStory extends Component {
  render() {
    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={4}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 5,
            },
            400: {
              slidesPerView: 6,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Live />
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
          <SwiperSlide>
            <Story />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default SwiperStory;
