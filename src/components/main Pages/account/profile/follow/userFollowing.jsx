import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SETfollowing } from "../../../../useStateManager/actions/actions";

const UserFollowing = (props) => {
  const [Following, setFollowing] = useState(false);

  useEffect(() => {
    props.FollowingState.filter((fg) => {
      if (fg === props.data.id) {
        setFollowing(true);
      }
    });
  }, []);

  const UnFollowingFunc = () => {
    setFollowing(false);
    let fg = props.FollowingState.filter((f) => f !== props.data.id);
    props.changeFollowing(fg);
  };
  const SetFollowingFunc = () => {
    setFollowing(true);
    let fg = props.FollowingState.filter((f) => f !== props.data.id);
    props.changeFollowing([...fg, props.data.id]);
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
          <span className="fw-500 fs-09 cursor">
            {props.data.login.username}{" "}
          </span>
          <span className="text-muted fs-08" style={{ marginTop: "-3px" }}>
            {props.data.name.first}
          </span>
        </div>
        <div className="ms-auto">
          {Following ? (
            <button
              className="btn btn-outline-dark py-1 px-2 border fs-09 fw-500 btn-follow"
              onClick={UnFollowingFunc}
            >
              Following
            </button>
          ) : (
            <>
              <button
                className="btn btn-primary py-1 px-2 border fs-09 fw-500 btn-follow"
                onClick={SetFollowingFunc}
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
  FollowingState: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  changeFollowing: (data) => dispatch(SETfollowing(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowing);
