import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { changePROFILE } from "../../../useStateManager/actions/actions";

const ChangeProfile = (props) => {
  return (
    <>
      <Modal
        fullscreen
        show={props.Profile}
        onHide={() => {
          props.changeProfile(false);
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div
              className="position-fixed w-100 bg-white"
              style={{ maxWidth: "400px", borderRadius: "13px" }}
            >
              <div className="p-4 my-3 text-center">
                <span className="fw-500 fs-5">Change Profile Photo</span>
              </div>
              <div className="d-flex flex-column">
                <div className="py-3 d-flex border-top mx-2">
                  <span className="fs-09 fw-500 p-2">Link Picture: </span>
                  <input
                    type="text"
                    className="border-top mb-0 ms-auto p-2 input-noPlace"
                    placeholder="Profile Photo"
                    style={{ width: "18rem" }}
                  />
                </div>
                <span className="btn btn-primary bg-gradient rounded-0 fs-09 fw-700 d-block text-center py-08 cursor">
                  Change
                </span>
                <span className="text-danger fs-09 fw-700 d-block text-center border-top py-08 cursor">
                  Remove Current Photo
                </span>
                <span
                  className="fs-09 d-block text-center border-top py-08 cursor"
                  onClick={() => {
                    props.changeProfile(false);
                  }}
                >
                  Cancel
                </span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  Profile: state.Modal.ProfileAvatar,
});
const mapDispatchToProps = (dispatch) => ({
  changeProfile: (data) => dispatch(changePROFILE(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProfile);
