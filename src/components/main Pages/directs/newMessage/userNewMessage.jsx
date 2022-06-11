const UserNewMessage = (props) => {
  return (
    <>
      <div className="d-flex align-items-center p-2 mx-1 hover-user-search cursor">
        <div>
          <img
            src={props.data.profile}
            width="45px"
            height="45px"
            className="rounded-circle"
            alt="profile"
          />
        </div>
        <div className="nameBio-user">
          <a
            href="#"
            className="text-decoration-none text-black"
            style={{ fontWeight: "600", letterSpacing: "0.5px" }}
          >
            {props.data.username}
          </a>
          <p className="text-muted mb-0" style={{ fontSize: ".75rem" }}>
            {props.data.name}
          </p>
        </div>
        <div className="ms-auto">
          <input
            type="checkbox"
            className="input-checkbox-share mb-0 me-3 cursor"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </>
  );
};

export default UserNewMessage;
