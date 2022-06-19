import LikeCommentShare from "./like,comment,share";
import SendComment from "./sendComment";
import SwiperPost from "./swper";

import { connect } from "react-redux";
import { changeMODALmoreOption } from "../../../../useStateManager/actions/actions";
import Comments from "./comments";
import { NavLink } from "react-router-dom";

const BoxPost = (props) => {
  let Users = props.UsersAPI.filter(
    (u) => props.data.username === u.login.username
  );
  let Comment = props.CommentsAPI.filter((c) => c.id === props.data.id)[0];

  return (
    <>
      <div className="mt-3 border bg-white" style={{ borderRadius: "8px" }}>
        <div
          className="d-flex aligm-items-center border-bottom rounded-3"
          style={{ padding: ".8rem" }}
        >
          <NavLink
            to={`/${Users[0].login.username}`}
            className="text-decoration-none text-dark p-0"
          >
            <img
              src={Users[0].relationship.avatar}
              width="32px"
              alt="profilr"
              className="rounded-circle"
            />
          </NavLink>
          <NavLink
            to={`/${Users[0].login.username}`}
            className="text-decoration-none text-dark ps-t pt-1 fw-09500 p-0 ps-2"
          >
            <span>{Users[0].login.username}</span>
          </NavLink>
          <div
            className="options-more ms-auto cursor"
            onClick={() => {
              props.changeMoreOption([true, true, false]);
            }}
          >
            <svg
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
        <div>
          <SwiperPost data={props.data.postsUrl} />
        </div>
        <div>
          <LikeCommentShare data={props.data} />
          <div className="p-2 m-1 py-0 my-0">
            <p className="mb-0" style={{ fontSize: ".9rem" }}>
              <NavLink
                to={`/${Users[0].login.username}`}
                className="text-decoration-none text-dark d-inline-block p-0 pe-1 fw-09500 comment-tag"
              >
                {Users[0].login.username}
              </NavLink>
              {props.data.infor.bio}
            </p>
          </div>
          <div className="p-2 m-1 my-0" style={{ fontSize: ".9rem" }}>
            <span
              className="text-decoration-none cursor view-comments position-relative"
              style={{ color: "#8e8e8e" }}
            >
              {Comment.comments.length > 1 ? (
                <> View All {Comment.comments.length} comments</>
              ) : (
                <> View {Comment.comments.length} comment</>
              )}
              <Comments data={props.data} />
            </span>
          </div>
          <div
            className="p-2 m-1 py-0 my-0"
            style={{ color: "#8e8e8e", fontSize: ".65rem" }}
          >
            <span>{Math.floor(Math.random() * 60)} MINUTES AGO</span>
          </div>
          <SendComment data={props.data.id} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  MoreOption: state.Modal.MoreOption,
  UsersAPI: state.Users.Users,
  CommentsAPI: state.Comments.Comments,
});
const mapDispatchToProps = (dispatch) => ({
  changeMoreOption: (data) => dispatch(changeMODALmoreOption(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxPost);
