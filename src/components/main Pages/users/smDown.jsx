import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Followers from "./follow/followers";
import Following from "./follow/following";
import { connect } from "react-redux";
import { SETfollowing } from "../../useStateManager/actions/actions";
import { BeatLoader } from "react-spinners";

const ProfileSmDown = (props) => {
  const [Fs, setFs] = useState();
  const [Fg, setFg] = useState();
  const [Follow, setFollow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Posts, setPosts] = useState();

  useEffect(() => {
    props.Following.filter((f) => {
      if (f === props.data.id) {
        setFollow(true);
      }
    });

    props.UsersAPI.filter((u) => {
      if (u.id === props.data.id) {
        setFs(u.about.followers);
        setFg(u.about.following);
      }
    });

    let Pos = [];
    props.PostsAPI.filter((p) => {
      if (p.username === props.data.login.username) {
        Pos.push(p);
      }
    });
    setPosts(Pos.length);
  }, []);

  const FollowFunc = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFollow(true);
      let fg = props.Following.filter((f) => f !== props.data.id);
      props.changeFollowing([...fg, props.data.id]);
    }, 2000);
  };
  const UnFollowFunc = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFollow(false);
      let fg = props.Following.filter((f) => f !== props.data.id);
      props.changeFollowing(fg);
    }, 2000);
  };

  return (
    <>
      <div className="d-sm-none" style={{ marginTop: "4rem" }}>
        <div className="d-flex">
          <div className="p-2">
            <img
              src={props.data.relationship.avatar}
              width="77"
              height="77"
              alt="profile"
              className="rounded-circle"
            />
          </div>
          <div className="ms-3 w-100" style={{ maxWidth: "16rem" }}>
            <div className="d-flex">
              <h1 className="fw-light my-2">{props.data.login.username}</h1>
              <span className="cursor pt-2 mt-1 ps-3">
                <svg
                  color="#262626"
                  fill="#262626"
                  height="32"
                  role="img"
                  viewBox="0 0 24 24"
                  width="32"
                >
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </span>
            </div>
            <div className="d-flex">
              {Follow ? (
                <>
                  <NavLink to="/direct/bot" className="text-decoration-none">
                    <button className="rounded bg-white w-100 border fs-09 fw-500 py-1 px-5">
                      Message
                    </button>
                  </NavLink>
                  <button
                    className="rounded bg-white w-100 border fs-09 fw-500 py-1 px-1 mx-2"
                    onClick={UnFollowFunc}
                  >
                    {Loading ? (
                      <BeatLoader size="6px" margin="1px" />
                    ) : (
                      <svg
                        color="#262626"
                        fill="#262626"
                        height="15"
                        role="img"
                        viewBox="0 0 95.28 70.03"
                        width="20"
                      >
                        <path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0zm19-50.8A19 19 0 1164.32 0a19.05 19.05 0 0118.91 19.18zM14.76 50.01a5 5 0 01-3.37-1.31L.81 39.09a2.5 2.5 0 01-.16-3.52l3.39-3.7a2.49 2.49 0 013.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 013.52 0l3.53 3.58a2.49 2.49 0 010 3.52L18.23 48.57a5 5 0 01-3.47 1.44z"></path>
                      </svg>
                    )}
                  </button>
                  <button className="rounded bg-white w-100 border fs-09 fw-500 py-1 px-1">
                    <span
                      className="d-inline-block"
                      style={{ transform: "rotate(180deg)" }}
                    >
                      <svg
                        color="#262626"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                      </svg>
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-primary w-100 border fs-09 fw-500 py-1 px-5 me-2"
                    onClick={FollowFunc}
                  >
                    {Loading ? (
                      <BeatLoader size="6px" margin="1px" />
                    ) : (
                      "Follow"
                    )}
                  </button>
                  <button className="btn btn-primary w-100 border fs-09 fw-500 py-1 px-1">
                    <span
                      className="d-inline-block"
                      style={{ transform: "rotate(180deg)" }}
                    >
                      <svg
                        color="#ffffff"
                        fill="#ffffff"
                        height="12"
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                      >
                        <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                      </svg>
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="fs-08 ps-2 pt-3">
          <div className="fw-500">
            <h6 className="mb-0 fs-09" style={{ fontWeight: "600" }}>
              {props.data.name.first}
            </h6>
          </div>
          <span className="text-muted">{props.data.relationship.rul}</span>
          <p>{`${props.data.relationship.gender}... 
            my name is ${props.data.name.first} and my last name is ${props.data.name.last}.
            Number: ${props.data.relationship.phone}  for call me
            Gmail: ${props.data.relationship.email} for email me
            `}</p>
        </div>
        <div className="row border-top fs-09 p-2">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className="d-flex flex-column text-center"
              style={{ marginBottom: "-2px" }}
            >
              <span className="fw-500">{Posts}</span>
              <span className="text-muted">posts</span>
            </div>
          </div>
          <Followers data={props.data} Followers={Fs} />
          <Following data={props.data} Following={Fg} />
        </div>
        <div className="row border-top border-bottom">
          <button className="col-4 btn-profile-sm active-btn-profile-sm position-relative d-flex justify-content-center align-items-center p-2">
            <NavLink to={`/${props.data.login.username}`}>
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span>
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
            <NavLink to={`/${props.data.login.username}/tagged`}>
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span>
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
  UsersAPI: state.Users.Users,
  PostsAPI: state.Posts.Posts,
  Following: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  changeFollowing: (data) => dispatch(SETfollowing(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSmDown);
