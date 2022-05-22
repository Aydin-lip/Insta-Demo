import { useState } from "react";
import { RingLoader } from "react-spinners";

const TaggedProfile = () => {
  const [Loading, setLoading] = useState(true);
  return (
    <>
      {Loading ? (
        <>
          <div
            className="w-100 d-flex justify-content-center pt-5"
            style={{ height: "10rem" }}
          >
            {FuncSetLoadingTagged()}
            <RingLoader size="30px" />
          </div>
        </>
      ) : (
        <div
          className="w-100 h-100 d-flex flex-column justify-content-center align-items-center py-5 px-4 mt-3 mb-4"
          style={{ maxHeight: "300px" }}
        >
          <div className="contants-profile-logo"></div>
          <div className="text-center">
            <h3 className="fw-light my-3">Photos of you</h3>
            <p className="fs-09">
              When people tag you in photos, they'll appear here.
            </p>
          </div>
        </div>
      )}
    </>
  );
  function FuncSetLoadingTagged() {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }
};

export default TaggedProfile;
