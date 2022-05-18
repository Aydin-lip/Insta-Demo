import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { changeNEWaccount } from "../../../useStateManager/actions/actions";

const NewAccount = (props) => {
  return (
    <>
      <Modal
        fullscreen
        show={props.ModalNewAccount}
        onHide={() => {
          props.changeNewAccount(false);
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div
              className="position-fixed bg-white border w-100 h-100"
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                borderRadius: "13px",
              }}
            >
              <div className="d-flex">
                <span
                  className="mt-3 ms-auto me-4 cursor"
                  onClick={() => {
                    props.changeNewAccount(false);
                  }}
                >
                  <svg
                    color="#262626"
                    fill="#262626"
                    height="18"
                    role="img"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline
                      fill="none"
                      points="20.643 3.357 12 12 3.353 20.647"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></polyline>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      x1="20.649"
                      x2="3.354"
                      y1="20.649"
                      y2="3.354"
                    ></line>
                  </svg>
                </span>
              </div>

              <div className="text-center">
                <div className="logoInsta">
                  <img
                    src="/imgs/instaLogo/instaLogo.png"
                    className="cursor"
                    alt="instaLogo"
                  />
                </div>
                <form className="form">
                  <input
                    className="inputLogin input-text"
                    type="Text"
                    placeholder="Phone number, username, or email"
                  />
                  <div className="position-relative">
                    <input
                      className="inputLogin mb-3 input-password"
                      type="Password"
                      onChange={onCheangeHandle}
                      placeholder="Password"
                    />
                    <span
                      onClick={onClickShow}
                      className="span-showPass position-absolute d-none"
                      style={{ top: ".5rem", right: ".7rem" }}
                    >
                      Show
                    </span>
                  </div>
                  <div className="form-check d-flex">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="SaveLoginInfo"
                    />
                    <label
                      className="form-check-label my-1 mx-2"
                      htmlFor="SaveLoginInfo"
                      style={{ fontSize: ".75rem" }}
                    >
                      Save login info
                    </label>
                  </div>
                  <Button
                    variant="primary"
                    className="fw-bold btn-submit"
                    disabled={true}
                  >
                    Log In
                  </Button>
                </form>
                <span className="p-3 d-block text-center">
                  <Link to="/accounts/password/reset" className="Forget-a">
                    Forget password?
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
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
  ModalNewAccount: state.Modal.NewAccount,
});
const mapDispatchToProps = (dispatch) => ({
  changeNewAccount: (data) => dispatch(changeNEWaccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);
