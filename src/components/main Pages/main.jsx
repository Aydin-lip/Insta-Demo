import { connect } from "react-redux";
import { Route, Routes, Outlet } from "react-router-dom";
import "./style.css";

import Navbar from "./navbar/navbar";
import Home from "./home/home";
import NewAccount from "./directs/addAccount/newAccount";

const Main = (props) => {
  return (
    <>
      <Navbar />
      <NewAccount />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});

export default connect(mapStateToProps)(Main);
