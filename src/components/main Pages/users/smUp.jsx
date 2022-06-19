import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Followers from "./follow/followers";
import Following from "./follow/following";
import { connect } from "react-redux";
import { SETfollowing } from "../../useStateManager/actions/actions";
import { BeatLoader } from "react-spinners";

const ProfileSmUp = (props) => {
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
      <div
        className="row profile d-none d-sm-flex"
        style={{ marginTop: "6rem" }}
      >
        <div className="col-3">
          <div className="">
            <img
              src={props.data.relationship.avatar}
              width="150"
              height="150"
              alt="profile"
              className="rounded-circle cursor"
            />
          </div>
        </div>
        <div className="col-8 ms-3 ps-5">
          <div className="d-flex">
            <h3 className="fw-light mb-0 me-2">{props.data.login.username}</h3>
            <div className="mx-3 d-flex align-items-start">
              {Follow ? (
                <>
                  <NavLink to="/direct/bot">
                    <button className="bg-white rounded border fs-09 fw-500 py-1 px-2">
                      Message
                    </button>
                  </NavLink>
                  <button
                    className="bg-white rounded border fs-09 fw-500 py-1 px-2 mx-2"
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
                  <button className="bg-white rounded border fs-09 fw-500 py-1 px-2">
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
                    className="btn btn-primary rounded border fs-09 fw-500 py-1 px-4"
                    onClick={FollowFunc}
                  >
                    {Loading ? (
                      <BeatLoader size="6px" margin="1px" />
                    ) : (
                      "Follow"
                    )}
                  </button>
                  <button className="btn btn-primary rounded border fs-09 fw-500 py-1 px-2 ms-2">
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
              <div className="ps-2">
                <div className="cursor">
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
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 mt-2 d-flex">
            <div className="me-4">
              <span className="me-1 fw-500">{Posts}</span>
              <span>posts</span>
            </div>
            <Followers data={props.data} Followers={Fs} />
            <Following data={props.data} Following={Fg} />
          </div>
          <div className="mb-5">
            <div className="fw-500">
              <h6 className="mb-0" style={{ fontWeight: "600" }}>
                {props.data.name.first}
              </h6>
            </div>
            <span className="text-muted">{props.data.relationship.rul}</span>
            <p className="d-flex flex-column">
              <span>{`${props.data.relationship.gender}...`}</span>
              <span>
                {`my name is ${props.data.name.first} and my last name is ${props.data.name.last}.`}
              </span>
              <span>{`Number: ${props.data.relationship.phone}  for call me.`}</span>
              <span>{`Gmail: ${props.data.relationship.email} for email me.`}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
  PostsAPI: state.Posts.Posts,
  Following: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  changeFollowing: (data) => dispatch(SETfollowing(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSmUp);
