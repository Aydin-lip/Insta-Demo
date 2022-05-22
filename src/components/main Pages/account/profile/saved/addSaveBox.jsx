import { Modal } from "react-bootstrap";

import { connect } from "react-redux";
import { changeADDsavedBox } from "../../../../useStateManager/actions/actions";

const AddSavedBox = (props) => {
  return (
    <>
      <Modal
        fullscreen
        show={props.AddSavedBox}
        onHide={() => {
          props.changeAddSavedBox(false);
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div
              className="w-100 bg-white position-fixed"
              style={{ maxWidth: "400px", borderRadius: "8px" }}
            >
              <div className="p-2 text-center">
                <span className="fw-500">New Collection</span>
                <span
                  className="position-absolute cursor"
                  style={{ top: ".5rem", right: "1rem" }}
                  onClick={() => {
                    props.changeAddSavedBox(false);
                  }}
                >
                  <svg
                    color="#262626"
                    fill="#262626"
                    height="18"
                    role="img"
                    viewBox="0 0 24 24"
                    width="18"
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
                </span>
              </div>
              <div className="p-4 border-top border-bottom">
                <input
                  type="text"
                  className="w-100 mb-0"
                  placeholder="Collection Name"
                />
              </div>
              <div className="">
                <button
                  className="btn btn-outline-secondary w-100 p-0 py-2 my-1 border-0 fs-09 fw-500"
                  disabled
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  AddSavedBox: state.Modal.AddSavedBox,
});
const mapDispatchToProps = (dispatch) => ({
  changeAddSavedBox: (data) => dispatch(changeADDsavedBox(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSavedBox);
