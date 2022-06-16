import { useEffect, useState } from "react";
import Post from "./post";

import { connect } from "react-redux";
import ShareModal from "../home/left/post/shareModal";
import MoreOptions from "../home/left/post/moreOptions";
import { RingLoader } from "react-spinners";
import FooterProfile from "../account/profile/footer";

const Explore = (props) => {
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let AllPosts = [];
    Array(1000)
      .fill({})
      .map(() => {
        AllPosts = [
          ...AllPosts,
          props.PostsAPI[Math.floor(Math.random() * props.PostsAPI.length)],
        ];
      });
    AllPosts = Array.from(new Set(AllPosts));
    setPosts(AllPosts);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return Loading ? (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <RingLoader size="30px" />
      </div>
      <FooterProfile />
    </>
  ) : (
    <>
      {Posts.length >= 1 ? (
        <>
          <div
            className="container p-0"
            style={{ marginTop: "5rem", maxWidth: "963px" }}
          >
            <div className="row ms-1 ms-md-4">
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[0]} />
                <Post size="sm" data={Posts[1]} />
              </div>
              <div className="col-8 p-0">
                <Post size="md" data={Posts[2]} />
              </div>
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[3]} />
                <Post size="sm" data={Posts[4]} />
              </div>
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[5]} />
                <Post size="sm" data={Posts[6]} />
              </div>
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[7]} />
                <Post size="sm" data={Posts[8]} />
              </div>
              <div className="col-8 p-0">
                <Post size="md" data={Posts[9]} />
              </div>
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[10]} />
                <Post size="sm" data={Posts[11]} />
              </div>
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[12]} />
              </div>
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[13]} />
              </div>
              <div className="col-4 p-0">
                <Post size="sm" data={Posts[14]} />
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center py-4">
              <RingLoader size="30px" />
            </div>
          </div>
          <ShareModal />
          <MoreOptions />
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  PostsAPI: state.Posts.Posts,
});

export default connect(mapStateToProps)(Explore);
