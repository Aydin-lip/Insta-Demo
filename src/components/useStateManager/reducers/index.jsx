import { combineReducers } from "redux";
import PostInformation from "./post";
import Modal from "./modal";

export default combineReducers({
  Post: PostInformation,
  Modal: Modal,
});
