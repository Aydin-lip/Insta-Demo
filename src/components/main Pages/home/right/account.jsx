import Footer from "../footer/footer";
import User from "./user";
import { NavLink } from "react-router-dom";

import { changeNEWaccount } from "../../../useStateManager/actions/actions";
import { connect } from "react-redux";

const Account = (props) => {
  let Users = [];
  props.UsersAPI.map((item) => {
    Array(props.UsersAPI.length)
      .fill({})
      .map((num) => {
        let sum = Math.floor(Math.random() * props.UsersAPI.length);
        if (item.id === sum) {
          Users = [...Users, item];
        }
      });
  });
  Users = Users.filter((item) => item.follow.following === false);
  Users = Array.from(new Set(Users));
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
          <span className="ms-auto cursor" style={{ fontSize: ".75rem" }}>
            See All
          </span>
        </div>
        {Users.map((u, index) => {
          if (index <= 4) {
            return <User key={index} data={u} />;
          }
        })}
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
  UsersAPI: state.Users.Users,
});
const mapDispatchToProps = (dispatch) => ({
  changeNewAccount: (data) => dispatch(changeNEWaccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
