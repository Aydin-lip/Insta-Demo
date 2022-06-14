import { useEffect } from "react";
import { connect } from "react-redux";
import {
  COMMENTSapi,
  ERRORPOSTS,
  POSTSapi,
  SETfollowers,
  SETfollowing,
  USERSapi,
  LOGO,
} from "./useStateManager/actions/actions";

const SetState = (props) => {
  let LikePosts = [];
  let SavedPosts = [];
  const LikeSetPostsFunc = () => {
    let Like = props.PostsAPI;
    const num = (x) => {
      Like = Like.filter((p) => p.id !== x);
    };
    try {
      props.PostsAPI.map((p) => {
        if (props.Likes.length >= 1) {
          props.Likes.filter((n) => {
            if (p.id === n) {
              num(n);
              LikePosts = [
                ...LikePosts,
                {
                  ...p,
                  infor: { ...p.infor, saved: p.infor.saved, like: true },
                },
              ];
            }
          });
        }
      });
    } catch (error) {
      props.setError(true);
    }
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

  const setCommentsFunc = () => {
    props.CommentsAPI.filter((c) => {
      props.MeComments.filter((mc) => {
        if (c.id === mc.id) {
          let have = props.CommentsAPI.filter(
            (comment) => comment.id !== mc.id
          );
          let comments = c.comments;
          comments.push({
            username: props.Account.username,
            comment: mc.comment,
            like: mc.like,
          });
          have.push({ id: mc.id, comments: comments });
          props.changeCommentsAPI(have);
        }
      });
    });
  };

  const setFollowFunc = () => {
    let Users = props.UsersAPI;
    try {
      props.UsersAPI.filter((u) => {
        props.Followers.filter((fs) => {
          if (u.id === fs) {
            Users = Users.filter((user) => user.id !== u.id);
            Users = [
              ...Users,
              {
                ...u,
                follow: { ...u.follow, followers: true },
              },
            ];
          }
        });
      });
      Users.filter((u) => {
        props.Following.filter((fs) => {
          if (u.id === fs) {
            Users = Users.filter((user) => user.id !== u.id);
            Users = [
              ...Users,
              {
                ...u,
                follow: { ...u.follow, following: true },
              },
            ];
          }
        });
      });
    } catch (error) {
      props.setError(true);
    }
    props.changeUsersAPI(Users);
  };

  useEffect(() => {
    LikeSetPostsFunc();
    setCommentsFunc();
    setFollowFunc();
    props.setLogo(false);
  }, []);

  return <></>;
};

const mapStateToProps = (state) => ({
  Likes: state.PostsInfor.Likes,
  Saved: state.PostsInfor.Saved,
  UsersAPI: state.Users.Users,
  PostsAPI: state.Posts.Posts,
  CommentsAPI: state.Comments.Comments,
  MeComments: state.PostsInfor.Comments,
  Account: state.Information.Account,
  Followers: state.PostsInfor.Followers,
  Following: state.PostsInfor.Following,
});
const mapDispatchToProps = (dispatch) => ({
  setError: (data) => dispatch(ERRORPOSTS(data)),
  changeUsersAPI: (data) => dispatch(USERSapi(data)),
  changePostsAPI: (data) => dispatch(POSTSapi(data)),
  changeCommentsAPI: (data) => dispatch(COMMENTSapi(data)),
  changeFollowers: (data) => dispatch(SETfollowers(data)),
  changeFollowing: (data) => dispatch(SETfollowing(data)),
  setLogo: (data) => dispatch(LOGO(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetState);
