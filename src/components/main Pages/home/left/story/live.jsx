import { Component } from "react";

class Live extends Component {
  render() {
    return (
      <>
        <a
          href="#"
          className="text-decoration-none text-black position-relative"
          style={{ fontSize: ".75rem" }}
        >
          <div className="border-profile-story border-profile-story-live">
            <div className="border-white-story">
              <img
                className="rounded-circle filter-img-live"
                src="/imgs/profile/userProfile.jpg"
                width="56px"
                alt="profile"
              />
            </div>
          </div>
          <div className="iconLive">
            <span>LIVE</span>
          </div>
          <div className="text-center mt-1" style={{ width: "64px" }}>
            <span>programer</span>
          </div>
        </a>
      </>
    );
  }
}

export default Live;
