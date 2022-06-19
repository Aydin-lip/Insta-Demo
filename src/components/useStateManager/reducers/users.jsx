import { UsersAPI, ErrorUsers } from "../actions/typeActions";
import axios from "axios";

let initialState = {
  Users: {},
  Error: false,
};

const UsersAPIfunc = async () => {
  try {
    const response = await axios.get(
      "https://randomapi.com/api/537773fbe318ed2c578fc584a9c09493"
    );
    initialState.Users = response.data.results[0].users;
  } catch (error) {
    initialState.Error = true;
  }
};
UsersAPIfunc();

const Users = (state = initialState, { type, payload }) => {
  switch (type) {
    case UsersAPI:
      return { ...state, Users: payload };

    case ErrorUsers:
      return { ...state, Error: payload };

    default:
      return state;
  }
};

export default Users;
