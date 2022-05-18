import { Modal } from "react-bootstrap";
import UserNewMessage from "./userNewMessage";

import { connect } from "react-redux";
import { changeNEWmessage } from "../../../useStateManager/actions/actions";

const NewMessage = (props) => {
  document.title = props.ModalNewMessage
    ? "New Message • Direct"
    : "Inbox • Direct";
  return (
    <>
      <Modal
        fullscreen
        show={props.ModalNewMessage}
        onHide={() => {
          props.changeNewMessage(false);
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div
              className="position-fixed pb-2 bg-white border w-100"
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                borderRadius: "13px",
              }}
            >
              <div className="p-2 d-flex justify-content-center align-items-center position-relative">
                <span
                  className="position-absolute cursor"
                  style={{ left: "1rem", top: "6px" }}
                  onClick={() => {
                    props.changeNewMessage(false);
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
                <span style={{ fontWeight: "500" }}>New Message</span>
                <button
                  className="btn btn-outline-primary border-0 position-absolute"
                  style={{ right: "1rem", fontSize: ".9rem" }}
                  disabled
                >
                  Next
                </button>
              </div>

              <div className="border-top border-bottom p-2 d-flex align-items-center">
                <span className="fw-500">To:</span>
                <input
                  type="text"
                  className="border-0 bg-white w-100 mx-4 mb-0 input-noPlace"
                  placeholder="Search..."
                />
              </div>
              <div className="overflow-auto" style={{ maxHeight: "296px" }}>
                <div className="p-2 m-1">
                  <span className="fw-09500">Suggested</span>
                </div>
                <UserNewMessage />
                <UserNewMessage />
                <UserNewMessage />
                <UserNewMessage />
                <UserNewMessage />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  ModalNewMessage: state.Modal.NewMessage,
});
const mapDispatchToProps = (dispatch) => ({
  changeNewMessage: (data) => dispatch(changeNEWmessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
