import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState(false);
  return (
    <>
      <div className="position-relative">
        {!search ? <i className="fa fa-search icon-search-nav"></i> : null}
        <input
          onFocus={() => {
            setSearch(true);
          }}
          onBlur={() => {
            setSearch(false);
          }}
          type="text"
          className="mb-0 input-search-nav"
          placeholder="Search"
        />
        {search ? (
          <i
            onClick={() => {
              setSearch(false);
            }}
            className="fa fa-times-circle icon-close-nav"
          ></i>
        ) : null}
        {search ? (
          <div className="overflow-auto border pt-3 bg-white shadow box-search">
            <div className="d-flex px-3">
              <span className="fw-500">Recent</span>
              <span className="ms-auto fw-09500 a-blue-right ">Clear All</span>
            </div>

            <div className="cursor hover-user-search">
              <div className="px-3 py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="/imgs/profile/leitoProfile.jpg"
                      width="44px"
                      height="44px"
                      className="rounded-circle"
                      alt="profile"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <a
                      href="#"
                      className="text-decoration-none d-block text-black"
                      style={{
                        fontWeight: "600",
                        fontSize: ".9rem",
                        marginBottom: "-0.1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      behzhiin
                    </a>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: ".9rem" }}
                    >
                      Leito
                    </p>
                  </div>
                  <div className="ms-auto me-2">
                    <svg
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <polyline
                        fill="none"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        x1="20.649"
                        x2="3.354"
                        y1="20.649"
                        y2="3.354"
                      ></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor hover-user-search">
              <div className="px-3 py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="/imgs/profile/leitoProfile.jpg"
                      width="44px"
                      height="44px"
                      className="rounded-circle"
                      alt="profile"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <a
                      href="#"
                      className="text-decoration-none d-block text-black"
                      style={{
                        fontWeight: "600",
                        fontSize: ".9rem",
                        marginBottom: "-0.1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      behzhiin
                    </a>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: ".9rem" }}
                    >
                      Leito
                    </p>
                  </div>
                  <div className="ms-auto me-2">
                    <svg
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <polyline
                        fill="none"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        x1="20.649"
                        x2="3.354"
                        y1="20.649"
                        y2="3.354"
                      ></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor hover-user-search">
              <div className="px-3 py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="/imgs/profile/leitoProfile.jpg"
                      width="44px"
                      height="44px"
                      className="rounded-circle"
                      alt="profile"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <a
                      href="#"
                      className="text-decoration-none d-block text-black"
                      style={{
                        fontWeight: "600",
                        fontSize: ".9rem",
                        marginBottom: "-0.1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      behzhiin
                    </a>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: ".9rem" }}
                    >
                      Leito
                    </p>
                  </div>
                  <div className="ms-auto me-2">
                    <svg
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <polyline
                        fill="none"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        x1="20.649"
                        x2="3.354"
                        y1="20.649"
                        y2="3.354"
                      ></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor hover-user-search">
              <div className="px-3 py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="/imgs/profile/leitoProfile.jpg"
                      width="44px"
                      height="44px"
                      className="rounded-circle"
                      alt="profile"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <a
                      href="#"
                      className="text-decoration-none d-block text-black"
                      style={{
                        fontWeight: "600",
                        fontSize: ".9rem",
                        marginBottom: "-0.1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      behzhiin
                    </a>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: ".9rem" }}
                    >
                      Leito
                    </p>
                  </div>
                  <div className="ms-auto me-2">
                    <svg
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <polyline
                        fill="none"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        x1="20.649"
                        x2="3.354"
                        y1="20.649"
                        y2="3.354"
                      ></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor hover-user-search">
              <div className="px-3 py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="/imgs/profile/leitoProfile.jpg"
                      width="44px"
                      height="44px"
                      className="rounded-circle"
                      alt="profile"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <a
                      href="#"
                      className="text-decoration-none d-block text-black"
                      style={{
                        fontWeight: "600",
                        fontSize: ".9rem",
                        marginBottom: "-0.1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      behzhiin
                    </a>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: ".9rem" }}
                    >
                      Leito
                    </p>
                  </div>
                  <div className="ms-auto me-2">
                    <svg
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <polyline
                        fill="none"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        x1="20.649"
                        x2="3.354"
                        y1="20.649"
                        y2="3.354"
                      ></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor hover-user-search">
              <div className="px-3 py-2">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="/imgs/profile/leitoProfile.jpg"
                      width="44px"
                      height="44px"
                      className="rounded-circle"
                      alt="profile"
                    />
                  </div>
                  <div className="ps-2 ms-1">
                    <a
                      href="#"
                      className="text-decoration-none d-block text-black"
                      style={{
                        fontWeight: "600",
                        fontSize: ".9rem",
                        marginBottom: "-0.1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      behzhiin
                    </a>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: ".9rem" }}
                    >
                      Leito
                    </p>
                  </div>
                  <div className="ms-auto me-2">
                    <svg
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <polyline
                        fill="none"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        x1="20.649"
                        x2="3.354"
                        y1="20.649"
                        y2="3.354"
                      ></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Search;
