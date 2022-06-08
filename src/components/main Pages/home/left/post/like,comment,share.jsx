import { useEffect, useState } from "react";
import Comments from "./comments";

import { connect } from "react-redux";
import {
  changeMODALshare,
  changeMODALcomments,
} from "../../../../useStateManager/actions/actions";
import {
  POSTSLIKE,
  POSTSSAVED,
} from "../../../../useStateManager/actions/actions";

const LikeCommentShare = (props) => {
  const [LikeState, setLikeState] = useState(false);
  const [SaveState, setSaveState] = useState(false);

  useEffect(() => {
    let like = props.Likes.filter((n) => n === props.data.id);
    let save = props.Saved.filter((n) => n === props.data.id);
    // console.log(props.data.id, props.data.infor.like);
    if (like.length >= 1) {
      setLikeState(true);
    }
    if (save.length >= 1) {
      setSaveState(true);
    }
  }, []);

  return (
    <>
      <div className="p-2 m-1 d-flex border-top mt-0">
        <div className="cursor me-2" onClick={Like}>
          {LikeState ? (
            <span className="likeIcon likeAnimation">
              <svg
                color="#ed4956"
                fill="#ed4956"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </span>
          ) : (
            <svg
              aria-label="Like"
              color="#262626"
              className=" iconB-post"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
          )}
        </div>
        <div className="cursor view-comments iconB-post mx-2 position-relative">
          <span>
            <svg
              aria-label="Comment"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </span>
          <Comments data={props.data} />
        </div>
        <div
          className="cursor share-post iconB-post mx-2"
          onClick={() => {
            props.ChangeModalShare(true);
          }}
        >
          <span>
            <svg
              aria-label="Share Post"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          </span>
        </div>
        <div className="cursor ms-auto" onClick={Save}>
          {SaveState ? (
            <svg
              aria-label="Remove"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
            </svg>
          ) : (
            <svg
              aria-label="Save"
              className="iconB-post"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          )}
        </div>
      </div>
      <div className="p-2 m-1 py-0">
        <span className="fw-500 fs-09" style={{ cursor: "default" }}>
          <span className="likes me-1">
            {LikeState ? props.data.infor.likes + 1 : props.data.infor.likes}
          </span>
          likes
        </span>
      </div>
    </>
  );
  function Like() {
    let num = props.Likes.find((n) => n === props.data.id) ? true : false;
    if (num) {
      setLikeState(false);
      let sum = props.Likes.filter((Li) => Li !== props.data.id);
      props.ChangeLikes(sum);
    } else {
      setLikeState(true);
      let sum = props.Likes;
      sum.push(props.data.id);
      props.ChangeLikes(sum);
    }
  }

  function Save() {
    let num = props.Saved.find((n) => n === props.data.id) ? true : false;
    if (num) {
      setSaveState(false);
      let sum = props.Saved.filter((Li) => Li !== props.data.id);
      props.ChangeSaved(sum);
    } else {
      setSaveState(true);
      let sum = props.Saved;
      sum.push(props.data.id);
      props.ChangeSaved(sum);
    }
  }
};

const mapStateToProps = (state) => ({
  Likes: state.PostsInfor.Likes,
  Saved: state.PostsInfor.Saved,
  PostsAPI: state.Posts.Posts,
  UsersAPI: state.Users.Users,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeLikes: (data) => dispatch(POSTSLIKE(data)),
  ChangeSaved: (data) => dispatch(POSTSSAVED(data)),
  ChangeModalShare: (data) => dispatch(changeMODALshare(data)),
  ChangeModalComment: (data) => dispatch(changeMODALcomments(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeCommentShare);
