import { connect } from "react-redux";
import { changeNEWmessage } from "../../../useStateManager/actions/actions";

const UsersBox = (props) => {
  return (
    <>
      <div
        className="border-end w-100 position-relative"
        style={{ maxWidth: "360px" }}
      >
        <div className="border-bottom py-2 px-3 position-absolute start-0 end-0 top-0">
          <div className="d-flex align-items-center justify-content-center position-relative">
            <button className="btn fw-500">
              <span className="">aydin.lip</span>
              <span className="p-1">
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  color="#262626"
                  fill="#262626"
                  height="20"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                </svg>
              </span>
            </button>
            <div
              className="position-absolute end-0 cursor"
              onClick={() => {
                props.changeNewMessage(true);
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
                <path
                  d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.848"
                  x2="20.076"
                  y1="3.924"
                  y2="7.153"
                ></line>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="border-bottom position-absolute start-0 end-0"
          style={{ top: "3.5rem" }}
        >
          <button
            className="px-3 py-2 bg-white fw-09500 text-black"
            style={{ border: "0", borderBottom: "1px solid black" }}
          >
            PRIMARY
          </button>
          <button className="px-3 py-2 bg-white fw-09500 border-0 text-muted">
            GENERAL
          </button>
        </div>
        <div className="h-100" style={{ paddingTop: "6rem" }}>
          <div className="h-100 overflow-auto">
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1">
                <img
                  src="/imgs/profile/leitoProfile.jpg"
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div
                className="d-flex flex-column px-2 justify-content-center"
                style={{ fontSize: ".9rem" }}
              >
                <span>mahdi.p</span>
                <span className="text-muted">Active now</span>
              </div>
            </div>
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1">
                <img
                  src="/imgs/profile/leitoProfile.jpg"
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div
                className="d-flex flex-column px-2 justify-content-center"
                style={{ fontSize: ".9rem" }}
              >
                <span>mahdi.p</span>
                <span className="text-muted">Active now</span>
              </div>
            </div>
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1">
                <img
                  src="/imgs/profile/leitoProfile.jpg"
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div
                className="d-flex flex-column px-2 justify-content-center"
                style={{ fontSize: ".9rem" }}
              >
                <span>mahdi.p</span>
                <span className="text-muted">Active now</span>
              </div>
            </div>
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1">
                <img
                  src="/imgs/profile/leitoProfile.jpg"
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div
                className="d-flex flex-column px-2 justify-content-center"
                style={{ fontSize: ".9rem" }}
              >
                <span>mahdi.p</span>
                <span className="text-muted">Active now</span>
              </div>
            </div>
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1">
                <img
                  src="/imgs/profile/leitoProfile.jpg"
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div
                className="d-flex flex-column px-2 justify-content-center"
                style={{ fontSize: ".9rem" }}
              >
                <span>mahdi.p</span>
                <span className="text-muted">Active now</span>
              </div>
            </div>
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1">
                <img
                  src="/imgs/profile/leitoProfile.jpg"
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div
                className="d-flex flex-column px-2 justify-content-center"
                style={{ fontSize: ".9rem" }}
              >
                <span>mahdi.p</span>
                <span className="text-muted">Active now</span>
              </div>
            </div>
            <div className="cursor hover-user-search d-flex px-3 py-2">
              <div className="px-1">
                <img
                  src="/imgs/profile/leitoProfile.jpg"
                  alt="profile photo"
                  width="56px"
                  height="56px"
                  className="rounded-circle"
                />
              </div>
              <div
                className="d-flex flex-column px-2 justify-content-center"
                style={{ fontSize: ".9rem" }}
              >
                <span>mahdi.p</span>
                <span className="text-muted">Active now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeNewMessage: (data) => dispatch(changeNEWmessage(data)),
});

export default connect(null, mapDispatchToProps)(UsersBox);
