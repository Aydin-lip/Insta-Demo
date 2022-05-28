import { useState, useRef } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GetApp from "../getApp/getApp";

import { LOGGIN } from "../../useStateManager/actions/actions";
import { connect } from "react-redux";

const FormLogin = (props) => {
  const [Disabled, setDisabled] = useState(true);
  const [Username, setUsername] = useState(false);
  const [Password, setPassword] = useState(false);

  const UserName = useRef();
  const Ppassword = useRef();

  const changeInputs = () => {
    if (
      UserName.current.value.length > 3 &&
      Ppassword.current.value.length >= 8
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const onClickToLogin = () => {
    if (
      UserName.current.value === props.Account.username ||
      UserName.current.value === props.Account.email
    ) {
      setUsername(false);
      if (Ppassword.current.value === props.Account.password) {
        setPassword(false);
        props.changeLogin(true);
      } else {
        setPassword(true);
      }
    } else {
      setUsername(true);
    }
  };

  return (
    <>
      <div className="row ps-2 pt-3">
        <div className="col-12 col-lg-7 ps-4">
          <div className="" style={{ width: "352px" }}>
            <div className="p-3 pb-0 boxs">
              <div className="logoInsta" style={{ cursor: "pointer" }}>
                <img src="/imgs/instaLogo/instaLogo.png" alt="instaLogo" />
              </div>
              <form
                className="form position-relative"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input
                  className="inputLogin input-text"
                  type="Text"
                  onChange={changeInputs}
                  ref={UserName}
                  placeholder="username, or email"
                />
                <input
                  className="inputLogin mb-3 input-password"
                  type="Password"
                  onChange={() => {
                    onCheangeHandle();
                    changeInputs();
                  }}
                  ref={Ppassword}
                  placeholder="Password"
                />
                <span
                  onClick={onClickShow}
                  className="span-showPass position-absolute d-none"
                >
                  Show
                </span>
                <Button
                  variant="primary"
                  className="fw-bold btn-submit"
                  onClick={onClickToLogin}
                  disabled={Disabled}
                >
                  Log In
                </Button>
                {Username || Password ? (
                  <p
                    className="fs-09 text-danger text-center mt-3"
                    style={{ width: "17.1rem" }}
                  >
                    {Username ? (
                      <>
                        The username you entered doesn't belong to an account.
                        Please check your username and try again.
                      </>
                    ) : null}
                    {Password ? (
                      <>
                        Sorry, your password was incorrect. Please double-check
                        your password.
                      </>
                    ) : null}
                  </p>
                ) : null}

                <div className="row mt-2 text-muted">
                  <div className="col-5">
                    <hr />
                  </div>
                  <div className="col-2 text-OR"> OR </div>
                  <div className="col-5">
                    <hr />
                  </div>
                </div>
              </form>

              <div className="facebook-style">
                <span className="facebook-a-style cursor">
                  <i className="fa fa-facebook-official"></i>
                  Log in with Facebook
                </span>
              </div>
              <span className="p-3 d-block text-center">
                <Link to="/accounts/password/reset" className="Forget-a">
                  Forget password?
                </Link>
              </span>
            </div>

            <div className="boxs box-dontAccoutn">
              <span>
                Don't have an account?
                <Link to="/accounts/create" className="a-dontAccount">
                  Sign up
                </Link>
              </span>
            </div>

            <GetApp />
          </div>
        </div>
      </div>
    </>
  );
  function onCheangeHandle() {
    const inputPass = document.querySelector(".input-password");
    const spanShow = document.querySelector(".span-showPass");
    if (inputPass.value.length > 0) {
      spanShow.classList.remove("d-none");
    } else {
      spanShow.classList.add("d-none");
    }
  }
  function onClickShow(event) {
    const inputPass = document.querySelector(".input-password");
    if (inputPass.type === "password") {
      inputPass.type = "text";
      event.target.innerHTML = "Hide";
    } else {
      inputPass.type = "password";
      event.target.innerHTML = "Show";
    }
  }
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});
const mapDispatchToProps = (dispatch) => ({
  changeLogin: (data) => dispatch(LOGGIN(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
