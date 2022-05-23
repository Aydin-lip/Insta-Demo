const UserFollowing = (props) => {
  return (
    <>
      <div className="d-flex px-3 py-2">
        <div className="pt-1">
          <img
            src={props.data.Profile}
            width="30"
            height="30"
            alt="profile"
            className="rounded-circle cursor"
          />
        </div>
        <div className="ms-2 ps-1 d-flex flex-column">
          <span className="fw-500 fs-09 cursor">{props.data.Username} </span>
          <span className="text-muted fs-08" style={{ marginTop: "-3px" }}>
            {props.data.Name}
          </span>
        </div>
        <div className="ms-auto">
          <button className="btn btn-outline-dark py-1 px-2 border fs-09 fw-500">
            Following
          </button>
        </div>
      </div>
    </>
  );
};

export default UserFollowing;
