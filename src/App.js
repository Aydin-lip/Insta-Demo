import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./components/login Pages/style.css";

import ForgetPassword from "./components/login Pages/forgetPass";
import SignUp from "./components/login Pages/signUp";
import Protect from "./components/login Pages/Protect";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Protect />} />
        <Route path="/accounts/create" element={<SignUp />} />
        <Route path="/accounts/password/reset" element={<ForgetPassword />} />
      </Routes>
    );
  }
}
export default App;
