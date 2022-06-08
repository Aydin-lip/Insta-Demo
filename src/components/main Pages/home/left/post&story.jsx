import { connect } from "react-redux";
import Posts from "./post/Posts";
import Storys from "./story/storys";

const PostStory = (props) => {
  return (
    <>
      <div
        className="pt-sm-4 mt-5 ms-lg-auto w-100"
        style={{ maxWidth: "470px" }}
      >
        <Storys />
        <Posts />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
  PostsAPI: state.Posts.Posts,
});

export default connect(mapStateToProps)(PostStory);
