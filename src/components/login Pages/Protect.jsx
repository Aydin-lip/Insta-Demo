import { connect } from "react-redux";
import Main from "../main Pages/main";
import Login from "./login";

const Protect = (props) => {
  return <>{props.Loggin ? <Main /> : <Login />}</>;
};

const mapStateToProps = (state) => ({
  Loggin: state.Information.Loggin,
});

export default connect(mapStateToProps)(Protect);
