import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RingLoader } from "react-spinners";
import BoxPost from "./boxPost";
import MoreOptions from "./moreOptions";
import ShareModal from "./shareModal";

const Posts = (props) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    let AllPosts = [];
    props.PostsAPI.map((item) => {
      Array(props.PostsAPI.length)
        .fill({})
        .map((num) => {
          let user = props.UsersAPI.filter((u) => u.follow.following === true);
          let sum = user[Math.floor(Math.random() * user.length)];
          if (item.username === sum.login.username) {
            AllPosts = [...AllPosts, item];
          }
        });
    });
    AllPosts = Array.from(new Set(AllPosts));
    setPosts(AllPosts);
  }, []);

  return (
    <>
      {Posts.map((p, index) => (
        <BoxPost key={index} data={p} />
      ))}
      <div className="w-100 d-flex justify-content-center align-items-center my-4">
        <RingLoader size="30px" />
      </div>
      <ShareModal />
      <MoreOptions />
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
  PostsAPI: state.Posts.Posts,
});

export default connect(mapStateToProps)(Posts);
