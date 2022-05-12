import {
  changeModalShare,
  changeModalComment,
  changeModalMoreOption,
} from "../actions/typeActions";

const initialState = {
  Share: false,
  Comment: false,
  MoreOption: [false, false, false],
};

const Modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case changeModalShare:
      return { ...state, Share: payload };

    case changeModalComment:
      return { ...state, Comment: payload };

    case changeModalMoreOption:
      return { ...state, MoreOption: payload };

    default:
      return state;
  }
};

export default Modal;
