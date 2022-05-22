import { NavLink } from "react-router-dom";

const ProfileSmDown = () => {
  return (
    <>
      <div className="d-sm-none" style={{ marginTop: "4rem" }}>
        <div className="d-flex">
          <div className="p-2">
            <img
              src="/imgs/profile/profilePHOTO.jpg"
              width="77"
              height="77"
              alt="profile"
              className="rounded-circle"
            />
          </div>
          <div className="ms-3 w-100" style={{ maxWidth: "16rem" }}>
            <div className="d-flex">
              <h1 className="fw-light my-2">aydin.lip</h1>
              <span className="cursor p-2 ps-3">
                <svg
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="">
              <button className="btn btn-outline-dark w-100 border fs-09 fw-500 py-1 px-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="fs-08 ps-2 pt-3">
          <div className="fw-500">
            <h6 className="mb-0 fs-09" style={{ fontWeight: "600" }}>
              ★ॐ๏ ᙖᶤᵍ ᙖᵃᶰᵍ ๏ॐ★
            </h6>
          </div>
          <span className="text-muted">Gamer</span>
          <p className="">
            XoXo .🖤. Prickly🌵
            <br />
            -𝓜𝓸𝓻𝓭𝓪𝓭🔥
            <br />
            -тeнrαɴ🏩
            <br />
            -ωσℓƒ🐺
            <br />
            -кαямα♻️
            <br />
            -ℓeiтø🚀, tคtคl๏๏🚬, 𝕻𝖔𝖔𝖇𝖔𝖓🐺
            <br />
            -@6ix9ine 🌈💦🤟
            <br />
            More Active on ««Twitter»» ««Aydin_lip»»
          </p>
        </div>
        <div className="row border-top fs-09 p-2">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className="d-flex flex-column text-center"
              style={{ marginBottom: "-2px" }}
            >
              <span className="fw-500">0</span>
              <span className="text-muted">posts</span>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className="d-flex flex-column text-center cursor"
              style={{ marginBottom: "-2px" }}
            >
              <span className="fw-500">4,401</span>
              <span className="text-muted">followers</span>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div
              className="d-flex flex-column text-center cursor"
              style={{ marginBottom: "-2px" }}
            >
              <span className="fw-500">246</span>
              <span className="text-muted">following</span>
            </div>
          </div>
        </div>
        <div className="row border-top border-bottom">
          <button className="col-4 btn-profile-sm active-btn-profile-sm position-relative d-flex justify-content-center align-items-center p-2">
            <NavLink to="/aydin.lip">
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span className="">
                <svg
                  color="#0095f6"
                  fill="#0095f6"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
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
              </span>
            </NavLink>
          </button>
          <button className="col-4 btn-profile-sm position-relative d-flex justify-content-center align-items-center p-2">
            <NavLink to="/aydin.lip/saved">
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span className="">
                <svg
                  color="#0095f6"
                  fill="#0095f6"
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
              </span>
            </NavLink>
          </button>
          <button className="col-4 btn-profile-sm position-relative d-flex justify-content-center align-items-center p-2">
            <NavLink to="/aydin.lip/tagged">
              <div
                className="position-absolute top-0 end-0 bottom-0 start-0"
                onClick={(event) => {
                  ActiveBtnAccountProfileSm(event);
                }}
              ></div>
              <span className="">
                <svg
                  color="#0095f6"
                  fill="#0095f6"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
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
              </span>
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
  function ActiveBtnAccountProfileSm(event) {
    const btns = document.querySelectorAll(".btn-profile-sm");
    btns.forEach((b) => {
      b.classList.remove("active-btn-profile-sm");
    });
    event.target.parentElement.parentElement.classList.add(
      "active-btn-profile-sm"
    );
  }
};

export default ProfileSmDown;
