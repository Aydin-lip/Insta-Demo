import { NavLink } from "react-router-dom";
import Followers from "./follow/followers";
import Following from "./follow/following";
import SettingProfile from "./setting";

import { changePROFILE } from "../../../useStateManager/actions/actions";
import { connect } from "react-redux";
import ChangeProfile from "./changeProfile";

const ProfileSmUp = (props) => {
  return (
    <>
      <div
        className="row profile d-none d-sm-flex"
        style={{ marginTop: "6rem" }}
      >
        <div className="col-3">
          <div className="">
            <img
              src={props.Account.avatar}
              width="150"
              height="150"
              alt="profile"
              className="rounded-circle cursor"
              onClick={() => {
                props.changeProfile(true);
              }}
            />
          </div>
        </div>
        <div className="col-8 ms-3 ps-5">
          <div className="d-flex">
            <h3 className="fw-light mb-0 me-2">{props.Account.username}</h3>
            <div className="mx-3">
              <NavLink to="/account/edit">
                <button className="btn btn-outline-dark border fs-09 fw-500 py-1 px-2">
                  Edit Profile
                </button>
              </NavLink>
            </div>
            <SettingProfile />
          </div>
          <div className="py-3 mt-2 d-flex">
            <div className="me-4">
              <span className="me-1 fw-500">{props.PostsMe.length}</span>
              <span>posts</span>
            </div>
            <Followers Followers={props.Followers.length - 2} />
            <Following Following={props.Following.length - 2} />
          </div>
          <div className="mb-5">
            <div className="fw-500">
              <h6 className="mb-0" style={{ fontWeight: "600" }}>
                {props.Account.name}
              </h6>
            </div>
            <span className="text-muted">{props.Account.rul}</span>
            <p className="">{props.Account.bio}</p>
          </div>
        </div>
      </div>
      <ChangeProfile />
    </>
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
  PostsMe: state.Information.Posts,
  Followers: state.PostsInfor.Followers,
  Following: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  changeProfile: (data) => dispatch(changePROFILE(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSmUp);
