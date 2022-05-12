import { changePostInformation } from "../actions/typeActions";

const initialState = {
  Post: [
    { id: 1, Like: false },
    { id: 2, Save: false },
    { id: 3, LikeComment: false },
  ],
};

const PostInformation = (state = initialState, { type, payload }) => {
  switch (type) {
    case changePostInformation:
      let filterLike = state.Post.filter((item) => item.id !== payload.id);
      let num = filterLike.concat([payload]);
      return { ...state, Post: num };

    default:
      return state;
  }
};

export default PostInformation;
