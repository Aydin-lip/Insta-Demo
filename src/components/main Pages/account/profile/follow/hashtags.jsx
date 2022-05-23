import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Hashtags = () => {
  return (
    <>
      {Array(3)
        .fill({})
        .map((item, index) => (
          <div key={index} className="d-flex px-3 py-2">
            <div className="">
              <Skeleton width="40px" height="40px" circle="true" />
            </div>
            <div className="ms-2 d-flex flex-column">
              <Skeleton width="150px" height="15px" />
              <Skeleton width="100px" height="10px" />
            </div>
          </div>
        ))}
    </>
  );
};

export default Hashtags;
