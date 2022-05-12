import { Component } from "react";
import { Modal } from "react-bootstrap";

import { connect } from "react-redux";
import { changeMODALmoreOption } from "../../../../useStateManager/actions/actions";

class MorOptions extends Component {
  render() {
    return (
      <>
        <Modal
          centered
          show={this.props.MoreOption[0] ? true : false}
          onHide={() => {
            this.props.changeMoreOption([false, false, false]);
          }}
        >
          <Modal.Body className="p-0">
            <div
              className="d-flex flex-column border bg-white p-1"
              style={{ borderRadius: "10px", maxWidth: "400px", width: "95vw" }}
            >
              <button className="border-0 item-morOption fw-09500 p-2 bg-white text-danger">
                Report
              </button>
              {this.props.MoreOption[1] ? (
                <>
                  {this.props.MoreOption[2] ? (
                    <button className="border-0 item-morOption fw-09500 p-2 border-top bg-white text-danger">
                      UnFollow
                    </button>
                  ) : null}
                  <button className="border-0 item-morOption fw-09500 p-2 border-top bg-white">
                    Go to post
                  </button>
                  <button className="border-0 item-morOption fw-09500 p-2 border-top bg-white">
                    Tagged accounts
                  </button>
                  <button className="border-0 item-morOption fw-09500 p-2 border-top bg-white">
                    Share to...
                  </button>
                  <button className="border-0 item-morOption fw-09500 p-2 border-top bg-white">
                    Copy link
                  </button>
                  <button className="border-0 item-morOption fw-09500 p-2 border-top bg-white">
                    Embed
                  </button>
                </>
              ) : null}
              <button
                className="border-0 item-morOption fw-09500 p-2 border-top bg-white"
                onClick={() => {
                  this.props.changeMoreOption([false, false, false]);
                }}
              >
                Cancel
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  MoreOption: state.Modal.MoreOption,
});
const mapDispatchToProps = (dispatch) => ({
  changeMoreOption: (data) => dispatch(changeMODALmoreOption(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MorOptions);
