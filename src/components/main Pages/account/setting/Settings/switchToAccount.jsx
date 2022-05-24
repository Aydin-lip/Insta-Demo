import { Modal } from "react-bootstrap";
import { useState } from "react";

const SwitchToAccount = () => {
  const [Show, setShow] = useState(false);
  return (
    <>
      <button
        className="border-0 bg-white text-primary fs-09 fw-500 w-100 text-start pt-3 pb-5 px-4"
        onClick={() => {
          setShow(true);
        }}
      >
        Switch to Personal Account
      </button>

      <Modal
        fullscreen
        show={Show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div
              className="bg-white position-fixed"
              style={{ borderRadius: "13px", maxWidth: "400px" }}
            >
              <div className="p-4 text-center">
                <span className="fw-500 mb-1 d-block fs-5">
                  Switch to a Personal Account?
                </span>
                <p className="text-muted fs-09 m-0">
                  When you switch back to a personal account, in-app insights
                  will be turned off and insights from all your content,
                  including content and insights for promotions, will be
                  permanently removed.
                </p>
              </div>
              <span
                className="text-center d-block text-danger fs-09 border-top"
                style={{
                  padding: ".8rem 0",
                  fontWeight: "700",
                  cursor: "default",
                  opacity: ".6",
                }}
              >
                Switch Back
              </span>
              <span
                className="text-center d-block fs-09 border-top cursor"
                style={{ padding: ".8rem 0" }}
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SwitchToAccount;
