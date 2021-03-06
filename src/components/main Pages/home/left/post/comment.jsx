import { Component, useState } from "react";
import MorOptions from "./moreOptions";

import { connect } from "react-redux";
import {
  changeMODALmoreOption,
  SAVEcomments,
} from "../../../../useStateManager/actions/actions";
import { Modal } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

const Comment = (props) => {
  const [Like, setLike] = useState(props.data.like);
  const [ShowMore, setShowMore] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [ShowComment, setShowComment] = useState(true);

  const DeleteMeComment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      let MeComments = props.MeComments.filter(
        (c) => props.data.message !== c.comment
      );
      props.changeMeComment(MeComments);
      setShowComment(false);
    }, 2000);
  };

  return ShowComment ? (
    <>
      <div className="d-flex" style={{ padding: ".8rem" }}>
        <NavLink
          to={`/${props.data.user.login.username}`}
          className="text-decoration-none text-dark"
          style={{ height: "max-content" }}
        >
          <img
            src={props.data.user.relationship.avatar}
            width="32px"
            alt="profilr"
            className="rounded-circle"
          />
        </NavLink>
        <div className="d-flex w-100">
          <div>
            <div className="d-flex">
              <NavLink
                to={`/${props.data.user.login.username}`}
                className="text-decoration-none text-dark ps-2 fw-09500"
                style={{ height: "max-content" }}
              >
                <span>{props.data.user.login.username}</span>
              </NavLink>
              <p className="mb-2 ps-2">{props.data.message}</p>
            </div>
            <div className="text-muted ms-2">
              <span className="fs-8">
                {props.data.time ? (
                  <>{props.data.time}</>
                ) : (
                  <>{Math.floor(Math.random() * 60) + 1} min</>
                )}
              </span>
              <span className="fw-09500 fs-8 m-3">
                {props.data.time ? (
                  <>{props.data.likes} like</>
                ) : (
                  <>
                    {Like
                      ? props.data.message.length + 1
                      : props.data.message.length}
                    Like
                  </>
                )}
              </span>
              <span className="fw-09500 fs-8">Reply</span>
              {props.data.time ? (
                <span
                  className="cursor ms-3"
                  onClick={() => {
                    setShowMore(true);
                  }}
                >
                  <svg
                    color="#6c757d"
                    fill="#6c757d"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </span>
              ) : (
                <span
                  className="cursor ms-3"
                  onClick={() => {
                    props.changeMoreOption([true, false, false]);
                  }}
                >
                  <svg
                    color="#6c757d"
                    fill="#6c757d"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div className="cursor ms-auto" style={{ height: "max-content" }}>
            {Like ? (
              <span
                onClick={() => {
                  setLike(false);
                }}
              >
                <svg
                  aria-label="Unlike"
                  color="#ed4956"
                  fill="#ed4956"
                  height="12"
                  role="img"
                  viewBox="0 0 48 48"
                  width="12"
                >
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </span>
            ) : (
              <span
                onClick={() => {
                  setLike(true);
                }}
              >
                <svg
                  aria-label="Like"
                  color="#262626"
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>

      <Modal
        centered
        show={ShowMore}
        onHide={() => {
          setShowMore(false);
        }}
        style={{ background: "#00000060" }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex flex-column border bg-white p-1"
            style={{ borderRadius: "10px", maxWidth: "400px", width: "95vw" }}
          >
            <button
              className="border-0 item-morOption fw-09500 p-2 bg-white text-danger"
              onClick={DeleteMeComment}
            >
              {Loading ? (
                <>
                  <BeatLoader size="10px" margin="2px" />
                </>
              ) : (
                "Delete"
              )}
            </button>
            <button
              className="border-0 item-morOption fw-09500 p-2 border-top bg-white"
              onClick={() => {
                setShowMore(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  Like: state.PostsInfor.Likes,
  UsersAPI: state.Users.Users,
  MeComments: state.PostsInfor.Comments,
});
const mapDispatchToProps = (dispatch) => ({
  changeMoreOption: (data) => dispatch(changeMODALmoreOption(data)),
  changeMeComment: (data) => dispatch(SAVEcomments(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
