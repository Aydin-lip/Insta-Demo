import { Component } from "react";
import { PulseLoader } from "react-spinners";
import SwiperStory from "./swiper";

class Storys extends Component {
  render() {
    return (
      <>
        <div
          className="mt-3 py-3 bg-white border ps-3 position-relative storys-box"
          style={{ borderRadius: "8px" }}
        >
          <div className="position-absolute top-0 end-0 bottom-0 start-0 cursor justify-content-center align-items-end loading-story-div">
            <PulseLoader size="8px" />
          </div>
          <SwiperStory />
        </div>
      </>
    );
  }
}

export default Storys;
