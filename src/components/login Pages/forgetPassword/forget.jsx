import { useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Navbar from "./navbar";

const ForgetPass = (props) => {
  const [Disabled, setDisabled] = useState(true);
  const [Show, setShow] = useState(false);
  const [User, setUser] = useState(false);
  const [Loading, setLoading] = useState(false);

  const UserName = useRef();

  const changeInput = () => {
    if (UserName.current.value.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const clickFotgetPassword = () => {
    setLoading(true);
    setTimeout(() => {
      if (
        UserName.current.value === props.Account.username ||
        UserName.current.value === props.Account.email
      ) {
        setShow(true);
        setUser(false);
      } else {
        setUser(true);
        setShow(false);
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="container p-0">
        <div className="row justify-content-center mt-5 pt-2">
          <div className="col-12 p-0 px-sm-4" style={{ width: "475px" }}>
            <div className="border border-bottom-0 rounded-top bg-white mx-lg-3 mt-5 py-3 px-5">
              <div className="d-flex justify-content-center pt-1 pb-2">
                <div className="lock"></div>
              </div>
              <div className="text-center my-1">
                <h6>Trouble Logging In?</h6>
                <p className="text-muted mb-0" style={{ fontSize: ".85rem" }}>
                  Enter your email, phone, or username and we'll <br /> send you
                  a link to get back into your account.
                </p>
              </div>
              <div className="box-input pt-2">
                <input
                  type="text"
                  ref={UserName}
                  onChange={changeInput}
                  placeholder="Email, or Username"
                />
                <button
                  className="btn btn-primary send-btn"
                  onClick={clickFotgetPassword}
                  disabled={Disabled}
                >
                  {Loading ? (
                    <PulseLoader size="5px" margin="2px" />
                  ) : (
                    "Send Login Link"
                  )}
                </button>
              </div>
              {User ? (
                <>
                  <span className="fs-08 text-danger d-block text-center mt-3 fw-500">
                    The username you entered doesn't belong to an account.
                    Please check your username and try again.
                  </span>
                </>
              ) : null}
              {Show ? (
                <>
                  <span className="fs-08 text-primary d-block text-center mt-3 fw-500">
                    Your Account Password:
                    <span className="fs-09 ms-1 fw-500">
                      {props.Account.password}
                    </span>
                  </span>
                </>
              ) : null}
              <div className="row mt-3 pt-2 text-muted">
                <div className="col-5">
                  <hr />
                </div>
                <div className="col-2 text-OR"> OR </div>
                <div className="col-5">
                  <hr />
                </div>
              </div>
              <div className="text-center mb-5 pb-3">
                <Link to="/accounts/create" className="text-black creat">
                  Create New Account
                </Link>
              </div>
            </div>

            <div className="mx-lg-3 border rounded-bottom border-top-0">
              <Link to="/">
                <button
                  className="border creat w-100"
                  style={{ padding: "0.7rem 0rem", backgroundColor: "#fafafa" }}
                >
                  Back To Login
                </button>
              </Link>
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

export default connect(mapStateToProps)(ForgetPass);
