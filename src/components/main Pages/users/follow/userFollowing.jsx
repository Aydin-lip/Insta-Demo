import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  SETfollowers,
  SETfollowing,
} from "../../../useStateManager/actions/actions";

const UserFollowing = (props) => {
  const [Following, setFollowing] = useState(false);

  useEffect(() => {
    props.FollowingState.filter((fg) => {
      if (fg === props.data.id) {
        setFollowing(true);
      }
    });
  }, []);

  const FollowingFunc = () => {
    setFollowing(true);
    let fg = props.FollowingState.filter((f) => f !== props.data.id);
    props.changeFollowing([...fg, props.data.id]);
  };
  const UnFollowingFunc = () => {
    setFollowing(false);
    let fs = props.FollowingState.filter((f) => f !== props.data.id);
    props.changeFollowing(fs);
  };

  return (
    <>
      <div className="d-flex px-3 py-2">
        <div className="pt-1">
          <NavLink
            to={`/${props.data.login.username}`}
            className="text-decoration-none text-black"
          >
            <img
              src={props.data.relationship.avatar}
              width="30"
              height="30"
              alt="profile"
              className="rounded-circle cursor"
            />
          </NavLink>
        </div>
        <div className="ms-2 ps-1 d-flex flex-column">
          <div>
            <span className="fw-500 fs-09 cursor">
              <NavLink
                to={`/${props.data.login.username}`}
                className="text-decoration-none text-black"
              >
                {props.data.login.username}
              </NavLink>
            </span>
          </div>
          <span className="text-muted fs-08" style={{ marginTop: "-3px" }}>
            {props.data.name.first}
          </span>
        </div>
        <div className="ms-auto">
          {Following ? (
            <button
              className="btn btn-outline-dark py-1 px-2 border fs-09 fw-500"
              onClick={UnFollowingFunc}
            >
              Following
            </button>
          ) : (
            <>
              <button
                className="btn btn-primary py-1 px-2 border fs-09 fw-500"
                onClick={FollowingFunc}
              >
                Follow
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  FollowersState: state.PostsInfor.Followers,
  FollowingState: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  changeFollowers: (data) => dispatch(SETfollowers(data)),
  changeFollowing: (data) => dispatch(SETfollowing(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowing);
