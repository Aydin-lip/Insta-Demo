import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Comments from "../../home/left/post/comments";
import MoreOptions from "../../home/left/post/moreOptions";
import ShareModal from "../../home/left/post/shareModal";

const PostProfile = (props) => {
  const [CommentNumber, setCommentNumber] = useState();

  useEffect(() => {
    props.CommentsAPI.filter((c) => {
      if (props.data.id === c.id) {
        setCommentNumber(c.comments.length);
      }
    });
  }, []);

  return (
    <>
      <div className="w-100 h-100 position-relative">
        <div className="img-post-hover cursor">
          <Comments data={props.data} />
          <img
            src={props.data.postsUrl[0]}
            width="100%"
            height="100%"
            alt="post photo"
          />
          {props.data.postsUrl.length > 1 ? (
            <span
              className="position-absolute"
              style={{ top: ".3rem", right: ".4rem" }}
            >
              <svg
                color="#ffffff"
                fill="#ffffff"
                height="22"
                role="img"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
              </svg>
            </span>
          ) : null}
          <div
            className="position-absolute top-0 end-0 bottom-0 start-0 justify-content-center align-items-center d-none show-likeANDcomment"
            style={{ background: "#00000030" }}
          >
            <div className="text-white me-3">
              <i className="fa fa-heart" style={{ fontSize: "1.2rem" }}></i>
              <span className="mx-2 fw-500">{props.data.infor.likes}</span>
            </div>
            <div className="text-white">
              <i className="fa fa-comments" style={{ fontSize: "1.2rem" }}></i>
              <span className="mx-2 fw-500">{CommentNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <ShareModal />
      <MoreOptions />
    </>
  );
};

const mapStateToProps = (state) => ({
  CommentsAPI: state.Comments.Comments,
});

export default connect(mapStateToProps)(PostProfile);
