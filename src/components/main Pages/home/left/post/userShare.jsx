const UserShare = (props) => {
  return (
    <>
      <div className="d-flex align-items-center p-2 mx-1">
        <div>
          <img
            src={props.data.relationship.avatar}
            width="45px"
            height="45px"
            className="rounded-circle"
            alt="profile"
          />
        </div>
        <div className="nameBio-user">
          <span
            className="text-decoration-none text-black"
            style={{ fontWeight: "600", letterSpacing: "0.5px" }}
          >
            {props.data.login.username}
          </span>
          <p className="text-muted mb-0" style={{ fontSize: ".75rem" }}>
            {props.data.name.first}
          </p>
        </div>
        <div className="ms-auto">
          <input
            type="checkbox"
            className="input-checkbox-share mb-0 me-4"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </>
  );
};

export default UserShare;
