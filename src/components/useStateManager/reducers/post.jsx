import {
  PostsLikeInfor,
  PostsSavedInfor,
  Comments,
  Followers,
  Following,
} from "../actions/typeActions";

const initialState = {
  Likes: [69, 70],
  Saved: [69, 70],
  Comments: [],
  Followers: [69, 70, 1, 6, 8, 3, 9, 12, 19, 2, 7, 10, 16, 18, 13],
  Following: [69, 70, 7, 9, 1, 5, 18, 20, 13],
};

const PostInformation = (state = initialState, { type, payload }) => {
  switch (type) {
    case PostsLikeInfor:
      return { ...state, Likes: payload };

    case PostsSavedInfor:
      return { ...state, Saved: payload };

    case Comments:
      return { ...state, Comments: payload };

    case Followers:
      return { ...state, Followers: payload };

    case Following:
      return { ...state, Following: payload };

    default:
      return state;
  }
};

export default PostInformation;
