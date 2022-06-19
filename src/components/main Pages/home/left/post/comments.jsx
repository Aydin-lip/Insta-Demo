import { useState, useEffect, useRef } from "react";
import { CloseButton, Modal, OverlayTrigger, Popover } from "react-bootstrap";
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
  SAVEcomments,
} from "../../../../useStateManager/actions/actions";
import { ClipLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

const Comments = (props) => {
  const [Show, setShow] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [MeComment, setMeComment] = useState([]);

  /////////////////send Comment///////////////////
  const [Disabled, setDisabled] = useState(true);
  const Input = useRef();

  const changeInputComment = (event) => {
    if (event.target.value.length >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    if (!Disabled) {
      if (event.nativeEvent.key === "Enter") {
        SaveCommentFunc();
      }
    }
  };

  const SaveCommentFunc = () => {
    props.SaveComment([]);
    let newCom = {
      id: props.data.id,
      comment: Input.current.value,
      like: false,
    };
    props.SaveComment([...props.MeComments, newCom]);
    setDisabled(true);
    setMeComment([...MeComment, newCom]);
    Input.current.value = "";
  };
  ////////////////////////////////////

  const setMeComm = () => {
    props.CommentsAPI.filter((cs) => {
      if (cs.id === props.data.id && props.MeComments.length >= 1) {
        props.MeComments.filter((cm) => {
          if (cm.id === cs.id) {
            cs.comments.filter((c) => {
              if (c.username === props.Account.username) {
                setMeComment([c]);
              }
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    setMeComm();
  }, []);

  let User = props.UsersAPI.filter(
    (u) => u.login.username === props.data.username
  );
  let comments = props.CommentsAPI.filter((c) => c.id === props.data.id)[0];
  let commentsUser = [];
  comments = {
    ...comments,
    comments: comments.comments.filter(
      (c) => c.username !== props.Account.username
    ),
  };
  if (comments.comments.length >= 1) {
    comments.comments.map((c) => {
      props.UsersAPI.filter((u) => {
        if (c.username === u.login.username) {
          console.log();
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
        style={{ zIndex: "3" }}
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
                  <div>
                    {Loading ? (
                      <Skeleton width="32px" height="32px" circle="true" />
                    ) : (
                      <NavLink
                        to={`/${User[0].login.username}`}
                        className="text-decoration-none text-dark"
                      >
                        <img
                          src={User[0].relationship.avatar}
                          width="32px"
                          alt="profilr"
                          className="rounded-circle"
                        />
                      </NavLink>
                    )}
                  </div>
                  <span className="cursor ps-2 pt-1 fw-09500">
                    {Loading ? (
                      <>
                        <Skeleton width="150px" height="10px" />
                        <Skeleton width="100px" height="10px" />
                      </>
                    ) : (
                      <NavLink
                        to={`/${User[0].login.username}`}
                        className="text-decoration-none text-dark"
                      >
                        <span>{props.data.username}</span>
                      </NavLink>
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
                        <NavLink
                          to={`/${User[0].login.username}`}
                          className="text-decoration-none text-dark"
                        >
                          <img
                            src={User[0].relationship.avatar}
                            width="32px"
                            alt="profilr"
                            className="rounded-circle"
                          />
                        </NavLink>
                      </div>
                      <div className="p-2 py-0 my-0">
                        <p className="mb-0" style={{ fontSize: ".9rem" }}>
                          <span className="pe-2 fw-09500 comment-tag">
                            <NavLink
                              to={`/${User[0].login.username}`}
                              className="text-decoration-none text-dark"
                            >
                              <span>{props.data.username}</span>
                            </NavLink>
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
                          <span>1H 9Min AGO</span>
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
                                message: c.comment,
                                like: false,
                                time: "now",
                                likes: 0,
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
                      <>
                        <div
                          className="border-top m-1 d-flex mt-3"
                          style={{ maxHeight: "90px" }}
                        >
                          <OverlayTrigger
                            trigger="click"
                            placement="top"
                            overlay={
                              <Popover>
                                <Popover.Body>
                                  <ClipLoader size={30} />
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <button className="border-0 bg-white">
                              <div className="p-2 cursor">
                                <svg
                                  aria-label="Emoji"
                                  color="#262626"
                                  fill="#262626"
                                  height="24"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  width="24"
                                >
                                  <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                                </svg>
                              </div>
                            </button>
                          </OverlayTrigger>

                          <input
                            type="text"
                            className="mb-0 border-0 bg-white w-100 input-noPlace"
                            placeholder="Add a comment..."
                            ref={Input}
                            onKeyUp={changeInputComment}
                          />
                          <button
                            className="btn text-primary ms-auto border-0 bg-white mt-1 fw-09500 input-send-comment"
                            disabled={Disabled}
                            onClick={SaveCommentFunc}
                          >
                            Post
                          </button>
                        </div>
                      </>
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
  SaveComment: (data) => dispatch(SAVEcomments(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
