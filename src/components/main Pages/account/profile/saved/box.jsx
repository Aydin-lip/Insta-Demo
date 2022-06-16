import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const SavedBox = (props) => {
  const [Saved, setSaved] = useState([]);
  props.PostsAPI.filter((p) => {
    props.Saved.filter((s) => {
      if (s === p.id) {
        if (Saved.length < 4) {
          let num = Saved;
          num.push(p.postsUrl[0]);
          setSaved(num);
        }
      }
    });
  });
  if (Saved.length === 0) {
    setSaved(["white"]);
  }

  return (
    <>
      <div className="col-12 col-md-6 col-xl-4 p-0 px-xl-2 h-100 d-flex justify-content-center">
        <div
          className="rounded position-relative mb-4"
          style={{
            width: "300px",
            height: "300px",
            background: "linear-gradient(0deg, #5a5a5a , transparent)",
          }}
        >
          <NavLink to={`all-posts`}>
            <div className="position-absolute top-0 end-0 bottom-0 start-0 box-saved-hover"></div>
          </NavLink>
          <span
            className="position-absolute text-white fw-500"
            style={{ bottom: ".5rem", left: "1.2rem", fontSize: "1.2rem" }}
          >
            All Posts
          </span>
          <div className="d-flex mb-2p w-100" style={{ height: "49.5%" }}>
            <div
              className="saved-box-img img1 me-2p"
              style={{ backgroundImage: `url(${Saved[0]})` }}
            ></div>
            <div
              className="saved-box-img img2"
              style={{ backgroundImage: `url(${Saved[1]})` }}
            ></div>
          </div>
          <div className="d-flex mb-2p w-100" style={{ height: "49.5%" }}>
            <div
              className="saved-box-img img3 me-2p"
              style={{ backgroundImage: `url(${Saved[2]})` }}
            ></div>
            <div
              className="saved-box-img img4"
              style={{ backgroundImage: `url(${Saved[3]})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
  Saved: state.PostsInfor.Saved,
  PostsAPI: state.Posts.Posts,
});

export default connect(mapStateToProps)(SavedBox);
