const SavedBox = () => {
  return (
    <>
      <div className="col-12 col-md-6 col-xl-4 p-0 px-xl-2 h-100 d-flex justify-content-center">
        <div
          className="rounded position-relative mb-4"
          style={{ width: "300px", height: "300px" }}
        >
          <div className="position-absolute top-0 end-0 bottom-0 start-0 box-saved-hover"></div>
          <span
            className="position-absolute text-white fw-500"
            style={{ bottom: ".5rem", left: "1.2rem", fontSize: "1.2rem" }}
          >
            All Posts
          </span>
          <div className="d-flex mb-2p w-100" style={{ height: "50%" }}>
            <div
              className="saved-box-img img1 me-2p"
              style={{ backgroundImage: "url(/imgs/profile/leitoProfile.jpg)" }}
            ></div>
            <div
              className="saved-box-img img2"
              style={{ backgroundImage: "url(/imgs/profile/profileM.jpg)" }}
            ></div>
          </div>
          <div className="d-flex mb-2p w-100" style={{ height: "50%" }}>
            <div
              className="saved-box-img img3 me-2p"
              style={{ backgroundImage: "url(/imgs/profile/profilePHOTO.jpg)" }}
            ></div>
            <div
              className="saved-box-img img4"
              style={{ backgroundImage: "url(/imgs/profile/userProfile.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedBox;
