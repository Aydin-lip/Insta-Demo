import Follow from "./follow";
import LikePost from "./likePost";
import { FadeLoader, RingLoader } from "react-spinners";
import { useState, useEffect } from "react";

import { connect } from "react-redux";
import { changeACTIVITY } from "../../useStateManager/actions/actions";

const Activity = (props) => {
  const [loading, setLoading] = useState(true);
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
                <LikePost
                  data={{
                    Profile: "/imgs/profile/profileM.jpg",
                    Name: "mahdi-ven12",
                    Time: "23h",
                    Post: "/imgs/post/post-1.jpg",
                  }}
                />
              </div>
              <div className="p-2 border-bottom">
                <span className="fs-09 fw-500 ps-1">This Week</span>
                <Follow
                  data={{
                    Profile: "/imgs/profile/leitoProfile.jpg",
                    Name: "Behzad Leito",
                    Time: "3h",
                    Follow: "follow",
                  }}
                />
                <Follow
                  data={{
                    Profile: "/imgs/profile/leitoProfile.jpg",
                    Name: "Behzad Leito",
                    Time: "23h",
                    Follow: "following",
                  }}
                />
                <Follow
                  data={{
                    Profile: "/imgs/profile/leitoProfile.jpg",
                    Name: "Behzad Leito",
                    Time: "23h",
                    Follow: "following",
                  }}
                />
                <Follow
                  data={{
                    Profile: "/imgs/profile/leitoProfile.jpg",
                    Name: "Behzad Leito",
                    Time: "23h",
                    Follow: "following",
                  }}
                />
                <Follow
                  data={{
                    Profile: "/imgs/profile/leitoProfile.jpg",
                    Name: "Behzad Leito",
                    Time: "23h",
                    Follow: "following",
                  }}
                />
                <Follow
                  data={{
                    Profile: "/imgs/profile/leitoProfile.jpg",
                    Name: "Behzad Leito",
                    Time: "23h",
                    Follow: "following",
                  }}
                />
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
});
const mapDispatchToProps = (dispatch) => ({
  changeActivity: (data) => dispatch(changeACTIVITY(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
