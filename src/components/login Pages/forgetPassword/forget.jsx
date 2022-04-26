import { Link } from "react-router-dom";
import Navbar from "./navbar";

const ForgetPass = () => {
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
                <input type="text" placeholder="Email, Phone, or Username" />
                <button className="btn btn-primary send-btn" disabled={true}>
                  Send Login Link
                </button>
              </div>
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

export default ForgetPass;
