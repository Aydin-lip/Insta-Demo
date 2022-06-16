import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import FooterProfile from "../footer";
import PostSavedAllPosts from "./post";
import AddSavedBox from "./addSaveBox";

import { connect } from "react-redux";
import { changeADDsavedBox } from "../../../../useStateManager/actions/actions";
import MoreOptions from "../../../home/left/post/moreOptions";
import ShareModal from "../../../home/left/post/shareModal";

const AllPosts = (props) => {
  const [Loading, setLoading] = useState(true);
  const [Posts, setPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let postsSaved = [];
    props.PostsAPI.filter((p) => {
      props.Saved.filter((s) => {
        if (p.id === s) {
          postsSaved.push(p);
        }
      });
    });
    setPosts(postsSaved);

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
      <div
        className="container p-0"
        style={{ marginTop: "5rem", maxWidth: "963px" }}
      >
        <div className="row ms-1 ms-md-4 h-100">
          <div className="text-start p-0 py-1">
            <div
              className="cursor d-inline-block"
              onClick={() => {
                navigate(`/${props.Account.username}/saved`, { replace: true });
              }}
            >
              <div
                className="d-inline-block "
                style={{ transform: "rotate(270deg)" }}
              >
                <svg
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                </svg>
              </div>
              <span className="fs-09 ms-2 fw-500 text-muted ">Saved</span>
            </div>
          </div>
          <div
            className="text-start fw-500 p-0 py-1"
            style={{ fontSize: "1.2rem" }}
          >
            AllPosts
          </div>
          {Posts.length >= 1 ? (
            <>
              {Posts.map((p, index) => (
                <div key={index} className="col-4 p-0">
                  <PostSavedAllPosts data={p} />
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="" style={{ height: "55vh" }}>
                <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                  <div className="noPost-AllPosts mb-2"></div>
                  <span className="h2 fw-light py-2">Start Saving</span>
                  <span className="fs-09">
                    Save photos and videos to your collection.
                  </span>
                  <span
                    className="text-primary fs-09 fw-500 mt-3 cursor"
                    onClick={() => {
                      props.changeAddSavedBox(true);
                    }}
                  >
                    Add to collection
                  </span>
                </div>
                <FooterProfile />
              </div>
            </>
          )}
        </div>
      </div>
      <AddSavedBox />
      <ShareModal />
      <MoreOptions />
    </>
  );
};

const mapStateToProps = (state) => ({
  PostsAPI: state.Posts.Posts,
  Saved: state.PostsInfor.Saved,
  Account: state.Information.Account,
});
const mapDispatchToProps = (dispatch) => ({
  changeAddSavedBox: (data) => dispatch(changeADDsavedBox(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
