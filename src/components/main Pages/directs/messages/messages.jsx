import { connect } from "react-redux";
import { changeNEWmessage } from "../../../useStateManager/actions/actions";

const MessagesBox = (props) => {
  document.title = "Inbox • Direct";
  return (
    <>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="">
            <svg
              color="#262626"
              fill="#262626"
              height="96"
              role="img"
              viewBox="0 0 96 96"
              width="96"
            >
              <circle
                cx="48"
                cy="48"
                fill="none"
                r="47"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></circle>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="69.286"
                x2="41.447"
                y1="33.21"
                y2="48.804"
              ></line>
              <polygon
                fill="none"
                points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          </div>
          <h4 className="my-2" style={{ fontWeight: "100" }}>
            Your Messages
          </h4>
          <p className="text-muted" style={{ fontSize: ".9rem" }}>
            Send private photos and messages to a friend or group.
          </p>
          <button
            className="bg-primary border-0 rounded-3 text-white py-1 px-3 fw-09500"
            onClick={() => {
              props.changeNewMessage(true);
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeNewMessage: (data) => dispatch(changeNEWmessage(data)),
});

export default connect(null, mapDispatchToProps)(MessagesBox);
