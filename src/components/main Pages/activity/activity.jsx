import Follow from "./follow";
import LikePost from "./likePost";
import { FadeLoader, RingLoader } from "react-spinners";
import { useState, useEffect } from "react";

import { connect } from "react-redux";
import { changeACTIVITY } from "../../useStateManager/actions/actions";

const Activity = (props) => {
  const [loading, setLoading] = useState(true);

  let users = props.UsersAPI.filter((u) => u.follow.followers === true);

  let Userss = [];
  users.map((u) => {
    Userss = [...Userss, users[Math.floor(Math.random() * users.length)]];
  });
  Userss = Array.from(new Set(Userss));

  return props.Activity ? (
    <>
      <div
        className="position-absolute overflow-auto bg-white rounded-3 border box-activity boxShadow"
        style={{ zIndex: "3" }}
      >
        {loading ? (
          <>
            {setingLoading()}
            <div
              className="d-flex justify-content-center align-items-center "
              style={{ height: "100px" }}
            >
              <RingLoader size="30px" />
            </div>
          </>
        ) : (
          <>
            <div className="w-100 h-100">
              <div className="p-2 border-bottom">
                <span className="fs-09 fw-500 ps-1">Yesterday</span>
                <LikePost data={Userss[5]} />
              </div>
              <div className="p-2 border-bottom">
                <span className="fs-09 fw-500 ps-1">This Week</span>
                {Userss.map((u, index) => (
                  <Follow key={index} data={u} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  ) : null;
  function setingLoading() {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
};

const mapStateToProps = (state) => ({
  Activity: state.Modal.Activity,
  UsersAPI: state.Users.Users,
});
const mapDispatchToProps = (dispatch) => ({
  changeActivity: (data) => dispatch(changeACTIVITY(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
