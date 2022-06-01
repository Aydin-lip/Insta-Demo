import Footer from "../footer/footer";
import User from "./user";
import { NavLink } from "react-router-dom";

import { changeNEWaccount } from "../../../useStateManager/actions/actions";
import { connect } from "react-redux";

const Account = (props) => {
  return (
    <>
      <div
        className="container mt-5 pt-5 position-fixed pe-0"
        style={{ width: "340px" }}
      >
        <div className="row">
          <div className="col d-flex align-items-center">
            <div className="">
              <NavLink
                to={`/${props.Account.username}`}
                className="text-black text-decoration-none"
              >
                <img
                  className="rounded-circle cursor"
                  src={props.Account.avatar}
                  width="55px"
                  height="55px"
                  alt="profile"
                />
              </NavLink>
            </div>
            <div className="name-acc">
              <NavLink
                to={`/${props.Account.username}`}
                className="tag-a-acc text-black text-decoration-none"
              >
                {props.Account.username}
              </NavLink>
              <p className="mb-0 text-muted">{props.Account.name}</p>
            </div>
            <div className="ms-auto">
              <span
                className="a-blue-right cursor"
                onClick={() => {
                  props.changeNewAccount(true);
                }}
              >
                Switch
              </span>
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
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});
const mapDispatchToProps = (dispatch) => ({
  changeNewAccount: (data) => dispatch(changeNEWaccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
