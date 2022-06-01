import { Loggin, Account } from "../actions/typeActions";

const initialState = {
  Account: {
    username: "",
    password: "",
    email: "",
    name: "",
    have: false,
    avatar: "/imgs/profile/myProfile.jpg",
    bio: `👨🏻‍💻 Welcome to the world of Programmers! \n
    📊 Sponsored Post/Story: DM \n
    ⚠️ The coolest gadgets for programmer!`,
    rul: "Programer",
    phone: "",
    gender: "Custom",
    website: "",
  },
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
