import { Component } from "react";

class BoxPost extends Component {
  render() {
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
            <div className="ms-auto" style={{ cursor: "pointer" }}>
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
          <div className="">
            <img src="/imgs/post/post.jpg" alt="post" className="w-100" />
          </div>
          <div className="">
            <div className="p-2 m-1 d-flex">
              <div className="me-2">
                <a href="#">
                  <svg
                    aria-label="Like"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </a>
              </div>
              <div className="mx-2">
                <a href="#">
                  <svg
                    aria-label="Comment"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="mx-2">
                <a href="#">
                  <svg
                    aria-label="Share Post"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </svg>
                </a>
              </div>
              <div className="ms-auto">
                <a href="#">
                  <svg
                    aria-label="Save"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-2 m-1 py-0 fw-09500">
              <span>87 likes</span>
            </div>
            <div className="p-2 m-1 py-0 my-0">
              <p className="mb-0" style={{ fontSize: ".9rem" }}>
                <a
                  href="#"
                  className="text-decoration-none text-black pe-2 fw-09500"
                >
                  onlinetutorials_youtube
                </a>
                CSS Responsive Product Card Hover Effects Watch This :
                https://youtu.be/dcUK7KZ3Dmo All Source Code :
                https://www.patreon.com/onlinetutorials
              </p>
            </div>
            <div className="p-2 m-1 my-0" style={{ fontSize: ".9rem" }}>
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#8e8e8e" }}
              >
                View 1 comment
              </a>
            </div>
            <div
              className="p-2 m-1 pt-0 mt-0"
              style={{ color: "#8e8e8e", fontSize: ".65rem" }}
            >
              <span className="">37 MINUTES AGO</span>
            </div>
            <div
              className="border-top m-1 d-flex"
              style={{ maxHeight: "90px" }}
            >
              <div className="p-2">
                <svg
                  aria-label="Emoji"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="mb-0 border-0 bg-white w-100 input-comment"
                placeholder="Add a comment..."
              />
              <button className="text-primary ms-auto border-0 bg-white mt-1 fw-09500">
                Post
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default BoxPost;
