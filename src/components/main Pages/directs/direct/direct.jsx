import { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { BeatLoader, ClipLoader } from "react-spinners";
import Message from "./message";
import Details from "./details";

import { connect } from "react-redux";
import {
  changeDETAILSdirect,
  MESSAGE,
} from "../../../useStateManager/actions/actions";
import { useRef } from "react";

const Direct = (props) => {
  document.title = "Instagram • Direct";
  const [Send, setSend] = useState(false);
  const [Typing, setTyping] = useState(false);
  let InputMessage = useRef();
  let ChatPage = useRef();

  const typing = (m) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      BotAnswer(m);
    }, 2000);
  };

  const setMessage = (f, m) => {
    let num = props.MessageDirect[props.MessageDirect.length - 1];
    let NewMessage = {
      id: num.id + 1,
      from: f,
      message: m,
    };
    let mess = props.MessageDirect;
    mess.push(NewMessage);
    props.changeMessageDirect(mess);
    ChatPage.current.scrollBy(0, ChatPage.current.scrollHeight);
  };

  const answer = (q, t) => {
    return q.toLowerCase().includes(t);
  };
  const BotAnswer = (question) => {
    let Und = true;
    if (answer(question, "like")) {
      setMessage("to", "🥰");
    }
    if (answer(question, "hi") || answer(question, "hello")) {
      setMessage("to", "hi 🖐🙃");
    }
    if (answer(question, "your name")) {
      setMessage("to", "my name is Aydin.");
    }
    if (answer(question, "name is")) {
      setMessage("to", "Nice to meet you 🔥");
    }
    if (answer(question, "old")) {
      setMessage("to", "Im 17");
    }
    if (answer(question, "life")) {
      setMessage("to", "I life in Tehran");
    }
    if (answer(question, "about") || answer(question, "information")) {
      setMessage(
        "to",
        "my name is Mr'Aydin and my life in Tehran, I am 17 years old, This project is for my resume."
      );
    }
    if (answer(question, "how are you") || answer(question, "are you ok")) {
      setMessage("to", "Thanks I'm fine");
    }
    if (answer(question, "help")) {
      setMessage("to", "for About me : about or information");
    }
    if (
      answer(question, "like") ||
      answer(question, "hi") ||
      answer(question, "hello") ||
      answer(question, "your name") ||
      answer(question, "name is") ||
      answer(question, "old") ||
      answer(question, "life") ||
      answer(question, "about") ||
      answer(question, "information") ||
      answer(question, "how are you") ||
      answer(question, "are you ok") ||
      answer(question, "help") ||
      answer(question, "good") ||
      answer(question, "ok")
    ) {
    } else {
      setMessage("to", "Please write the 𝐡𝐞𝐥𝐩 to send commands to you");
    }
  };

  const changeInputMessageDirect = (event) => {
    if (event.target.value.length >= 1) {
      setSend(true);
    } else {
      setSend(false);
    }
    if (Send) {
      if (event.nativeEvent.key === "Enter") {
        SendMessage();
      }
    }
  };
  const SendMessage = () => {
    setMessage("me", InputMessage.current.value);
    typing(InputMessage.current.value);
    InputMessage.current.value = "";
    setSend(false);
  };

  return props.Details ? (
    <Details
      data={{
        profile: props.data.profile,
        name: props.data.name,
        username: props.data.username,
      }}
    />
  ) : (
    <>
      <div className="w-100 position-relative">
        <div
          className="border-bottom py-2 px-4 d-flex w-100 position-relative bg-white"
          style={{ height: "59px", zIndex: "3" }}
        >
          <div className="ms-2 pt-1 d-flex align-items-center cursor">
            <div className="position-relative">
              <img
                src={props.data.profile}
                width="24px"
                height="24px"
                alt="profile"
                className="rounded-circle"
              />
              <div className="active-user-directTop"></div>
            </div>
            <div className="ms-2 ps-1">
              <h6 className="mb-0 fw-500 fs-09">{props.data.name}</h6>
              <span className="text-muted fs-08">Active now</span>
            </div>
          </div>
          <span
            className="ms-auto me-2 d-flex align-items-center cursor"
            onClick={() => {
              props.changeDetailsDirect(true);
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
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></circle>
              <circle cx="11.819" cy="7.709" r="1.25"></circle>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="10.569"
                x2="13.432"
                y1="16.777"
                y2="16.777"
              ></line>
              <polyline
                fill="none"
                points="10.569 11.05 12 11.05 12 16.777"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polyline>
            </svg>
          </span>
        </div>

        <div
          className="overflow-auto position-absolute start-0 end-0 px-3 d-flex flex-column"
          style={{ top: "2.5rem", bottom: "5.3rem" }}
          ref={ChatPage}
        >
          <div className="mt-auto mb-4"></div>
          {props.MessageDirect.map((m, index) => (
            <Message
              key={index}
              data={{
                Sender: m.from,
                Text: m.message,
                Profile: props.data.profile,
                Id: m.id,
              }}
            />
          ))}
          {Typing ? (
            <>
              <div className="ms-4">
                <BeatLoader size="9px" margin="3px" />
              </div>
            </>
          ) : null}
        </div>

        <div className="p-3 m-1 position-absolute bottom-0 start-0 end-0">
          <div className="border rounded-pill w-100 d-flex px-2">
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
              <button className="border-0 bg-white rounded-circle">
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
              placeholder="Message..."
              ref={InputMessage}
              onKeyUp={changeInputMessageDirect}
            />
            {Send ? (
              <button
                className="fs-09 fw-500 text-primary py-1 px-2 border-0 rounded-pill bg-white"
                onClick={SendMessage}
              >
                Send
              </button>
            ) : (
              <>
                <span
                  className="d-flex align-items-center m-2"
                  style={{ opacity: ".5" }}
                >
                  <svg
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M6.549 5.013A1.557 1.557 0 108.106 6.57a1.557 1.557 0 00-1.557-1.557z"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M2 18.605l3.901-3.9a.908.908 0 011.284 0l2.807 2.806a.908.908 0 001.283 0l5.534-5.534a.908.908 0 011.283 0l3.905 3.905"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M18.44 2.004A3.56 3.56 0 0122 5.564h0v12.873a3.56 3.56 0 01-3.56 3.56H5.568a3.56 3.56 0 01-3.56-3.56V5.563a3.56 3.56 0 013.56-3.56z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </span>
                <span
                  className="cursor d-flex align-items-center m-2"
                  onClick={() => {
                    setMessage("me", "Like");
                    typing("Like");
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
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  Details: state.Modal.DetailsDirect,
  MessageDirect: state.Message.Bot,
});
const mapDispatchToProps = (dispatch) => ({
  changeDetailsDirect: (data) => dispatch(changeDETAILSdirect(data)),
  changeMessageDirect: (data) => dispatch(MESSAGE(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Direct);
