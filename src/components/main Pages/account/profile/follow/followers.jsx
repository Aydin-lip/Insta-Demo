import { Modal } from "react-bootstrap";
import { useState } from "react";
import BoxsFollowers from "./BoxsFollowers";
import { NavLink, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

const Followers = (props) => {
  const [Show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="mx-3 cursor d-none d-sm-block"
        onClick={() => {
          setShow(true);
        }}
      >
        <NavLink
          to="/aydin.lip/followers"
          className="text-decoration-none text-black"
        >
          <span className="me-1 fw-500">{props.Followers}</span>
          <span>followers</span>
        </NavLink>
      </div>

      <div className="col-4 d-flex d-sm-none justify-content-center align-items-center">
        <NavLink
          to="/aydin.lip/followers"
          className="text-decoration-none text-black"
        >
          <div
            className="d-flex flex-column text-center cursor"
            style={{ marginBottom: "-2px" }}
            onClick={() => {
              setShow(true);
            }}
          >
            <span className="fw-500">{props.Followers}</span>
            <span className="text-muted">followers</span>
          </div>
        </NavLink>
      </div>

      <Modal
        fullscreen
        show={Show}
        onHide={() => {
          setShow(false);
          navigate("/aydin.lip", { replace: true });
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
                <span className="fw-500">Followers</span>
                <span
                  className="position-absolute cursor"
                  style={{ top: ".5rem", right: "1rem" }}
                  onClick={() => {
                    setShow(false);
                    navigate("/aydin.lip", { replace: true });
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
              <div className="overflow-auto" style={{ height: "87%" }}>
                <BoxsFollowers />

                <div
                  className="w-100 d-flex justify-content-center pt-3"
                  style={{ height: "2rem" }}
                >
                  <RingLoader size="20px" />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Followers;
