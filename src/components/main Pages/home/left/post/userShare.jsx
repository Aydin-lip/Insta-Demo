import { Component } from "react";

class UserShare extends Component {
  render() {
    return (
      <>
        <div className="d-flex align-items-center p-2 mx-1">
          <div>
            <img
              src="/imgs/profile/profileM.jpg"
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
              mahdi_ven12
            </a>
            <p className="text-muted mb-0" style={{ fontSize: ".75rem" }}>
              mahdi.p
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
  }
}

export default UserShare;
