import { NavLink } from "react-router-dom";

const ProfileSmUp = () => {
  return (
    <>
      <div
        className="row profile d-none d-sm-flex"
        style={{ marginTop: "6rem" }}
      >
        <div className="col-3">
          <div className="">
            <img
              src="/imgs/profile/profilePHOTO.jpg"
              width="150"
              height="150"
              alt="profile"
              className="rounded-circle"
            />
          </div>
        </div>
        <div className="col-8 ms-3 ps-5">
          <div className="d-flex">
            <h3 className="fw-light mb-0 me-2">aydin.lip</h3>
            <div className="mx-3">
              <button className="btn btn-outline-dark border fs-09 fw-500 py-1 px-2">
                Edit Profile
              </button>
            </div>
            <span className="cursor">
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
          <div className="py-3 mt-2 d-flex">
            <div className="me-4">
              <span className="me-1 fw-500">0</span>
              <span>posts</span>
            </div>
            <div className="mx-3 cursor">
              <span className="me-1 fw-500">4,398</span>
              <span>followers</span>
            </div>
            <div className="ms-4 cursor">
              <span className="me-1 fw-500">245</span>
              <span>following</span>
            </div>
          </div>
          <div className="mb-5">
            <div className="fw-500">
              <h6 className="mb-0" style={{ fontWeight: "600" }}>
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
        </div>
      </div>
    </>
  );
};

export default ProfileSmUp;
