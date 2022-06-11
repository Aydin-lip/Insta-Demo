import { combineReducers } from "redux";
import PostInformation from "./post";
import Modal from "./modal";
import Information from "./information";
import Users from "./users";
import Posts from "./posts";
import Comments from "./comments";
import Message from "./message";

export default combineReducers({
  PostsInfor: PostInformation,
  Modal: Modal,
  Information: Information,
  Users: Users,
  Posts: Posts,
  Comments: Comments,
  Message: Message,
});
