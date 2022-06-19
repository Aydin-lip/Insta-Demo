import { Modal } from "react-bootstrap";
import { useState } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import BoxsFollowing from "./BoxsFollowing";
import Hashtags from "./hashtags";
import Followers from "./followers";
import { connect } from "react-redux";

const Following = (props) => {
  const [Show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="ms-4 cursor d-none d-sm-block"
        onClick={() => {
          setShow(true);
        }}
      >
        <NavLink
          to={`/${props.data.login.username}/following`}
          className="text-decoration-none text-black"
        >
          <span className="me-1 fw-500">{props.Following}</span>
          <span>following</span>
        </NavLink>
      </div>

      <div className="col-4 d-flex d-sm-none justify-content-center align-items-center">
        <NavLink
          to={`/${props.data.login.username}/followers`}
          className="text-decoration-none text-black"
        >
          <div
            className="d-flex flex-column text-center cursor"
            style={{ marginBottom: "-2px" }}
            onClick={() => {
              setShow(true);
            }}
          >
            <span className="fw-500">{props.Following}</span>
            <span className="text-muted">following</span>
          </div>
        </NavLink>
      </div>

      <Modal
        fullscreen
        show={Show}
        onHide={() => {
          setShow(false);
          navigate(`/${props.data.login.username}`, { replace: true });
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div
              className="w-100 h-100 bg-white position-fixed"
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                borderRadius: "12px",
              }}
            >
              <div className="border-bottom text-center p-2">
                <span className="fw-500">Following</span>

                <span
                  className="position-absolute cursor"
                  style={{ top: ".5rem", right: "1rem" }}
                  onClick={() => {
                    setShow(false);
                    navigate(`/${props.data.login.username}`, {
                      replace: true,
                    });
                  }}
                >
                  <svg
                    color="#262626"
                    fill="#262626"
                    height="18"
                    role="img"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline
                      fill="none"
                      points="20.643 3.357 12 12 3.353 20.647"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></polyline>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      x1="20.649"
                      x2="3.354"
                      y1="20.649"
                      y2="3.354"
                    ></line>
                  </svg>
                </span>
              </div>
              <div className="border-bottom d-flex">
                <NavLink
                  to={`/${props.data.login.username}/following`}
                  className="text-decoration-none text-black"
                  style={{ width: "50%" }}
                >
                  <button
                    className="text-muted w-100 fw-500 p-2 border-0 bg-white btn-following active-btn-direct"
                    onClick={(event) => {
                      funcFollowingbtn(event);
                    }}
                  >
                    People
                  </button>
                </NavLink>
                <NavLink
                  to={`/${props.data.login.username}/hashtag_following`}
                  className="text-decoration-none text-black"
                  style={{ width: "50%" }}
                >
                  <button
                    className="text-muted w-100 fw-500 p-2 border-0 bg-white btn-following"
                    onClick={(event) => {
                      funcFollowingbtn(event);
                    }}
                  >
                    Hashtags
                  </button>
                </NavLink>
              </div>
              <div className="overflow-auto" style={{ height: "77%" }}>
                {document.location.pathname ===
                `/${props.data.login.username}/following` ? (
                  <BoxsFollowing />
                ) : (
                  <Hashtags />
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
  function funcFollowingbtn(event) {
    const btns = document.querySelectorAll(".btn-following");
    btns.forEach((b) => {
      b.classList.remove("active-btn-direct");
    });
    event.target.classList.add("active-btn-direct");
  }
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});

export default connect(mapStateToProps)(Following);
