import { NavLink } from "react-bootstrap";
import { connect } from "react-redux";
import { changeACTIVITY } from "../../useStateManager/actions/actions";

const LikePost = (props) => {
  return (
    <>
      <div className="d-flex p-2 cursor">
        <NavLink
          to={`/${props.data.login.username}`}
          className="text-decoration-none text-black d-flex p-0"
          onClick={() => {
            props.changeActivity(false);
          }}
        >
          <img
            src={props.data.relationship.avatar}
            width="44"
            height="44"
            alt="profile"
            className="rounded-circle"
          />
          <div className="d-flex align-items-center ms-2">
            <span className="fw-500 fs-09">{props.data.login.username}</span>
            <p className="ms-1 m-0 fs-09">like your post.</p>
            <span className="text-muted fs-09 ms-2">7h</span>
          </div>
        </NavLink>
        <img
          src={props.Posts[0].postsUrl[0]}
          width="35"
          height="35"
          alt="post"
          className="ms-auto"
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  Posts: state.Information.Posts,
});
const mapDispatchToProps = (dispatch) => ({
  changeActivity: (data) => dispatch(changeACTIVITY(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikePost);
