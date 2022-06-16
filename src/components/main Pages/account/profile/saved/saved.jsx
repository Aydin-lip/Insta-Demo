import { useState } from "react";
import SavedBox from "./box";
import AddSavedBox from "./addSaveBox";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { connect } from "react-redux";
import { changeADDsavedBox } from "../../../../useStateManager/actions/actions";

const SavedProfile = (props) => {
  const [Loading, SetLoading] = useState(true);
  return (
    <>
      {Loading ? (
        <>
          <div className="row">
            <div className="col-4">
              <div className="w-100 d-flex justify-content-center pt-3">
                {FuncSetLoadingSaved()}
                <div
                  className="d-flex"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "5px",
                  }}
                >
                  <div className="me-1">
                    <Skeleton width="145px" height="145px" />
                    <Skeleton width="145px" height="145px" />
                  </div>
                  <div className="">
                    <Skeleton width="145px" height="145px" />
                    <Skeleton width="145px" height="145px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="">
            <div className="d-flex w-100 mt-4 mb-3 pt-2">
              <span className="fs-08 text-muted">
                Only you can see what you've saved
              </span>
              <span
                className="fs-09 fw-500 ms-auto text-primary cursor"
                onClick={() => {
                  props.changeAddSavedBox(true);
                }}
              >
                + New Collection
              </span>
            </div>
            <div className="w-100 container">
              <div className="row">
                <SavedBox />
              </div>
            </div>
          </div>
          <AddSavedBox />
        </>
      )}
    </>
  );
  function FuncSetLoadingSaved() {
    setTimeout(() => {
      SetLoading(false);
    }, 1000);
  }
};

const mapStateToProps = (state) => ({
  AddSavedBox: state.Modal.AddSavedBox,
  Saved: state.PostsInfor.Saved,
});
const mapDispatchToProps = (dispatch) => ({
  changeAddSavedBox: (data) => dispatch(changeADDsavedBox(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedProfile);
