const PushNotifications = () => {
  document.title = "puch Notifications • Instagram";

  return (
    <>
      <div>
        <div className="border-bottom">
          <span className="fs-4">Likes</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="Likes1"
              />
              <label className="form-check-label fs-09 fw-500" htmlFor="Likes1">
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="Likes2"
              />
              <label className="form-check-label fs-09 fw-500" htmlFor="Likes2">
                From People I Follow
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="Likes3"
                defaultChecked
              />
              <label className="form-check-label fs-09 fw-500" htmlFor="Likes3">
                From Everyone
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              johnappleseed liked your photo.
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Comments</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Comments"
                id="Comments1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Comments1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Comments"
                id="Comments2"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Comments2"
              >
                From People I Follow
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Comments"
                id="Comments3"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Comments3"
              >
                From Everyone
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              johnappleseed commented: "Nice shot!"
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Comment Likes</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Photo"
                id="CommentLikes1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="CommentLikes1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Photo"
                id="CommentLikes2"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="CommentLikes2"
              >
                From People I Follow
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              johnappleseed liked your comment: "Nice shot!"
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Likes and Comments on Photos of You</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Photo"
                id="Photos1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Photos1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Photo"
                id="Photos2"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Photos2"
              >
                From People I Follow
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Photo"
                id="Photos3"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Photos3"
              >
                From Everyone
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              johnappleseed commented on a post you're tagged in.
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Accepted Follow Requests</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="FollowRequests"
                id="FollowRequests1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="FollowRequests1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="FollowRequests"
                id="FollowRequests3"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="FollowRequests3"
              >
                From Everyone
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              John Appleseed (johnappleseed) accepted your follow request.
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Instagram Direct Requests</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="DirectRequests"
                id="DirectRequests1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="DirectRequests1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="DirectRequests"
                id="DirectRequests3"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="DirectRequests3"
              >
                From Everyone
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              johnappleseed wants to send you a message.
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Reminders</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Reminders"
                id="Reminders1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Reminders1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Reminders"
                id="Reminders3"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="Reminders3"
              >
                From Everyone
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              You have unseen notifications, and other similar notifications.
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">First Posts and Stories</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="PostStory"
                id="PostStory1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="PostStory1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="PostStory"
                id="PostStory2"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="PostStory2"
              >
                From People I Follow
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="PostStory"
                id="PostStory3"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="PostStory3"
              >
                From Everyone
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              See johnappleseed's first story on Instagram, and other similar
              notifications.
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Video View Counts</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Videi"
                id="Video1"
              />
              <label className="form-check-label fs-09 fw-500" htmlFor="Video1">
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Videi"
                id="Video3"
                defaultChecked
              />
              <label className="form-check-label fs-09 fw-500" htmlFor="Video3">
                Your video has more than 100K views.
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              John Appleseed (johnappleseed) accepted your follow request.
            </span>
          </div>
        </div>

        <div className="border-bottom mt-4">
          <span className="fs-4">Support Requests</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="SupportRequests"
                id="SupportRequests1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="SupportRequests1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="SupportRequests"
                id="SupportRequests3"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="SupportRequests3"
              >
                On
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              Your support request from July 10 was just updated.
            </span>
          </div>
        </div>

        <div className="">
          <span className="fs-4">Live Videos</span>
          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="LiveVideus"
                id="LiveVideus1"
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="LiveVideus1"
              >
                Off
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="LiveVideus"
                id="LiveVideus3"
                defaultChecked
              />
              <label
                className="form-check-label fs-09 fw-500"
                htmlFor="LiveVideus3"
              >
                On
              </label>
            </div>
            <span className="text-muted fs-09 mb-3 d-block">
              johnappleseed started a live video. Watch it before it ends!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PushNotifications;
