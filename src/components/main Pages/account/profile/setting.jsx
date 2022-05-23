import { useState } from "react";
import { Modal } from "react-bootstrap";

const SettingProfile = () => {
  const [Show, setShow] = useState(false);
  return (
    <>
      <span
        className="cursor"
        onClick={() => {
          setShow(true);
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
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="8.635"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
          <path
            d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      </span>
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
              className="position-fixed w-100 h-100 bg-white py-2"
              style={{
                maxWidth: "400px",
                maxHeight: "80.3vh",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex flex-column overflow-auto h-100">
                <button className="border-0 item-morOption fs-09 bg-white pt-1">
                  Change Password
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  Professional Account
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  QR Code
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  Apps and Websites
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  Notifications
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  Privacy and Security
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  Login Activity
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  Emails from Instagram
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white">
                  Report a Problem
                </button>
                <button className="border-0 item-morOption border-top fs-09 bg-white fw-500 text-danger">
                  Log Out
                </button>
                <button
                  className="border-0 item-morOption fs-09 border-top bg-white pb-1"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SettingProfile;
