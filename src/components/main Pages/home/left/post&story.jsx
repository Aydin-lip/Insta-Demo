import { Component } from "react";
import Storys from "./story/storys";

class PostStory extends Component {
  render() {
    return (
      <>
        <div
          className="ms-auto"
          style={{ maxWidth: "470px", marginTop: "4.8rem" }}
        >
          <Storys />
        </div>
      </>
    );
  }
}

export default PostStory;
