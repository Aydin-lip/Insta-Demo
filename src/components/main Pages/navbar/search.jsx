import { useEffect, useRef } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { SEARCH } from "../../useStateManager/actions/actions";
import UserSearch from "./userSearch";

const Search = (props) => {
  const [search, setSearch] = useState(false);
  const [Users, setUsers] = useState([]);

  const setSearchs = () => {
    setUsers([]);
    let use = [];
    props.UsersAPI.filter((u) => {
      props.Search.filter((s) => {
        if (u.id === s) {
          use.push(u);
          setUsers(use);
        }
      });
    });
  };

  useEffect(() => {
    setSearchs();
  }, []);

  let usernames = props.UsersAPI.map((u) => u.login.username);
  const changeInputSearch = (event) => {
    if (event.target.value.length >= 1) {
      let New = usernames.filter((user) => {
        return user.toLowerCase().includes(event.target.value.toLowerCase());
      });
      let NewUsers = [];
      New.map((n) => {
        props.UsersAPI.filter((u) => {
          if (n === u.login.username) {
            NewUsers = [...NewUsers, u];
          }
        });
      });
      setUsers(NewUsers);
    } else {
      setSearchs();
    }
  };

  const Show = (x) => {
    let Input = document.querySelector(".input-search-nav");
    setTimeout(() => {
      if (x) {
        setSearch(true);
        Input.classList.add("pl-1");
      } else {
        setSearch(false);
        Input.value = "";
        Input.classList.remove("pl-1");
      }
    }, 80);
  };

  return (
    <>
      <div className="position-relative">
        {!search ? <i className="fa fa-search icon-search-nav"></i> : null}
        <input
          onFocus={() => {
            Show(true);
          }}
          type="text"
          className="mb-0 input-search-nav"
          placeholder="Search"
          onChange={changeInputSearch}
        />
        {search ? (
          <i
            onClick={() => {
              Show(false);
            }}
            className="fa fa-times-circle icon-close-nav"
          ></i>
        ) : null}
        {search ? (
          <>
            <div
              className="position-fixed top-0 end-0 bottom-0 start-0"
              onClick={() => {
                Show(false);
                setSearchs();
              }}
            ></div>
            <div
              className="overflow-auto border pt-3 bg-white shadow box-search"
              onClick={setSearchs}
            >
              <div className="d-flex px-3">
                <span className="fw-500">Recent</span>
                <span
                  className="ms-auto fw-09500 a-blue-right"
                  onClick={() => {
                    props.changeSearch([]);
                  }}
                >
                  Clear All
                </span>
              </div>

              {Users.map((u, index) => (
                <UserSearch key={index} data={u} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  UsersAPI: state.Users.Users,
  Search: state.PostsInfor.Search,
});
const mapDispatchToProps = (dispatch) => ({
  changeSearch: (data) => dispatch(SEARCH(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
