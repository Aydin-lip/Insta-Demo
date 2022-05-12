import { Component } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import UserShare from "./userShare";

import { connect } from "react-redux";
import { changeMODALshare } from "../../../../useStateManager/actions/actions";

const ShareModal = (props) => {
  if (props.Modal) {
    document.title = "Share • Direct";
  } else {
    document.title = "Instagram";
  }
  return (
    <>
      <Modal
        fullscreen
        show={props.Modal}
        onHide={() => {
          props.ChangeModal(false);
        }}
      >
        <Modal.Body className="p-0">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div className="d-flex flex-column border shadow position-fixed box-modal-share bg-white p-1">
              <div
                className="d-flex position-relative justify-content-center"
                style={{ padding: "0.5rem 0rem 0.7rem" }}
              >
                <span className="fw-500">Share</span>
                <CloseButton
                  className="close-btn-share"
                  onClick={() => {
                    props.ChangeModal(false);
                  }}
                />
              </div>
              <div className="border-top border-bottom p-2 d-flex align-items-center">
                <span className="fw-500">To:</span>
                <input
                  type="text"
                  className="border-0 bg-white w-100 mx-4 mb-0 input-noPlace"
                  placeholder="Search..."
                />
              </div>
              <div className="overflow-auto user-modal-share">
                <div className="p-2 m-1">
                  <span className="fw-09500">Suggested</span>
                </div>
                <UserShare />
                <UserShare />
                <UserShare />
                <UserShare />
                <UserShare />
              </div>
              <div className="p-2 m-1 border-top">
                <button className="btn btn-primary w-100">Send</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  Modal: state.Modal.Share,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeModal: (data) => dispatch(changeMODALshare(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShareModal);
