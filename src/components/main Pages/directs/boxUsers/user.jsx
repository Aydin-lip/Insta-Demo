const User = () => {
  return (
    <>
      <div className="cursor hover-user-search d-flex px-3 py-2">
        <div className="px-1 position-relative">
          <img
            src="/imgs/profile/leitoProfile.jpg"
            alt="profile photo"
            width="56px"
            height="56px"
            className="rounded-circle"
          />
          <div className="active-user"></div>
        </div>
        <div
          className="d-flex flex-column px-2 justify-content-center"
          style={{ fontSize: ".9rem" }}
        >
          <span>mahdi.p</span>
          <span className="text-muted">Active now</span>
        </div>
      </div>
    </>
  );
};

export default User;
