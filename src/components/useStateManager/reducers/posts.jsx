import { PostsAPI, ErrorPosts } from "../actions/typeActions";
import axios from "axios";

let initialState = {
  Posts: {},
  Error: false,
};

const PostsAPIfunc = async () => {
  try {
    const response = await axios.get(
      "https://randomapi.com/api/5da445885005e68d26ae76be2eef5544"
    );
    initialState.Posts = response.data.results[0].posts;
    console.log(initialState.Posts);
  } catch (error) {
    initialState.Error = true;
  }
};
PostsAPIfunc();

const Posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case PostsAPI:
      return { ...state, Posts: payload };

    case ErrorPosts:
      return { ...state, Error: payload };

    default:
      return state;
  }
};
export default Posts;
