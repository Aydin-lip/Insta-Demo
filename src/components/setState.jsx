import { useEffect } from "react";
import { connect } from "react-redux";
import { POSTSapi, USERSapi } from "./useStateManager/actions/actions";

const SetState = (props) => {
  let LikePosts = [];
  let SavedPosts = [];
  const LikeSetPostsFunc = () => {
    let Like = props.PostsAPI;
    const num = (x) => {
      Like = Like.filter((p) => p.id !== x);
    };
    props.PostsAPI.map((p) => {
      if (props.Likes.length >= 1) {
        props.Likes.filter((n) => {
          if (p.id === n) {
            num(n);
            LikePosts = [
              ...LikePosts,
              { ...p, infor: { ...p.infor, saved: p.infor.saved, like: true } },
            ];
          }
        });
      }
    });
    for (let i = 0; i < Like.length; i++) {
      const element = Like[i];
      LikePosts.push(element);
    }

    let Save = LikePosts;
    const sum = (x) => {
      Save = Save.filter((p) => p.id !== x);
    };
    LikePosts.map((p) => {
      if (props.Saved.length >= 1) {
        props.Saved.filter((n) => {
          if (p.id === n) {
            sum(n);
            SavedPosts = [
              ...SavedPosts,
              { ...p, infor: { ...p.infor, like: p.infor.like, saved: true } },
            ];
          }
        });
      }
    });
    for (let i = 0; i < Save.length; i++) {
      const element = Save[i];
      SavedPosts.push(element);
    }
    props.changePostsAPI(SavedPosts);
  };

  useEffect(() => {
    LikeSetPostsFunc();
    // props.changePostsAPI(LikePosts);
  }, []);

  return <></>;
};

const mapStateToProps = (state) => ({
  Likes: state.PostsInfor.Likes,
  Saved: state.PostsInfor.Saved,
  UsersAPI: state.Users.Users,
  PostsAPI: state.Posts.Posts,
});
const mapDispatchToProps = (dispatch) => ({
  changeUsersAPI: (data) => dispatch(USERSapi(data)),
  changePostsAPI: (data) => dispatch(POSTSapi(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetState);
