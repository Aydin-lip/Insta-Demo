import UserFollowing from "./userFollowing";
import { RingLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const BoxsFollowing = (props) => {
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
        <UserFollowing key={index} data={u} />
      ))}

      <div
        className="w-100 d-flex justify-content-center pt-3"
        style={{ height: "3rem" }}
      >
        <RingLoader size="20px" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
  Following: state.PostsInfor.Following,
});

export default connect(mapStateToProps)(BoxsFollowing);
