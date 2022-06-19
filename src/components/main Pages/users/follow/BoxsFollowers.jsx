import { useState, useEffect } from "react";
import UserFollowers from "./userFollowers";

import { connect } from "react-redux";

const BoxFollowers = (props) => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    let user = [];
    Array(20)
      .fill({})
      .map((x) => {
        user.push(
          props.UsersAPI[Math.floor(Math.random() * props.UsersAPI.length)]
        );
      });
    user = Array.from(new Set(user));
    setUsers(user);
  }, []);

  return (
    <>
      {Users.map((u, index) => (
        <UserFollowers key={index} data={u} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
});

export default connect(mapStateToProps)(BoxFollowers);
