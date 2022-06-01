import { NavLink } from "react-router-dom";

const UnDefined = () => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ width: "100vw", marginTop: "5rem" }}
      >
        <span className="h3 d-block mb-4">
          Sorry, this page isn't available.
        </span>
        <p className="">
          The link you followed may be broken, or the page may have been
          removed.{" "}
          <NavLink to="/" className="text-decoration-none">
            Go back to Instagram.
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default UnDefined;
