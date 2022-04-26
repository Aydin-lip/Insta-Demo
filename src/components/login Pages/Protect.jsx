import { Component } from "react";
import Home from "../home";
import Login from "./login";

class Protect extends Component {
  constructor() {
    super();
    this.state = {
      account: "",
    };
  }
  componentDidMount() {
    let response = localStorage.getItem("account");
    this.setState({ account: response });
  }

  render() {
    return <>{this.state.account ? <Home /> : <Login />}</>;
  }
}

export default Protect;
