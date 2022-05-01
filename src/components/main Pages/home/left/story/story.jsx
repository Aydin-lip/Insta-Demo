import { Component } from "react";

class Story extends Component {
  render() {
    return (
      <>
        <a
          href="#"
          className="text-decoration-none text-black"
          style={{ fontSize: ".75rem" }}
        >
          <div className="border-profile-story">
            <div className="border-white-story">
              <img
                className="rounded-circle"
                src="/imgs/profile/leitoProfile.jpg"
                width="56px"
                alt="profile"
              />
            </div>
          </div>
          <div className="text-center mt-1" style={{ width: "64px" }}>
            <span>behzadleito</span>
          </div>
        </a>
      </>
    );
  }
}

export default Story;