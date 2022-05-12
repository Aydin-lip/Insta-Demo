import LikeCommentShare from "./like,comment,share";
import SendComment from "./sendComment";
import SwiperPost from "./swper";
import ShareModal from "./shareModal";
import Comments from "./comments";
import MoreOptions from "./moreOptions";

import { connect } from "react-redux";
import { changeMODALmoreOption } from "../../../../useStateManager/actions/actions";

const BoxPost = (props) => {
  return (
    <>
      <div className="mt-3 border bg-white" style={{ borderRadius: "8px" }}>
        <div
          className="d-flex aligm-items-center border-bottom rounded-3"
          style={{ padding: ".8rem" }}
        >
          <a href="#">
            <img
              src="/imgs/profile/user2.jpg"
              width="32px"
              alt="profilr"
              className="rounded-circle"
            />
          </a>
          <a
            href="#"
            className="text-decoration-none text-black ps-2 pt-1 fw-09500"
          >
            <span>onlinetutorials_youtube</span>
          </a>
          <div
            className="options-more ms-auto cursor"
            onClick={() => {
              props.changeMoreOption([true, true, false]);
            }}
          >
            <svg
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
        <div>
          <SwiperPost />
        </div>
        <div>
          <LikeCommentShare />
          <div className="p-2 m-1 py-0 my-0">
            <p className="mb-0" style={{ fontSize: ".9rem" }}>
              <a href="#" className="text-black pe-2 fw-09500 comment-tag">
                onlinetutorials_youtube
              </a>
              CSS Responsive Product Card Hover Effects Watch This :
              https://youtu.be/dcUK7KZ3Dmo All Source Code :
              https://www.patreon.com/onlinetutorials
            </p>
          </div>
          <div className="p-2 m-1 my-0" style={{ fontSize: ".9rem" }}>
            <span
              className="text-decoration-none cursor view-comments"
              style={{ color: "#8e8e8e" }}
            >
              View All 5 comments
            </span>
          </div>
          <div
            className="p-2 m-1 py-0 my-0"
            style={{ color: "#8e8e8e", fontSize: ".65rem" }}
          >
            <span className="">37 MINUTES AGO</span>
          </div>
          <SendComment />
        </div>
      </div>
      {/* {this.state.show ? (
        <MorOptions show="true" unFollow="false" main="true" />
      ) : null}
      {this.state.show
        ? setTimeout(() => {
            this.setState({ show: false });
          }, 10000)
        : null} */}
      <br />
      <br />
      <br />
      <ShareModal />
      <Comments />
      <MoreOptions />
    </>
  );
};

const mapStateToProps = (state) => ({
  MoreOption: state.Modal.MoreOption,
});
const mapDispatchToProps = (dispatch) => ({
  changeMoreOption: (data) => dispatch(changeMODALmoreOption(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxPost);
