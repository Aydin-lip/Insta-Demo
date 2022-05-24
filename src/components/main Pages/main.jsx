import Profile from "./account/profile/profile";
import Settings from "./account/setting/settings";
import NewPost from "./addPost/newPost";
import DirectInbox from "./directs/inbox";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import "./style.css";

const Main = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <DirectInbox /> */}
      {/* <Profile /> */}
      <Settings />
      <NewPost />
    </>
  );
};

export default Main;
