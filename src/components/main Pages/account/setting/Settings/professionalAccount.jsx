const ProfessionalAccount = () => {
  document.title = "Professional Account • Instagram";
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-sm-3 pe-4 ps-1 text-sm-end">
            <span className="fw-500">Category</span>
          </div>
          <div
            className="col-12 col-sm-9 d-flex flex-column ps-2 p-0"
            style={{ maxWidth: "360px" }}
          >
            <span className="fs-09">Programer</span>
            <span className="fs-09 text-primary fw-500 cursor">Change</span>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checked2"
              />
              <label
                className="form-check-label fw-500 fs-09"
                htmlFor="checked2"
              >
                Show category on profile
              </label>
            </div>
            <div className="py-2">
              <button
                className="btn btn-primary fs-09 fw-500 py-1 ps-2"
                disabled
              >
                Submit
              </button>
            </div>
            <span className="fs-09 fw-500 text-primary mt-2 cursor">
              Switch to business account
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalAccount;
