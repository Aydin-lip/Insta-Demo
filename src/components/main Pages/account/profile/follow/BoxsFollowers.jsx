import { useState, useEffect } from "react";
import UserFollowers from "./userFollowers";

import { connect } from "react-redux";

const BoxFollowers = (props) => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    let user = [];
    props.UsersAPI.filter((u) => {
      props.Followers.filter((f) => {
        if (u.id === f) {
          user.push(u);
        }
      });
    });
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
  Followers: state.PostsInfor.Followers,
});

export default connect(mapStateToProps)(BoxFollowers);
