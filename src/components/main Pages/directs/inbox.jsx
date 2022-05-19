import UsersBox from "./boxUsers/users";
import MessagesBox from "./messages/messages";
import MessagesGeneral from "./messages/messagesGeneral";
import NewMessage from "./newMessage/newMessage";
import NewAccount from "./addAccount/newAccount";
import Direct from "./direct/direct";
import Details from "./direct/details";

import { connect } from "react-redux";

const DirectInbox = (props) => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 mt-1 px-0 d-flex justify-content-center">
            <div
              className="py-2 py-sm-4 w-100"
              style={{ maxWidth: "935px", height: "92vh" }}
            >
              <div className="d-flex border rounded bg-white h-100">
                <UsersBox />
                {/* {props.MessageGeneral ? <MessagesGeneral /> : <MessagesBox />} */}
                {props.Details ? <Details /> : <Direct />}
                <NewMessage />
                <NewAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  MessageGeneral: state.Modal.MessageGeneral,
  Details: state.Modal.DetailsDirect,
});

export default connect(mapStateToProps)(DirectInbox);
