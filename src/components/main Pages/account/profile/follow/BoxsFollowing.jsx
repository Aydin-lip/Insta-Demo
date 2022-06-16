import UserFollowing from "./userFollowing";
import { RingLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SetState from "../../../../setState";

const BoxsFollowing = (props) => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    let user = [];
    props.UsersAPI.filter((u) => {
      props.Following.filter((f) => {
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
