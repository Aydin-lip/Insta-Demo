const LikePost = (props) => {
  return (
    <>
      <div className="d-flex p-2 cursor">
        <img
          src={props.data.relationship.avatar}
          width="44"
          height="44"
          alt="profile"
          className="rounded-circle"
        />
        <div className="d-flex align-items-center ms-2">
          <span className="fw-500 fs-09">{props.data.login.username}</span>
          <p className="ms-1 m-0 fs-09">like your post.</p>
          <span className="text-muted fs-09 ms-2">7h</span>
        </div>
        <img
          src={props.data.relationship.avatar}
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
