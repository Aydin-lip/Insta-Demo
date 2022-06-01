import { useState } from "react";
import { useRef } from "react";

import { connect } from "react-redux";
import { ACCOUNT } from "../../../../useStateManager/actions/actions";

const ChangePassword = (props) => {
  const [Disabled, setDisabled] = useState(true);
  const [Changed, setChanged] = useState(false);
  document.title = "Change Password • Instagram";

  const OldPassword = useRef();
  const NewPassword = useRef();
  const AgainPassword = useRef();

  const changeinputs = () => {
    if (
      OldPassword.current.value.length >= 8 &&
      NewPassword.current.value.length >= 8 &&
      AgainPassword.current.value.length >= 8
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const changePass = () => {
    if (OldPassword.current.value === props.Account.password) {
      OldPassword.current.style.border = "1px solid #dee2e6";
      if (NewPassword.current.value === AgainPassword.current.value) {
        NewPassword.current.style.border = "1px solid #dee2e6";
        AgainPassword.current.style.border = "1px solid #dee2e6";
        props.changeAccount({
          username: props.Account.username,
          password: NewPassword.current.value,
          email: props.Account.email,
          name: props.Account.name,
          have: true,
          avatar: props.Account.avatar,
          bio: props.Account.bio,
          rul: props.Account.rul,
          phone: props.Account.phone,
          gender: props.Account.gender,
          website: props.Account.website,
        });
        OldPassword.current.value = "";
        NewPassword.current.value = "";
        AgainPassword.current.value = "";
        setChanged(true);
        setDisabled(true);
      } else {
        NewPassword.current.style.border = "1px solid rgba(255, 0, 0, 0.5)";
        AgainPassword.current.style.border = "1px solid rgba(255, 0, 0, 0.5)";
      }
    } else {
      OldPassword.current.style.border = "1px solid rgba(255, 0, 0, 0.5)";
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-2 col-sm-3 pe-0 pe-sm-4 d-flex">
            <div className="ms-auto">
              <img
                src={props.Account.avatar}
                width="38"
                height="38"
                alt="profile"
                className="rounded-circle cursor"
              />
            </div>
          </div>
          <div className="col-9 ps-2">
            <h4 className="mb-0" style={{ fontWeight: "400" }}>
              {props.Account.username}
            </h4>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-3 pe-4 text-sm-end">
            <span className="fw-500">Old Password</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "440px" }}
          >
            <input
              type="password"
              className="m-0 w-100 py-2 px-3 rounded-3 mb-3"
              ref={OldPassword}
              onChange={changeinputs}
            />
          </div>

          <div className="col-12 col-sm-3 pe-4 text-sm-end">
            <span className="fw-500">New Password</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "440px" }}
          >
            <input
              type="password"
              className="m-0 w-100 py-2 px-3 rounded-3 mb-3"
              ref={NewPassword}
              onChange={changeinputs}
            />
          </div>

          <div className="col-12 col-sm-3 pe-4 text-sm-end">
            <span className="fw-500">Confirm New Password</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "440px" }}
          >
            <input
              type="password"
              className="m-0 w-100 py-2 px-3 rounded-3"
              ref={AgainPassword}
              onChange={changeinputs}
            />
            <div className="">
              <button
                className="btn btn-primary fs-09 fw-500 py-1 ps-2"
                style={{ margin: "2rem 0" }}
                disabled={Disabled}
                onClick={changePass}
              >
                {Changed ? "Changed ✔" : "Change Password"}
              </button>
              <span className="text-primary d-block fw-500 fs-09 cursor">
                Forgot Password?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});
const mapDispatchToProps = (dispatch) => ({
  changeAccount: (data) => dispatch(ACCOUNT(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
