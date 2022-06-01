import { connect } from "react-redux";
import { changeDETAILSdirect } from "../../../useStateManager/actions/actions";

const Details = (props) => {
  return (
    <>
      <div className="w-100 h-100 position-relative">
        <div
          className="d-flex p-3 w-100 justify-content-center position-relative border-bottom fw-500"
          style={{ height: "3.7rem" }}
        >
          <div className="">
            <span>Details</span>
          </div>
          <div
            className="position-absolute"
            style={{ top: "1rem", right: "2rem" }}
          >
            <span
              className="cursor"
              onClick={() => {
                props.changeDetails(false);
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
                <path d="M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm-.182 5.955a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25zm1.614 11.318h-2.865a1 1 0 010-2H11V12.05h-.432a1 1 0 010-2H12a1 1 0 011 1v4.727h.433a1 1 0 110 2z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div
          className="overflow-auto position-absolute bottom-0"
          style={{ top: "3.7rem" }}
        >
          <div className="border-bottom mt-2 py-2 px-3 fs-09">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="muteMessage"
              />
              <label className="form-check-label" htmlFor="muteMessage">
                Mute Messages
              </label>
            </div>
          </div>
          <div className="border-bottom p-3">
            <div className="d-flex w-100 align-items-center">
              <span className="fs-09">Move to General</span>
              <button
                className="btn btn-outline-dark border fs-09 fw-500 py-1 px-2 ms-auto"
                disabled
              >
                Move
              </button>
            </div>
            <p className="text-muted m-0 fs-09 pt-2">
              <span className="fw-500">{props.data.username}</span> won't know
              they've been moved. You can move them back to Primary anytime.
            </p>
          </div>
          <div className="border-bottom py-3">
            <div className="ps-3">
              <span className="fw-500">Members</span>
            </div>
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1 ps-0">
                <img
                  src={props.data.profile}
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div className="d-flex flex-column px-2 justify-content-center fs-09">
                <span className="fw-500">{props.data.username}</span>
                <span className="text-muted">{props.data.name}</span>
              </div>
            </div>
          </div>
          <div className="border-bottom px-3 py-2">
            <span className="cursor text-danger d-block fs-09 mt-1 mb-3">
              Delete Chat
            </span>
            <span className="cursor text-danger d-block fs-09 my-3">Block</span>
            <span className="cursor text-danger d-block fs-09 mb-1 mt-3">
              Report
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeDetails: (data) => dispatch(changeDETAILSdirect(data)),
});

export default connect(null, mapDispatchToProps)(Details);
