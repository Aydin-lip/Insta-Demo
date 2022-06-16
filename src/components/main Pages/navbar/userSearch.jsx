import { connect } from "react-redux";
import { SEARCH } from "../../../components/useStateManager/actions/actions";

const UserSearch = (props) => {
  const setSearchFunc = () => {
    let Searchs = props.Search.filter((n) => n !== props.data.id);
    props.changeSearch([...Searchs, props.data.id]);
  };

  const removeSearchFunc = () => {
    let Searchs = props.Search.filter((n) => n !== props.data.id);
    props.changeSearch(Searchs);
  };

  return (
    <>
      <div className="cursor hover-user-search">
        <div className="px-3 py-2">
          <div className="d-flex align-items-center">
            <div onClick={setSearchFunc}>
              <img
                src={props.data.relationship.avatar}
                width="44px"
                height="44px"
                className="rounded-circle"
                alt="profile"
              />
            </div>
            <div className="ps-2 ms-1" onClick={setSearchFunc}>
              <span
                className="d-block"
                style={{
                  fontWeight: "600",
                  fontSize: ".9rem",
                  marginBottom: "-0.1rem",
                  letterSpacing: "0.5px",
                }}
              >
                {props.data.login.username}
              </span>
              <p className="text-muted mb-0" style={{ fontSize: ".9rem" }}>
                {props.data.name.first}
              </p>
            </div>
            <div
              className="ms-auto me-2"
              onClick={removeSearchFunc}
              style={{ zIndex: "2" }}
            >
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
    </>
  );
};

const mapStateToProps = (state) => ({
  Search: state.PostsInfor.Search,
});
const mapDispatchToProps = (dispatch) => ({
  changeSearch: (data) => dispatch(SEARCH(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
