import UsersBox from "./boxUsers/users";
import MessagesBox from "./messages/messages";

const DirectInbox = () => {
  document.title = "Inbox • Direct";
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 mt-1 px-0 d-flex justify-content-center">
            <div
              className="py-4 w-100 h-100"
              style={{ maxWidth: "935px", maxHeight: "90vh" }}
            >
              <div className="d-flex border rounded bg-white h-100">
                <UsersBox />
                <MessagesBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectInbox;
