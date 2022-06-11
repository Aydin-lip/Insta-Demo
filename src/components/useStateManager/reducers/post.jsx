import {
  PostsLikeInfor,
  PostsSavedInfor,
  Comments,
} from "../actions/typeActions";

const initialState = {
  Likes: [69, 70],
  Saved: [69, 70],
  Comments: [],
};

const PostInformation = (state = initialState, { type, payload }) => {
  switch (type) {
    case PostsLikeInfor:
      return { ...state, Likes: payload };

    case PostsSavedInfor:
      return { ...state, Saved: payload };

    case Comments:
      return { ...state, Comments: payload };

    default:
      return state;
  }
};

export default PostInformation;
