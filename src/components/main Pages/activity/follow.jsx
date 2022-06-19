import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changeACTIVITY,
  SETfollowing,
} from "../../useStateManager/actions/actions";

const Follow = (props) => {
  const [Following, setFollowing] = useState(props.data.follow.following);

  const FollowFunc = () => {
    props.setFollowing([...props.Following, props.data.id]);
    setFollowing(true);
  };
  const UnFollowFunc = () => {
    let Following = props.Following.filter((n) => n !== props.data.id);
    props.setFollowing(Following);
    setFollowing(false);
  };

  return (
    <>
      <div className="d-flex p-2">
        <NavLink
          to={`/${props.data.login.username}`}
          className="text-decoration-none text-black d-flex"
        >
          <img
            src={props.data.relationship.avatar}
            width="44"
            height="44"
            alt="profile"
            className="rounded-circle cursor"
            onClick={() => {
              props.changeActivity(false);
            }}
          />
        </NavLink>
        <NavLink
          to={`/${props.data.login.username}`}
          className="text-decoration-none text-black d-flex"
        >
          <div
            className="d-flex align-items-center ms-2"
            onClick={() => {
              props.changeActivity(false);
            }}
          >
            <span className="fw-500 fs-09 cursor">
              {props.data.login.username}
            </span>
            <p className="ms-1 m-0 fs-09">started following you.</p>
            <span className="text-muted fs-09 ms-2">3d</span>
          </div>
        </NavLink>

        <div className="ms-auto d-flex align-items-center">
          {Following ? (
            <button
              className="btn btn-outline-dark fs-09 fw-500 py-1 px-2 border btn-follow"
              onClick={UnFollowFunc}
            >
              Following
            </button>
          ) : (
            <button
              className="btn btn-primary fs-09 fw-500 py-1 px-2 btn-follow"
              onClick={FollowFunc}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  Following: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  setFollowing: (data) => dispatch(SETfollowing(data)),
  changeActivity: (data) => dispatch(changeACTIVITY(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
