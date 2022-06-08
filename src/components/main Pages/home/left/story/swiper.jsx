import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

import Story from "./story";
import Live from "./live";

import { connect } from "react-redux";
import { ERRORPOSTS } from "../../../../useStateManager/actions/actions";

const SwiperStory = (props) => {
  let Users = [];

  try {
    props.UsersAPI.map((item) => {
      Array(props.UsersAPI.length)
        .fill({})
        .map((num) => {
          let sum = Math.floor(Math.random() * props.UsersAPI.length);
          if (item.id === sum) {
            Users = [...Users, item];
          }
        });
    });
  } catch (error) {
    props.Error(true);
  }

  Users = Array.from(new Set(Users));
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
          <Live
            data={{
              Profile: Users[5].relationship.avatar,
              Username: Users[5].login.username,
            }}
          />
        </SwiperSlide>
        {Users.map((item, index) => (
          <SwiperSlide key={index}>
            <Story
              data={{
                Profile: item.relationship.avatar,
                Username: item.login.username,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
});
const mapDispatchToProps = (dispatch) => ({
  Error: (data) => dispatch(ERRORPOSTS(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwiperStory);
