import { Component } from "react";
import PostStory from "./left/post&story";
import Account from "./right/account";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container pe-0">
          <div className="row">
            <div className="col-12 d-flex justify-content-center col-lg-6 ms-auto px-0 ps-lg-3">
              <PostStory />
            </div>

            <div className="d-none d-lg-block col-5 me-5">
              <Account />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
