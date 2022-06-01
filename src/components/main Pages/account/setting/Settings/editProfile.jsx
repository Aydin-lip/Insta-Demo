import { useRef } from "react";
import { connect } from "react-redux";
import {
  ACCOUNT,
  changePROFILE,
} from "../../../../useStateManager/actions/actions";
import ChangeProfile from "../../profile/changeProfile";

const EditProfile = (props) => {
  document.title = "Edit Profile • Instagram";
  const Name = useRef();
  const UserName = useRef();
  const WebSite = useRef();
  const Bio = useRef();
  const Email = useRef();
  const Phone = useRef();
  const Gender = useRef();

  const pattern = /^([a-zA-Z0-9\-._]+)@([a-z]+)(.[a-z]{2,5})(.[a-z]{2,3})?$/; // regex101.com
  const ChangeInformation = () => {
    if (pattern.test(Email.current.value)) {
      props.changeAccount({
        username: UserName.current.value,
        password: props.Account.password,
        email: Email.current.value,
        name: Name.current.value,
        have: true,
        avatar: props.Account.avatar,
        bio: Bio.current.value,
        rul: props.Account.rul,
        phone: Phone.current.value,
        gender: Gender.current.value,
        website: WebSite.current.value,
      });
    } else {
      Email.current.style.border = "1px solid #ff000080";
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col-2 col-sm-3 pe-0 pe-sm-4 d-flex">
            <div className="ms-auto">
              <img
                src={props.Account.avatar}
                width="38"
                height="38"
                alt="profile"
                className="rounded-circle cursor"
                onClick={() => {
                  props.changeProfile(true);
                }}
              />
            </div>
          </div>
          <div className="col-9 ps-2 d-flex flex-column">
            <h5 className="mb-0" style={{ fontWeight: "400" }}>
              {props.Account.username}
            </h5>
            <span
              className="text-primary fw-500 fs-09 cursor"
              onClick={() => {
                props.changeProfile(true);
              }}
            >
              Change Profile Photo
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Name</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <input
              type="text"
              defaultValue="aydin"
              className="m-0 w-100 py-1 px-3 rounded bg-white"
              placeholder="Name"
              defaultValue={props.Account.name}
              ref={Name}
            />
            <p className="m-0 text-muted fs-08 mt-3 ms-1">
              Help people discover your account by using the name you're known
              by: either your full name, nickname, or business name.
            </p>
            <span className="text-muted fs-08 ms-1 mt-2 mb-3">
              You can only change your name twice within 14 days.
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Username</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <input
              type="text"
              className="m-0 w-100 py-1 px-3 rounded bg-white"
              placeholder="Username"
              defaultValue={props.Account.username}
              ref={UserName}
            />
            <p className="m-0 text-muted fs-08 mt-3 ms-1">
              In most cases, you'll be able to change your username back to
              aydin.lip for another 14 days.
              <span className="cursor text-primary fs-08 cursor">
                Learn More
              </span>
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Website</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <input
              type="text"
              className="m-0 w-100 py-1 px-3 rounded bg-white"
              placeholder="Website"
              defaultValue={props.Account.website}
              ref={WebSite}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Bio</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <textarea
              type="text"
              className="m-0 w-100 py-1 px-3 rounded border bg-white"
              defaultValue={props.Account.bio}
              ref={Bio}
            />
            <p className="m-0 text-muted fs-08 mt-4 ms-1 ">
              <span className="fs-09 d-block fw-500 text-muted">
                Personal Information
              </span>
              Provide your personal information, even if the account is used for
              a business, a pet or something else. This won't be a part of your
              public profile.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Email</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <input
              type="text"
              className="m-0 input-email-settings w-100 py-1 px-3 rounded bg-white"
              placeholder="Email"
              defaultValue={props.Account.email}
              ref={Email}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Phone Number</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <input
              type="text"
              className="m-0 w-100 py-1 px-3 rounded bg-white"
              placeholder="Phone Number"
              defaultValue={props.Account.phone}
              ref={Phone}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Gender</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <input
              type="text"
              className="m-0 w-100 py-1 px-3 rounded bg-white"
              placeholder="Gender"
              defaultValue={props.Account.gender}
              ref={Gender}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 text-start py-2 py-sm-0 text-sm-end">
            <span className="fw-500">Similar Account Suggestions</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                id="checked1"
              />
              <label
                className="form-check-label fs-08 fw-500 ms-2"
                htmlFor="checked1"
              >
                Include your account when <br /> recommending similar accounts
                <br /> people might want to follow.
              </label>
            </div>
            <div className="d-flex mt-4">
              <button
                className="btn btn-primary fs-09 fw-500 py-1 ps-2"
                onClick={ChangeInformation}
              >
                Submit
              </button>
              <span className="ms-auto fs-09 fw-500 text-primary cursor">
                Temporarily disable my account
              </span>
            </div>
          </div>
        </div>
      </div>
      <ChangeProfile />
    </>
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});
const mapDispatchToProps = (dispatch) => ({
  changeProfile: (data) => dispatch(changePROFILE(data)),
  changeAccount: (data) => dispatch(ACCOUNT(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
