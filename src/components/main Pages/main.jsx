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
      <DirectInbox />
      <NewPost />
    </>
  );
};

export default Main;
