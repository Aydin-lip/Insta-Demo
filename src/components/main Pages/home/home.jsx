import { Component } from "react";
import PostStory from "./left/post&story";
import Account from "./right/account";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container pe-0">
          <div className="row">
            <div className="col-6 ms-auto pe-0">
              <PostStory />
            </div>

            <div className="col-5 me-5">
              <Account />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
