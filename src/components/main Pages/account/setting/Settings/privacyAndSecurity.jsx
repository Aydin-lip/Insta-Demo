const PrivacyAndSecurity = () => {
  document.title = "Privacy and Security • Instagram";
  return (
    <>
      <div className="container ">
        <div className="border-bottom">
          <span className="fs-4">Account Privacy</span>
          <div className="form-check mb-2 mt-3">
            <input className="form-check-input" type="checkbox" id="Account" />
            <label className="form-check-label fs-09 fw-500 " htmlFor="Account">
              Private Account
            </label>
          </div>
          <p className="text-muted fs-09 mb-4 d-block">
            When your account is private, only people you approve can see your
            photos and videos on Instagram. Your existing followers won't be
            affected.
          </p>
        </div>

        <div className="border-bottom mt-3">
          <span className="fs-4">Activity Status</span>
          <div className="form-check mt-2 mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="Activity"
              defaultChecked
            />
            <label
              className="form-check-label fs-09 fw-500 "
              htmlFor="Activity"
            >
              Show Activity Status
            </label>
          </div>
          <p className="text-muted fs-09 mb-1 d-block">
            Allow accounts you follow and anyone you message to see when you
            were last active or are currently active on Instagram apps. When
            this is turned off, you won't be able to see the activity status of
            other accounts.
            <span className="text-primary cursor"> Learn more</span>
          </p>
          <p className="text-muted fs-09 mb-4 d-block">
            You can continue to use our services if active status is off.
          </p>
        </div>

        <div className="border-bottom mt-3">
          <span className="fs-4">Story Sharing</span>
          <div className="form-check mt-2 mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="StorySharing"
              defaultChecked
            />
            <label
              className="form-check-label fs-09 fw-500 "
              htmlFor="StorySharing"
            >
              Allow Sharing
            </label>
          </div>
          <p className="text-muted fs-09 mb-4 d-block">
            Let people share your story as messages
          </p>
        </div>

        <div className="border-bottom mt-3">
          <span className="fs-4">Comments</span>
          <span className="text-primary cursor fw-500 fs-09 mb-4 mt-3 d-block">
            Edit Comment Settings
          </span>
        </div>

        <div className="border-bottom mt-3">
          <span className="fs-4">Photos of You</span>
          <div className="mt-3 mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Photos"
                id="Photo1"
              />
              <label className="form-check-label fs-09 fw-500" htmlFor="Photo1">
                Add Automatically
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Photos"
                id="Photo2"
                defaultChecked
              />
              <label className="form-check-label fs-09 fw-500" htmlFor="Photo2">
                Add Manually
              </label>
            </div>
            <p className="text-muted fs-09">
              Choose how you want photos of you added to your profile.
              <span className="text-muted cursor">Learn more</span> about Photos
              of You.
            </p>
          </div>
        </div>

        <div className="border-bottom mt-3">
          <span className="fs-4">Two-Factor Authentication</span>
          <span className="text-primary cursor fw-500 fs-09 mb-4 mt-3 d-block">
            Edit Two-Factor Authentication Setting
          </span>
        </div>

        <div className="border-bottom mt-3">
          <span className="fs-4">Data Download</span>
          <span className="text-primary cursor fw-500 fs-09 mb-4 mt-3 d-block">
            Request Download
          </span>
        </div>

        <div className=" mt-3">
          <span className="fs-4">Privacy and Security Help</span>
          <span className="text-primary cursor fw-500 fs-09 mb-4 mt-3 d-block">
            Support
          </span>
        </div>
      </div>
    </>
  );
};

export default PrivacyAndSecurity;
