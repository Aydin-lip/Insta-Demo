import { Component } from "react";
import Account from "./right/account";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-5 ms-auto"></div>

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
