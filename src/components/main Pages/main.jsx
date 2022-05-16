import DirectInbox from "./direct/inbox";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import "./style.css";

const Main = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <DirectInbox />
    </>
  );
};

export default Main;
