import { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

import { connect } from "react-redux";
import { MESSAGE } from "../../../useStateManager/actions/actions";

const Message = (props) => {
  const [Show, setShow] = useState(false);
  let target = useRef();

  const UnsendMessage = () => {
    let messages = props.Message.filter((m) => m.id !== props.data.Id);
    props.changeMessageDirect(messages);
  };

  return props.data.Sender === "me" ? (
    <div className="messages-fordetails">
      <div className="w-100 d-flex">
        <div className="ms-auto"></div>
        <span
          className="details-message align-items-center me-2 cursor"
          ref={target}
          onClick={() => {
            setShow(!Show);
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
        </span>
        <Overlay target={target.current} show={Show} placement="top">
          <Tooltip>
            <span
              className="fw-500 fs-09 cursor m-1"
              onClick={() => {
                setShow(false);
              }}
            >
              Copy
            </span>
            <span className="fw-500 fs-09 cursor m-1" onClick={UnsendMessage}>
              Unsend
            </span>
          </Tooltip>
        </Overlay>
        {props.data.Text === "Like" ? (
          <>
            <span className="my-2 text-end pe-1">
              <svg
                color="#ed4956"
                fill="#ed4956"
                height="44"
                role="img"
                viewBox="0 0 48 48"
                width="44"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </span>
          </>
        ) : (
          <div
            className="px-3 py-2 mb-2 position-relative"
            style={{
              backgroundColor: "#f1f1f1",
              minHeight: "45px",
              maxWidth: "245px",
              borderRadius: "25px",
            }}
            onDoubleClick={doubleClick}
          >
            <p className="mb-0 py-1" style={{ fontSize: ".9rem" }}>
              {props.data.Text}
            </p>
            <div className="LikeMessage cursor d-none end-0">
              <span>❤</span>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="messages-fordetails">
      <div className="w-100 d-flex">
        {props.data.Text === "Like" ? (
          <>
            <span className="my-2 text-start ps-2">
              <svg
                color="#ed4956"
                fill="#ed4956"
                height="44"
                role="img"
                viewBox="0 0 48 48"
                width="44"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </span>
          </>
        ) : (
          <>
            <div className="d-flex align-items-end px-2">
              <img
                src={props.data.Profile}
                width="24px"
                height="24px"
                alt="profile"
                className="rounded-circle cursor"
              />
            </div>
            <div
              className="bg-white px-3 py-2 mb-2 border position-relative"
              style={{
                minHeight: "45px",
                maxWidth: "245px",
                borderRadius: "25px",
              }}
              onDoubleClick={doubleClick}
            >
              <p className="mb-0 py-1" style={{ fontSize: ".9rem" }}>
                {props.data.Text}
              </p>
              <div className="LikeMessage cursor d-none start-0">
                <span>❤</span>
              </div>
            </div>
          </>
        )}
        <span
          className="details-message ms-2 align-items-center cursor"
          ref={target}
          onClick={() => {
            setShow(!Show);
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
        </span>
        <Overlay target={target.current} show={Show} placement="top">
          <Tooltip>
            <span
              className="fw-500 fs-09 cursor m-1"
              onClick={() => {
                setShow(false);
              }}
            >
              Copy
            </span>
            <span className="fw-500 fs-09 cursor m-1" onClick={UnsendMessage}>
              Delete
            </span>
          </Tooltip>
        </Overlay>
        <div className="me-auto"></div>
      </div>
    </div>
  );

  function doubleClick() {
    const likeMessage = document.querySelectorAll(".LikeMessage");
    let like = props.data.Sender === "me" ? likeMessage[1] : likeMessage[0];
    like.classList.toggle("d-none");
  }
};

const mapStateToProps = (state) => ({
  Message: state.Message.Bot,
});
const mapDispatchToProps = (dispatch) => ({
  changeMessageDirect: (data) => dispatch(MESSAGE(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
