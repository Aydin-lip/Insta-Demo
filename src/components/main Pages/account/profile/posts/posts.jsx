import { useState, useEffect } from "react";
import { connect } from "react-redux";
import NoPost from "./noPost";
import PostProfile from "./post";

const ProfilePosts = (props) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(props.PostsMe);
  });

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
  PostsMe: state.Information.Posts,
  Account: state.Information.Account,
});

export default connect(mapStateToProps)(ProfilePosts);
