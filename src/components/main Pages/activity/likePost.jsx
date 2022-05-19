const LikePost = (props) => {
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
          <p className="ms-1 m-0 fs-09">like your post.</p>
          <span className="text-muted fs-09 ms-2">{props.data.Time}</span>
        </div>
        <img
          src={props.data.Post}
          width="35"
          height="35"
          alt="post"
          className="ms-auto"
        />
      </div>
    </>
  );
};

export default LikePost;
