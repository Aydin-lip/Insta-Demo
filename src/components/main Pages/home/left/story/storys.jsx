import { useState, useEffect } from "react";
import { PulseLoader, RingLoader } from "react-spinners";
import SwiperStory from "./swiper";

const Storys = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return Loading ? (
    <>
      <div className="d-flex justify-content-center align-items-center pt-2 pb-4">
        <RingLoader size="30px" />
      </div>
    </>
  ) : (
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
};

export default Storys;
