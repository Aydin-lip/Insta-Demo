const ChangePassword = () => {
  document.title = "Change Password • Instagram";
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-2 col-sm-3 pe-0 pe-sm-4 d-flex">
            <div className="ms-auto">
              <img
                src="/imgs/profile/leitoProfile.jpg"
                width="38"
                height="38"
                alt="profile"
                className="rounded-circle cursor"
              />
            </div>
          </div>
          <div className="col-9 ps-2">
            <h4 className="mb-0" style={{ fontWeight: "400" }}>
              aydin.lip
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
            />
          </div>

          <div className="col-12 col-sm-3 pe-4 text-sm-end">
            <span className="fw-500">Confirm New Password</span>
          </div>
          <div
            className="col-12 col-sm-9 ps-2 p-0"
            style={{ maxWidth: "440px" }}
          >
            <input type="password" className="m-0 w-100 py-2 px-3 rounded-3" />
            <div className="">
              <button
                className="btn btn-primary fs-09 fw-500 py-1 ps-2"
                style={{ margin: "2rem 0" }}
                disabled
              >
                Change Password
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

export default ChangePassword;
