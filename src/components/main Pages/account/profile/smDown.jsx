import { NavLink } from "react-router-dom";
import Followers from "./follow/followers";
import Following from "./follow/following";

import { connect } from "react-redux";
import { changePROFILE } from "../../../useStateManager/actions/actions";
import SettingProfile from "./setting";

const ProfileSmDown = (props) => {
  return (
    <>
      <div className="d-sm-none" style={{ marginTop: "4rem" }}>
        <div className="d-flex">
          <div className="p-2">
            <img
              src={props.Account.avatar}
              width="77"
              height="77"
              alt="profile"
              className="rounded-circle"
              onClick={() => {
                props.changeProfile(true);
              }}
            />
          </div>
          <div className="ms-3 w-100" style={{ maxWidth: "16rem" }}>
            <div className="d-flex">
              <h1 className="fw-light my-2">{props.Account.username}</h1>
              <span className="cursor p-2 ps-3">
                <SettingProfile />
              </span>
            </div>
            <NavLink to="/account/edit" className="text-decoration-none">
              <button className="btn btn-outline-dark w-100 border fs-09 fw-500 py-1 px-2">
                Edit Profile
              </button>
            </NavLink>
          </div>
        </div>
        <div className="fs-08 ps-2 pt-3">
          <div className="fw-500">
            <h6 className="mb-0 fs-09" style={{ fontWeight: "600" }}>
              {props.Account.name}
            </h6>
          </div>
          <span className="text-muted">{props.Account.rul}</span>
          <p className="">{props.Account.bio}</p>
        </div>
        <div className="row border-top fs-09 p-2">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className="d-flex flex-column text-center"
              style={{ marginBottom: "-2px" }}
            >
              <span className="fw-500">0</span>
              <span className="text-muted">posts</span>
            </div>
          </div>
          <Followers Followers="4,398" />
          <Following Following="245" />
        </div>
        <div className="row border-top border-bottom">
          <button className="col-4 btn-profile-sm active-btn-profile-sm position-relative d-flex justify-content-center align-items-center p-2">
            <NavLink to={`/${props.Account.username}`}>
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span className="">
                <svg
                  color="#0095f6"
                  fill="#0095f6"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
              </span>
            </NavLink>
          </button>
          <button className="col-4 btn-profile-sm position-relative d-flex justify-content-center align-items-center p-2">
            <NavLink to={`/${props.Account.username}/saved`}>
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span className="">
                <svg
                  color="#0095f6"
                  fill="#0095f6"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></polygon>
                </svg>
              </span>
            </NavLink>
          </button>
          <button className="col-4 btn-profile-sm position-relative d-flex justify-content-center align-items-center p-2">
            <NavLink to={`/${props.Account.username}/tagged`}>
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span className="">
                <svg
                  color="#0095f6"
                  fill="#0095f6"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <circle
                    cx="12.072"
                    cy="11.075"
                    fill="none"
                    r="3.556"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                </svg>
              </span>
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
  function ActiveBtnAccountProfileSm(event) {
    const btns = document.querySelectorAll(".btn-profile-sm");
    btns.forEach((b) => {
      b.classList.remove("active-btn-profile-sm");
    });
    event.target.parentElement.parentElement.classList.add(
      "active-btn-profile-sm"
    );
  }
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});
const mapDispatchToProps = (dispatch) => ({
  changeProfile: (data) => dispatch(changePROFILE(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSmDown);
