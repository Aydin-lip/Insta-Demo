import { NavLink } from "react-router-dom";
import Followers from "./follow/followers";
import Following from "./follow/following";
import SettingProfile from "./setting";

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
            <SettingProfile />
          </div>
          <div className="py-3 mt-2 d-flex">
            <div className="me-4">
              <span className="me-1 fw-500">0</span>
              <span>posts</span>
            </div>
            <Followers Followers="4,398" />
            <Following Following="245" />
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
