import { FloatingLabel, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GetApp from "../getApp/getApp";

const FormLogin = () => {
  return (
    <>
      <div className="row ps-2 pt-3">
        <div className="col-12 col-lg-7 ps-4">
          <div className="" style={{ width: "352px" }}>
            <div className="p-3 pb-0 boxs">
              <div className="logoInsta" style={{ cursor: "pointer" }}>
                <img src="/imgs/instaLogo/instaLogo.png" alt="instaLogo" />
              </div>
              <form className="form position-relative">
                <input
                  className="inputLogin input-text"
                  type="Text"
                  placeholder="Phone number, username, or email"
                />
                <input
                  className="inputLogin mb-3 input-password"
                  type="Password"
                  onChange={onCheangeHandle}
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
                  disabled={true}
                >
                  Log In
                </Button>
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
                <a href="#" className="facebook-a-style">
                  <i className="fa fa-facebook-official"></i>
                  Log in with Facebook
                </a>
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

export default FormLogin;
