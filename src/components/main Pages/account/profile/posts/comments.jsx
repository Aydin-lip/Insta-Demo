import { useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import SwiperPost from "../../../home/left/post/swper";
import LikeCommentShare from "../../../home/left/post/like,comment,share";
import { BeatLoader, ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import { MEPOSTS } from "../../../../useStateManager/actions/actions";
import ShareModal from "../../../home/left/post/shareModal";

const CommentProfile = (props) => {
  const [Show, setShow] = useState(false);
  const [ShowMore, setShowMore] = useState(false);
  const [Loading, setLoading] = useState(false);

  const DeletePost = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      let Posts = props.MePosts.filter((p) => p.id !== props.data.id);
      props.ChangeMePosts(Posts);
    }, 2000);
  };

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
            <div
              className="d-md-flex position-fixed"
              style={{ width: "80%", height: "90%" }}
            >
              <div className="d-flex w-100 overflow-hidden bg-white">
                <SwiperPost data={props.data.postsUrl} />
              </div>

              <div
                className="bg-white w-100 rounded-end border-bottom position-relative"
                style={{ height: "90vh" }}
              >
                <div
                  className="d-flex aligm-items-center border-bottom rounded-3"
                  style={{ padding: ".8rem" }}
                >
                  <div
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <img
                      src={props.Account.avatar}
                      width="32px"
                      alt="profilr"
                      className="rounded-circle"
                    />
                    <span className="cursor ps-2 pt-1 fw-09500">
                      <span>{props.Account.username}</span>
                    </span>
                  </div>
                  <div
                    className="options-more ms-auto cursor options-more"
                    onClick={() => {
                      setShowMore(true);
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
                  className="overflow-auto position-absolute start-0 end-0"
                  style={{ top: "3.7rem", bottom: "8.5rem" }}
                >
                  <div className="d-flex pb-0" style={{ padding: ".8rem" }}>
                    <div
                      className="cursor"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <img
                        src={props.Account.avatar}
                        width="32px"
                        alt="profilr"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="p-2 py-0 my-0">
                      <p className="mb-0" style={{ fontSize: ".9rem" }}>
                        <span
                          className="pe-2 fw-09500 comment-tag"
                          onClick={() => {
                            setShow(false);
                          }}
                        >
                          <span>{props.Account.username}</span>
                        </span>
                        <>{props.data.infor.bio}</>
                      </p>
                      <div
                        className="py-2"
                        style={{ color: "#8e8e8e", fontSize: ".65rem" }}
                      >
                        <span>7H 8Min AGO</span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="position-absolute bottom-0 start-0 end-0">
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
                        />
                        <button
                          className="btn text-primary ms-auto border-0 bg-white mt-1 fw-09500 input-send-comment"
                          disabled
                        >
                          Post
                        </button>
                      </div>
                    </>
                  </>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

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
              onClick={DeletePost}
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
      <ShareModal />
    </>
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
  MePosts: state.Information.Posts,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeMePosts: (data) => dispatch(MEPOSTS(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentProfile);
