import { Loggin, Account } from "../actions/typeActions";

const initialState = {
  Account: { username: "", password: "", email: "", name: "", have: false },
  Loggin: false,
};

const Information = (state = initialState, { type, payload }) => {
  switch (type) {
    case Account:
      return { ...state, Account: payload };
    case Loggin:
      return { ...state, Loggin: payload };

    default:
      return state;
  }
};

export default Information;
