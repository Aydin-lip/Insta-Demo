import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import UserNewMessage from "./userNewMessage";
import { RingLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { connect } from "react-redux";
import {
  changeNEWmessage,
  ERRORPOSTS,
} from "../../../useStateManager/actions/actions";

const NewMessage = (props) => {
  document.title = props.ModalNewMessage
    ? "New Message • Direct"
    : "Inbox • Direct";

  const [Users, setUsers] = useState(props.UsersAPI);
  const [Loading, setLoading] = useState(true);

  let usernames;
  try {
    usernames = props.UsersAPI.map((u) => u.login.username);
  } catch (error) {
    props.Error(true);
  }
  const changeNewMessageInput = (event) => {
    let New = usernames.filter((user) => {
      return user.toLowerCase().includes(event.target.value.toLowerCase());
    });
    let NewUsers = [];
    New.map((n) => {
      props.UsersAPI.filter((u) => {
        if (n === u.login.username) {
          NewUsers = [...NewUsers, u];
        }
      });
    });
    setUsers(NewUsers);
  };

  if (props.ModalNewMessage) {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

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
                  onChange={changeNewMessageInput}
                />
              </div>
              <div className="overflow-auto" style={{ maxHeight: "296px" }}>
                <div className="p-2 m-1">
                  <span className="fw-09500">Suggested</span>
                </div>
                {Loading ? (
                  <>
                    <div className="d-flex my-1">
                      <div className="mx-2">
                        <Skeleton width="55px" height="55px" circle="true" />
                      </div>
                      <div className="mt-2">
                        <Skeleton width="130px" height="15px" />
                        <Skeleton width="90px" height="15px" />
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="mx-2">
                        <Skeleton width="55px" height="55px" circle="true" />
                      </div>
                      <div className="mt-2">
                        <Skeleton width="130px" height="15px" />
                        <Skeleton width="90px" height="15px" />
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="mx-2">
                        <Skeleton width="55px" height="55px" circle="true" />
                      </div>
                      <div className="mt-2">
                        <Skeleton width="130px" height="15px" />
                        <Skeleton width="90px" height="15px" />
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="mx-2">
                        <Skeleton width="55px" height="55px" circle="true" />
                      </div>
                      <div className="mt-2">
                        <Skeleton width="130px" height="15px" />
                        <Skeleton width="90px" height="15px" />
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="mx-2">
                        <Skeleton width="55px" height="55px" circle="true" />
                      </div>
                      <div className="mt-2">
                        <Skeleton width="130px" height="15px" />
                        <Skeleton width="90px" height="15px" />
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="mx-2">
                        <Skeleton width="55px" height="55px" circle="true" />
                      </div>
                      <div className="mt-2">
                        <Skeleton width="130px" height="15px" />
                        <Skeleton width="90px" height="15px" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {Users.map((u, index) => (
                      <UserNewMessage
                        key={index}
                        data={{
                          profile: u.relationship.avatar,
                          username: u.login.username,
                          name: u.name.first,
                        }}
                      />
                    ))}
                    <div className="w-100 d-flex justify-content-center align-items-center my-3">
                      <RingLoader size="20px" />
                    </div>
                  </>
                )}
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
  UsersAPI: state.Users.Users,
});
const mapDispatchToProps = (dispatch) => ({
  changeNewMessage: (data) => dispatch(changeNEWmessage(data)),
  Error: (data) => dispatch(ERRORPOSTS(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
