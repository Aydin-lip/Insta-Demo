import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

class SwiperPost extends Component {
  render() {
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
          <SwiperSlide>
            <img
              src="/imgs/post/post-1.jpg"
              alt="post"
              className="w-100 h-100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/imgs/post/post-2.jpg"
              alt="post"
              className="w-100 h-100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/imgs/post/post-3.jpg"
              alt="post"
              className="w-100 h-100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/post/post.jpg" alt="post" className="w-100 h-100" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default SwiperPost;
