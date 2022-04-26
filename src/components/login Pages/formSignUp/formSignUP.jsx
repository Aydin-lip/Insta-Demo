import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GetApp from "../getApp/getApp";

const FormSignUp = () => {
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

              <form className="form-signUp pt-2 px-4">
                <input
                  type="text"
                  className=""
                  placeholder="Mobile Number or Email"
                />
                <input type="text" className="" placeholder="Full Name" />
                <input type="text" className="" placeholder="Username" />
                <input
                  type="password"
                  className="mb-3"
                  placeholder="Password"
                />
                <button className="btn btn-primary btn-signUp" disabled={true}>
                  Sign up
                </button>
              </form>

              <div>
                <p className="bottom-btn-p">
                  By signing up, you agree to our
                  <a href="#"> Terms </a>,<a href="#"> Data </a>
                  <a href="#"> Policy </a>
                  and
                  <a href="#"> Cookies Policy .</a>
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

export default FormSignUp;
