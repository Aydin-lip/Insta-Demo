import { useState, useEffect } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import Comment from "./comment";
import LikeCommentShare from "./like,comment,share";
import MorOptions from "./moreOptions";
import SendComment from "./sendComment";
import SwiperPost from "./swper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { connect } from "react-redux";
import {
  changeMODALcomments,
  changeMODALmoreOption,
} from "../../../../useStateManager/actions/actions";

const Comments = (props) => {
  const [Show, setShow] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [MeComment, setMeComment] = useState([]);

  useEffect(() => {
    if (props.MeComments.length >= 1) {
      props.MeComments.filter((c) => {
        if (props.data.id === c.id) {
          setMeComment([c]);
          // if (MeComment.length >= 1) {
          //   MeComment.map((c) => {
          //     console.log(c);
          //   });
          // }
        }
      });
    }
  }, []);

  let User = props.UsersAPI.filter(
    (u) => u.login.username === props.data.username
  );
  let comments = props.CommentsAPI.filter((c) => c.id === props.data.id)[0];
  let commentsUser = [];
  if (comments.comments.length > 1) {
    comments.comments.map((c) => {
      props.UsersAPI.filter((u) => {
        if (c.username === u.login.username) {
          commentsUser = [...commentsUser, u];
        }
      });
    });
  }

  if (Show) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <div
        className="position-absolute top-0 end-0 bottom-0 start-0"
        onClick={() => {
          setShow(true);
        }}
      ></div>

      <Modal
        fullscreen
        show={Show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center position-relative"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div className="d-md-flex box-modal-comments position-fixed">
              <div className="d-flex w-100 overflow-hidden bg-white">
                {Loading ? (
                  <Skeleton width="600px" height="700px" />
                ) : (
                  <SwiperPost data={props.data.postsUrl} />
                )}
              </div>

              <div
                className="bg-white w-100 rounded-end border-bottom position-relative"
                style={{ height: "90vh" }}
              >
                <div
                  className="d-flex aligm-items-center border-bottom rounded-3"
                  style={{ padding: ".8rem" }}
                >
                  <a href="#">
                    {Loading ? (
                      <Skeleton width="32px" height="32px" circle="true" />
                    ) : (
                      <img
                        src={User[0].relationship.avatar}
                        width="32px"
                        alt="profilr"
                        className="rounded-circle"
                      />
                    )}
                  </a>
                  <span className="cursor ps-2 pt-1 fw-09500">
                    {Loading ? (
                      <>
                        <Skeleton width="150px" height="10px" />
                        <Skeleton width="100px" height="10px" />
                      </>
                    ) : (
                      <span>{props.data.username}</span>
                    )}
                  </span>
                  <div
                    className="options-more ms-auto cursor options-more"
                    onClick={() => {
                      props.changeMoreOption([true, true, true]);
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
                {!Loading ? (
                  <div
                    className="overflow-auto position-absolute start-0 end-0"
                    style={{ top: "3.7rem", bottom: "8.5rem" }}
                  >
                    <div className="d-flex pb-0" style={{ padding: ".8rem" }}>
                      <div className="cursor">
                        <img
                          src={User[0].relationship.avatar}
                          width="32px"
                          alt="profilr"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="p-2 py-0 my-0">
                        <p className="mb-0" style={{ fontSize: ".9rem" }}>
                          <span className="pe-2 fw-09500 comment-tag">
                            <span>{props.data.username}</span>
                          </span>
                          {Loading ? (
                            <Skeleton width="300px" height="30px" />
                          ) : (
                            <>{props.data.infor.bio}</>
                          )}
                        </p>
                        <div
                          className="py-2"
                          style={{ color: "#8e8e8e", fontSize: ".65rem" }}
                        >
                          <span>
                            {Math.floor(Math.random() * 60)} MINUTES AGO
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      {comments.comments.map((c, index) => (
                        <Comment
                          key={index}
                          data={{
                            user: commentsUser.filter(
                              (u) => u.login.username === c.username
                            )[0],
                            message: c.comment,
                            like: c.like,
                          }}
                        />
                      ))}
                      {MeComment
                        ? MeComment.map((c, index) => (
                            <Comment
                              key={index}
                              data={{
                                user: {
                                  relationship: {
                                    avatar: props.Account.avatar,
                                  },
                                  login: { username: props.Account.username },
                                },
                                message: c.message,
                                like: false,
                              }}
                            />
                          ))
                        : null}
                    </div>
                  </div>
                ) : null}
                <div className="position-absolute bottom-0 start-0 end-0">
                  {Loading ? (
                    <div className="ms-3 mb-4">
                      <Skeleton width="180px" height="20px" />
                      <div className="my-2">
                        <Skeleton width="250px" height="20px" />
                      </div>
                      <Skeleton width="140px" height="20px" />
                    </div>
                  ) : (
                    <>
                      <LikeCommentShare data={props.data} />
                      <SendComment data={props.data.id} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  Modal: state.Modal.Comment,
  UsersAPI: state.Users.Users,
  PostsAPI: state.Posts.Posts,
  CommentsAPI: state.Comments.Comments,
  MeComments: state.PostsInfor.Comments,
  Account: state.Information.Account,
});
const mapDispatchToProps = (dispatch) => ({
  changeModal: (data) => dispatch(changeMODALcomments(data)),
  changeMoreOption: (data) => dispatch(changeMODALmoreOption(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
