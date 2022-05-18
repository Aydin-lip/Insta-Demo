import {
  changeModalShare,
  changeModalComment,
  changeModalMoreOption,
  changeNavbarWindow,
  changeNewPost,
  changeNewMessage,
} from "../actions/typeActions";

const initialState = {
  Share: false,
  Comment: false,
  MoreOption: [false, false, false],
  NavbarWindow: [true, false, false, false, false],
  NewMessage: false,
  AddNewPost: false,
};

const Modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case changeModalShare:
      return { ...state, Share: payload };

    case changeModalComment:
      return { ...state, Comment: payload };

    case changeModalMoreOption:
      return { ...state, MoreOption: payload };

    case changeNavbarWindow:
      return { ...state, NavbarWindow: payload };
    case changeNewMessage:
      return { ...state, NewMessage: payload };

    case changeNewPost:
      return { ...state, AddNewPost: payload };

    default:
      return state;
  }
};

export default Modal;
