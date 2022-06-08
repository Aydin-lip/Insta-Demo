import { Component } from "react";

const User = (props) => {
  return (
    <>
      <div className="d-flex align-items-center div-user">
        <div>
          <img
            src={props.data.Profile}
            width="32px"
            height="32px"
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
            {props.data.Username}
          </a>
          <p className="text-muted mb-0" style={{ fontSize: ".75rem" }}>
            New to Instagram
          </p>
        </div>
        <div className="ms-auto">
          <a href="#" className="a-blue-right">
            Follow
          </a>
        </div>
      </div>
    </>
  );
};

export default User;
