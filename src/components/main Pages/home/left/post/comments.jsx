import { Component } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import Comment from "./comment";
import LikeCommentShare from "./like,comment,share";
import MorOptions from "./moreOptions";
import SendComment from "./sendComment";
import SwiperPost from "./swper";

import { connect } from "react-redux";
import {
  changeMODALcomments,
  changeMODALmoreOption,
} from "../../../../useStateManager/actions/actions";

const Comments = (props) => {
  return (
    <>
      <Modal
        fullscreen
        show={props.Modal}
        onHide={() => {
          props.changeModal(false);
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center position-relative"
          style={{ width: "100vw", height: "100vh" }}
        >
          <CloseButton
            className="position-absolute"
            onClick={() => {
              props.changeModal(false);
            }}
            style={{ top: "1rem", right: "2rem", fontSize: "1.5rem" }}
          />
          <div className="d-flex" style={{ height: "90vh" }}>
            <div className="" style={{ width: "473px" }}>
              <SwiperPost />
            </div>

            <div
              className="bg-white rounded-end border-bottom position-relative"
              style={{ width: "500px", height: "90vh" }}
            >
              <div
                className="d-flex aligm-items-center border-bottom rounded-3"
                style={{ padding: ".8rem", width: "500px" }}
              >
                <a href="#">
                  <img
                    src="/imgs/profile/user2.jpg"
                    width="32px"
                    alt="profilr"
                    className="rounded-circle"
                  />
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-black ps-2 pt-1 fw-09500"
                >
                  <span>onlinetutorials_youtube</span>
                </a>
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
              <div
                className="overflow-auto position-absolute"
                style={{ top: "3.7rem", bottom: "8.5rem" }}
              >
                <div className="d-flex pb-0" style={{ padding: ".8rem" }}>
                  <div className="">
                    <a href="#">
                      <img
                        src="/imgs/profile/user2.jpg"
                        width="32px"
                        alt="profilr"
                        className="rounded-circle"
                      />
                    </a>
                  </div>
                  <div className="p-2 py-0 my-0">
                    <p className="mb-0" style={{ fontSize: ".9rem" }}>
                      <a
                        href="#"
                        className="text-black pe-2 fw-09500 comment-tag"
                      >
                        onlinetutorials_youtube
                      </a>
                      CSS Responsive Product Card Hover Effects Watch This :
                      https://youtu.be/dcUK7KZ3Dmo All Source Code :
                      https://www.patreon.com/onlinetutorials
                    </p>
                    <div
                      className="py-2"
                      style={{ color: "#8e8e8e", fontSize: ".65rem" }}
                    >
                      <span className="">37 MINUTES AGO</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
              </div>

              <div className="position-absolute bottom-0 start-0 end-0">
                <LikeCommentShare />
                <SendComment />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  Modal: state.Modal.Comment,
});
const mapDispatchToProps = (dispatch) => ({
  changeModal: (data) => dispatch(changeMODALcomments(data)),
  changeMoreOption: (data) => dispatch(changeMODALmoreOption(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
