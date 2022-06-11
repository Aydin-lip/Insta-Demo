import { MessageDirect } from "../actions/typeActions";

const initialState = {
  Bot: [
    {
      id: 1,
      from: "me",
      message: "hi",
    },
    {
      id: 2,
      from: "to",
      message: "hi 🖐🙃",
    },
  ],
};

const Message = (state = initialState, { type, payload }) => {
  switch (type) {
    case MessageDirect:
      return { ...state, Bot: payload };

    default:
      return state;
  }
};

export default Message;
