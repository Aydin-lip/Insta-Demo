import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <>
      <NavLink to={props.data.link} className="text-black text-decoration-none">
        <div
          className="cursor hover-user-search d-flex px-3 py-2 userDirect"
          onClick={() => {
            const user = document.querySelector(".userDirect");
            user.style.backgroundColor = "rgba(231, 231, 231, 0.7)";
          }}
        >
          <div className="px-1 position-relative">
            <img
              src={props.data.profile}
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
            <span className="fw-500">{props.data.name}</span>
            <span className="text-muted">Active now</span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default User;
