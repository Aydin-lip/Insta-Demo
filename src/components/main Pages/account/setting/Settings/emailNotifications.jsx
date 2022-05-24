const EmailNotifications = () => {
  document.title = "Notifications • Instagram";
  return (
    <>
      <div className="container ps-4 ms-3">
        <span className="fs-4">Subscribe to:</span>
        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checked3"
              defaultChecked
            />
            <label className="form-check-label fs-09 fw-500" htmlFor="checked3">
              Feedback Emails
            </label>
          </div>
          <span className="text-muted fs-09 d-block">
            Give feedback on Instagram.
          </span>
        </div>

        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checked4"
              defaultChecked
            />
            <label className="form-check-label fs-09 fw-500" htmlFor="checked4">
              Reminder emails
            </label>
          </div>
          <span className="text-muted fs-09 d-block">
            Get notifications you may have missed.
          </span>
        </div>

        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checked5"
              defaultChecked
            />
            <label className="form-check-label fs-09 fw-500" htmlFor="checked5">
              Product emails
            </label>
          </div>
          <span className="text-muted fs-09 d-block">
            Get tips about Instagram's tools.
          </span>
        </div>

        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checked6"
              defaultChecked
            />
            <label className="form-check-label fs-09 fw-500" htmlFor="checked6">
              News emails
            </label>
          </div>
          <span className="text-muted fs-09 d-block">
            Learn about new Instagram features.
          </span>
        </div>
      </div>
    </>
  );
};
export default EmailNotifications;
