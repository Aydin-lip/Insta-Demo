import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const User = (props) => {
  const [Loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return Loading ? (
    <>
      <div className="d-flex mt-1">
        <Skeleton width="40px" height="40px" circle="true" />
        <div className="ms-2">
          <Skeleton width="130px" height="15px" />
          <Skeleton width="80px" height="15px" />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="d-flex align-items-center div-user">
        <div>
          <img
            src={props.data.Profile}
            width="32px"
            height="32px"
            className="rounded-circle"
            alt="profile"
          />
        </div>
        <div className="nameBio-user">
          <a
            href="#"
            className="text-decoration-none text-black"
            style={{ fontWeight: "600", letterSpacing: "0.5px" }}
          >
            {props.data.Username}
          </a>
          <p className="text-muted mb-0" style={{ fontSize: ".75rem" }}>
            New to Instagram
          </p>
        </div>
        <div className="ms-auto">
          <a href="#" className="a-blue-right">
            Follow
          </a>
        </div>
      </div>
    </>
  );
};

export default User;
