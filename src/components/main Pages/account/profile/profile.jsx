import FooterProfile from "./footer";
import ProfilePosts from "./posts/posts";
import SavedProfile from "./saved/saved";
import TaggedProfile from "./tagged/tagged";
import { NavLink, Routes, Route } from "react-router-dom";
import ProfileSmUp from "./smUp";
import ProfileSmDown from "./smDown";

const Profile = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <ProfileSmUp />
          <ProfileSmDown />

          <div className="bottom-profile">
            <div className="border-top w-100 d-none d-sm-flex w-100 justify-content-center">
              <button
                className="border-0 d-flex bg-none p-0 py-3 mx-4 fs-08 fw-500 position-relative btn-profile active-btn-profile"
                style={{ marginTop: "-1px", opacity: ".5" }}
              >
                <NavLink
                  to="/aydin.lip"
                  className="text-decoration-none text-black d-flex"
                >
                  <div
                    className="position-absolute top-0 bottom-0 end-0 start-0"
                    onClick={(event) => {
                      ActiveBtnAccountProfile(event);
                    }}
                  ></div>
                  <div className="d-flex mt-1 me-2">
                    <svg
                      color="#262626"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 24 24"
                      width="12"
                    >
                      <rect
                        fill="none"
                        height="18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        width="18"
                        x="3"
                        y="3"
                      ></rect>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="9.015"
                        x2="9.015"
                        y1="3"
                        y2="21"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="14.985"
                        x2="14.985"
                        y1="3"
                        y2="21"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="21"
                        x2="3"
                        y1="9.015"
                        y2="9.015"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="21"
                        x2="3"
                        y1="14.985"
                        y2="14.985"
                      ></line>
                    </svg>
                  </div>
                  <span>POSTS</span>
                </NavLink>
              </button>
              <button
                className="border-0 position-relative d-flex bg-none p-0 py-3 mx-4 px-3 fs-08 fw-500 btn-profile"
                style={{ marginTop: "-1px", opacity: ".5" }}
              >
                <NavLink
                  to="/aydin.lip/saved"
                  className="text-decoration-none text-black d-flex"
                >
                  <div
                    className="position-absolute top-0 bottom-0 end-0 start-0"
                    onClick={(event) => {
                      ActiveBtnAccountProfile(event);
                    }}
                  ></div>
                  <div className="d-flex mt-1 me-2">
                    <svg
                      color="#262626"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 24 24"
                      width="12"
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
                  </div>
                  <span>SAVED</span>
                </NavLink>
              </button>
              <button
                className="border-0 position-relative d-flex bg-none p-0 py-3 mx-4 fs-08 fw-500 btn-profile"
                style={{ marginTop: "-1px", opacity: ".5" }}
              >
                <NavLink
                  to="/aydin.lip/tagged"
                  className="text-decoration-none text-black d-flex"
                >
                  <div
                    className="position-absolute top-0 bottom-0 end-0 start-0"
                    onClick={(event) => {
                      ActiveBtnAccountProfile(event);
                    }}
                  ></div>
                  <div className="d-flex mt-1 me-2">
                    <svg
                      color="#262626"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 24 24"
                      width="12"
                    >
                      <path
                        d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <circle
                        cx="12.072"
                        cy="11.075"
                        fill="none"
                        r="3.556"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></circle>
                    </svg>
                  </div>
                  <span>TAGGED</span>
                </NavLink>
              </button>
            </div>

            <Routes>
              <Route
                path="/aydin.lip"
                element={
                  // <ProfilePosts data={{ Posts: [] }} />
                  <ProfilePosts
                    data={{
                      Posts: [
                        {
                          Post: [
                            "/imgs/profile/leitoProfile.jpg",
                            "/imgs/post/post-2.jpg",
                          ],
                          Likes: 32,
                          Comments: 7,
                        },
                        {
                          Post: ["/imgs/profile/profileM.jpg"],
                          Likes: 58,
                          Comments: 3,
                        },
                      ],
                    }}
                  />
                }
              />
              <Route path="/aydin.lip/saved" element={<SavedProfile />} />
              <Route path="/aydin.lip/tagged" element={<TaggedProfile />} />
            </Routes>

            <FooterProfile />
          </div>
        </div>
      </div>
    </>
  );
  function ActiveBtnAccountProfile(event) {
    const btns = document.querySelectorAll(".btn-profile");
    btns.forEach((b) => {
      b.classList.remove("active-btn-profile");
    });
    event.target.parentElement.parentElement.classList.add(
      "active-btn-profile"
    );
  }
};

export default Profile;
