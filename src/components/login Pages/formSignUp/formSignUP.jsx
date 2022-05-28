import { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import GetApp from "../getApp/getApp";

import { ACCOUNT } from "../../useStateManager/actions/actions";
import { connect } from "react-redux";

const FormSignUp = (props) => {
  const [Disabled, setDisabled] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [Have, setHave] = useState(false);
  const [Message, setMessage] = useState(true);

  const Email = useRef();
  const FullName = useRef();
  const UserName = useRef();
  const Password = useRef();

  useEffect(() => {
    if (props.Account.have) {
      setMessage(false);
      setHave(true);
    }
  }, []);

  const onChangeInputs = () => {
    if (
      Email.current.value.length > 5 &&
      FullName.current.value.length > 2 &&
      UserName.current.value.length >= 8 &&
      Password.current.value.length >= 8
    ) {
      Have ? setDisabled(true) : setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const pattern = /^([a-zA-Z0-9\-._]+)@([a-z]+)(.[a-z]{2,5})(.[a-z]{2,3})?$/; // regex101.com
  const onClickSignUp = () => {
    let returns;
    if (pattern.test(Email.current.value)) {
      Email.current.style.border = "1px solid #dee2e6";
      returns = true;
    } else {
      Email.current.style.border = "1px solid #ff02029c";
      returns = false;
    }
    if (returns) {
      setDisabled(true);
      setLoading(true);
      setMessage(false);
      setTimeout(() => {
        setLoading(false);
        setHave(true);
        props.changeAccount({
          username: UserName.current.value,
          password: Password.current.value,
          email: Email.current.value,
          name: FullName.current.value,
          have: true,
        });
      }, 2000);
    }
  };
  return (
    <>
      <div className="row ps-2 pt-3">
        <div className="col-12 col-lg-7 ps-4">
          <div className="" style={{ width: "352px" }}>
            <div className="p-3 pb-0 boxs">
              <div className="logoInsta pb-2" style={{ cursor: "pointer" }}>
                <img src="/imgs/instaLogo/instaLogo.png" alt="instaLogo" />
              </div>

              <p className="p-singUp mb-0">
                Sign up to see photos and videos from your friends.
              </p>

              <form
                className="form-signUp pt-2 px-4"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input
                  type="text"
                  className="inputs-signUp"
                  placeholder="Email"
                  onChange={onChangeInputs}
                  ref={Email}
                />
                <input
                  type="text"
                  className="inputs-signUp"
                  placeholder="Full Name"
                  onChange={onChangeInputs}
                  ref={FullName}
                />
                <input
                  type="text"
                  className="inputs-signUp"
                  placeholder="Username"
                  onChange={onChangeInputs}
                  ref={UserName}
                />
                <input
                  type="password"
                  className="mb-3 inputs-signUp"
                  placeholder="Password"
                  onChange={onChangeInputs}
                  ref={Password}
                />
                <button
                  className="btn btn-primary btn-signUp"
                  onClick={onClickSignUp}
                  disabled={Disabled}
                >
                  {Loading ? <PulseLoader size="5px" margin="2px" /> : null}
                  {Have ? (
                    <span>
                      You have an account <i className="fa fa-check"></i>
                    </span>
                  ) : null}
                  {Message ? "Sign up" : null}
                </button>
              </form>

              <div>
                <p className="bottom-btn-p">
                  {Have ? (
                    <>
                      You have an account with this Information <br />
                      <Link to="/" className="mt-2 text-primary d-inline-block">
                        Click to go login page
                      </Link>
                    </>
                  ) : (
                    <>
                      By signing up, you agree to our
                      <a href="#"> Terms </a>,<a href="#"> Data </a>
                      <a href="#"> Policy </a>
                      and
                      <a href="#"> Cookies Policy .</a>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="boxs box-dontAccoutn p-4 text-center">
              <span>
                Have an account?
                <Link to="/" className="a-dontAccount">
                  Log in
                </Link>
              </span>
            </div>

            <GetApp />
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

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp);
