import { useState, useEffect } from "react";
import { connect } from "react-redux";
import NoPost from "./noPost";
import PostProfile from "./post";

const UserPosts = (props) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    let Post = [];
    props.PostsAPI.filter((p) => {
      if (p.username === props.data.login.username) {
        Post.push(p);
      }
    });
    setPosts(Post);
  }, []);

  return (
    <>
      <div className="w-100 container p-0 px-sm-2">
        {Posts.length >= 1 ? (
          <div className="row">
            {Posts.map((p, i) => (
              <div key={i} className="col-4 p-0 pe-1 px-sm-2 h-100">
                <PostProfile data={p} />
              </div>
            ))}
          </div>
        ) : (
          <NoPost />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  PostsAPI: state.Posts.Posts,
});

export default connect(mapStateToProps)(UserPosts);
