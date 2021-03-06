import { CommentsAPI } from "../actions/typeActions";
import axios from "axios";

let initialState = {
  Comments: [],
};

const CommentsAPIfunc = async () => {
  try {
    const response = await axios.get(
      "https://randomapi.com/api/a9f720e4de50b303e7d6708c62984f6f"
    );
    initialState.Comments = response.data.results[0].comments;
  } catch (error) {
    console.log(error);
  }
};
CommentsAPIfunc();

const Comments = (state = initialState, { type, payload }) => {
  switch (type) {
    case CommentsAPI:
      return { ...state, Comments: payload };

    default:
      return state;
  }
};

export default Comments;
