import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  SETfollowers,
  SETfollowing,
} from "../../../../useStateManager/actions/actions";

const UserFollowers = (props) => {
  const [Followers, setFollowers] = useState(false);
  const [Following, setFollowing] = useState(false);

  useEffect(() => {
    props.FollowersState.filter((fs) => {
      if (fs === props.data.id) {
        setFollowers(true);
      }
    });
    props.FollowingState.filter((fg) => {
      if (fg === props.data.id) {
        setFollowing(true);
      }
    });
  }, []);

  const setFollowingFunc = () => {
    setFollowing(true);
    let fg = props.FollowingState.filter((f) => f !== props.data.id);
    props.changeFollowing([...fg, props.data.id]);
  };
  const UnFollowersFunc = () => {
    setFollowers(false);
    let fs = props.FollowersState.filter((f) => f !== props.data.id);
    props.changeFollowers(fs);
  };

  return (
    <>
      <div className="d-flex px-3 py-2">
        <div className="pt-1">
          <img
            src={props.data.relationship.avatar}
            width="30"
            height="30"
            alt="profile"
            className="rounded-circle cursor"
          />
        </div>
        <div className="ms-2 ps-1 d-flex flex-column">
          <div className="">
            <span className="fw-500 fs-09 cursor">
              {props.data.login.username}
            </span>
            {!Following ? (
              <span
                className="fs-08 text-primary fw-500 cursor"
                onClick={setFollowingFunc}
              >
                . Follow
              </span>
            ) : null}
          </div>
          <span className="text-muted fs-08" style={{ marginTop: "-3px" }}>
            {props.data.name.first}
          </span>
        </div>
        <div className="ms-auto">
          {Followers ? (
            <button
              className="btn btn-outline-dark py-1 px-2 border fs-09 fw-500"
              onClick={UnFollowersFunc}
            >
              Remove
            </button>
          ) : (
            <>
              <button
                className="btn btn-outline-dark py-1 px-2 border fs-09 fw-500"
                disabled
              >
                Removed
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

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowers);
