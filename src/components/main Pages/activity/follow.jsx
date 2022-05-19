const Follow = (props) => {
  return (
    <>
      <div className="d-flex p-2 cursor">
        <img
          src={props.data.Profile}
          width="44"
          height="44"
          alt="profile"
          className="rounded-circle"
        />
        <div className="d-flex align-items-center ms-2">
          <span className="fw-500 fs-09">{props.data.Name}</span>
          <p className="ms-1 m-0 fs-09">started following you.</p>
          <span className="text-muted fs-09 ms-2">{props.data.Time}</span>
        </div>
        <div className="ms-auto d-flex align-items-center">
          {props.data.Follow === "following" ? (
            <button className="btn btn-outline-dark fs-09 fw-500 py-1 px-2 border">
              Following
            </button>
          ) : (
            <button className="btn btn-primary fs-09 fw-500 py-1 px-2">
              Follow
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Follow;
