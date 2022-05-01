import { Component } from "react";
import Footer from "../footer/footer";
import User from "./user";

class Account extends Component {
  render() {
    return (
      <>
        <div
          className="container mt-5 pt-5 position-fixed pe-0"
          style={{ width: "340px" }}
        >
          <div className="row">
            <div className="col d-flex align-items-center">
              <div className="">
                <img
                  className="rounded-circle"
                  src="/imgs/profile/profilePHOTO.jpg"
                  width="55px"
                  height="55px"
                  alt="profile"
                />
              </div>
              <div className="name-acc">
                <a href="#" className="tag-a-acc">
                  aydin.lip
                </a>
                <p className="mb-0 text-muted">★ॐ๏ ᙖᶤᵍ ᙖᵃᶰᵍ ๏ॐ★</p>
              </div>
              <div className="ms-auto">
                <a href="#" className="a-blue-right">
                  Switch
                </a>
              </div>
            </div>
          </div>
          <div className="see-all-right">
            <p className="text-muted mb-0">Suggestions For You</p>
            <a
              href="#"
              className="ms-auto text-decoration-none text-black"
              style={{ fontSize: ".75rem" }}
            >
              See All
            </a>
          </div>
          <User />
          <User />
          <User />
          <User />
          <User />
          <Footer />
        </div>
      </>
    );
  }
}

export default Account;
