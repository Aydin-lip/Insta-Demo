import { combineReducers } from "redux";
import PostInformation from "./post";
import Modal from "./modal";
import Information from "./information";

export default combineReducers({
  Post: PostInformation,
  Modal: Modal,
  Information: Information,
});
