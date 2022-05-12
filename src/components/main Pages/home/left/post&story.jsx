import { Component } from "react";
import BoxPost from "./post/boxPost";
import Storys from "./story/storys";

class PostStory extends Component {
  render() {
    return (
      <>
        <div
          className="pt-sm-4 mt-5 ms-lg-auto w-100"
          style={{ maxWidth: "470px" }}
        >
          <Storys />
          <BoxPost />
        </div>
      </>
    );
  }
}

export default PostStory;
