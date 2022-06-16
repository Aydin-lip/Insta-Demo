import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SetState from "../../../../setState";
import Comments from "../../../home/left/post/comments";

const PostSavedAllPosts = (props) => {
  const [CommentsNumber, setCommentsNumber] = useState(0);

  useEffect(() => {
    let comment = props.CommentsAPI.filter((c) => c.id === props.data.id)[0];
    setCommentsNumber(comment.comments.length);
  }, []);

  return (
    <>
      <SetState />
      <div className="d-flex justify-content-center mb-1 me-1 mb-md-4 me-md-4">
        <div
          className="w-100"
          style={{ maxWidth: "310px", maxHeight: "310px" }}
        >
          <div className="explorPost position-relative cursor">
            <div
              className="position-absolute top-0 end-0 bottom-0 start-0 justify-content-center align-items-center explorPostLikeComment"
              style={{ zIndex: "2" }}
            >
              <div className="text-white me-3">
                <i className="fa fa-heart" style={{ fontSize: "1.2rem" }}></i>
                <span className="mx-2 fw-500">{props.data.infor.likes}</span>
              </div>
              <div className="text-white">
                <i
                  className="fa fa-comments"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <span className="mx-2 fw-500">{CommentsNumber}</span>
              </div>
            </div>
            <div className="p-2 position-absolute top-0 end-0">
              <svg
                color="#ffffff"
                fill="#ffffff"
                height="28"
                role="img"
                viewBox="0 0 48 48"
                width="28"
              >
                <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
              </svg>
            </div>
            <Comments data={props.data} />
            <img
              className="w-100 h-100"
              src={props.data.postsUrl[0]}
              alt="post"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  CommentsAPI: state.Comments.Comments,
});

export default connect(mapStateToProps)(PostSavedAllPosts);
