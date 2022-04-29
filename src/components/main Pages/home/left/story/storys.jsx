import { Component } from "react";
import SwiperStory from "./swiper";

class Storys extends Component {
  render() {
    return (
      <>
        <div
          className="mt-3 py-3 bg-white border ps-3"
          style={{ borderRadius: "8px" }}
        >
          <SwiperStory />
        </div>
      </>
    );
  }
}

export default Storys;
