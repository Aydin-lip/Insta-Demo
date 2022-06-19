import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { SETfollowing } from "../../../useStateManager/actions/actions";

const User = (props) => {
  const [Follow, setFollow] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [LoadingFollow, setLoadingFollow] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const setFollowFunc = () => {
    setLoadingFollow(true);
    setTimeout(() => {
      setLoadingFollow(false);
      setFollow(true);
      let fg = props.Following.filter((f) => f !== props.data.id);
      props.setFollowing([...fg, props.data.id]);
    }, 2000);
  };
  const UnFollowFunc = () => {
    setLoadingFollow(true);
    setTimeout(() => {
      setLoadingFollow(false);
      setFollow(false);
      let fg = props.Following.filter((f) => f !== props.data.id);
      props.setFollowing(fg);
    }, 2000);
  };

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
          <NavLink
            to={`/${props.data.login.username}`}
            className="text-decoration-none text-dark"
          >
            <img
              src={props.data.relationship.avatar}
              width="32px"
              height="32px"
              className="rounded-circle"
              alt="profile"
            />
          </NavLink>
        </div>
        <div className="nameBio-user">
          <NavLink
            to={`/${props.data.login.username}`}
            className="text-decoration-none text-dark"
            style={{ fontWeight: "600", letterSpacing: "0.5px" }}
          >
            {props.data.login.username}
          </NavLink>
          <p className="text-muted mb-0" style={{ fontSize: ".75rem" }}>
            New to Instagram
          </p>
        </div>
        <div className="ms-auto">
          {LoadingFollow ? (
            <>
              <BeatLoader size="5px" margin="1px" />
            </>
          ) : (
            <>
              {Follow ? (
                <>
                  <span
                    className="a-blue-right text-dark cursor"
                    onClick={UnFollowFunc}
                  >
                    Following
                  </span>
                </>
              ) : (
                <span className="a-blue-right cursor" onClick={setFollowFunc}>
                  Follow
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
  Following: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  setFollowing: (data) => dispatch(SETfollowing(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
