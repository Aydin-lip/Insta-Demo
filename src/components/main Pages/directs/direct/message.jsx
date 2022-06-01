const Message = (props) => {
  return props.data.Sender === "me" ? (
    <>
      <div className="w-100 d-flex">
        <div
          className="px-3 py-2 ms-auto mb-2 position-relative"
          style={{
            backgroundColor: "#f1f1f1",
            minHeight: "45px",
            maxWidth: "245px",
            borderRadius: "25px",
          }}
          onDoubleClick={doubleClick}
        >
          <p className="mb-0 py-1" style={{ fontSize: ".9rem" }}>
            {props.data.Text}
          </p>
          <div className="LikeMessage cursor d-none end-0">
            <span>❤</span>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="w-100 d-flex">
        <div className="d-flex align-items-end px-2">
          <img
            src={props.data.Profile}
            width="24px"
            height="24px"
            alt="profile"
            className="rounded-circle cursor"
          />
        </div>
        <div
          className="bg-white px-3 py-2 me-auto mb-2 border position-relative"
          style={{
            minHeight: "45px",
            maxWidth: "245px",
            borderRadius: "25px",
          }}
          onDoubleClick={doubleClick}
        >
          <p className="mb-0 py-1" style={{ fontSize: ".9rem" }}>
            {props.data.Text}
          </p>
          <div className="LikeMessage cursor d-none start-0">
            <span>❤</span>
          </div>
        </div>
      </div>
    </>
  );

  function doubleClick() {
    const likeMessage = document.querySelectorAll(".LikeMessage");
    let like = props.data.Sender === "me" ? likeMessage[1] : likeMessage[0];
    like.classList.toggle("d-none");
  }
};

export default Message;
