const NoPost = () => {
  return (
    <>
      <div className="row bg-white rounded-3">
        <div className="col-12 py-4 d-md-none">
          <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="">
              <div className="text-center">
                <h6 className="m-2 fw-500" style={{ fontSize: "1.1rem" }}>
                  Start capturing and sharing your moments.
                </h6>
                <p className="m-0">
                  Get the app to share your first photo or video.
                </p>
              </div>
              <div className="py-3 px-5 mt-2">
                <a
                  target="_blank"
                  href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                  className="me-2"
                >
                  <img
                    style={{ height: "40px" }}
                    src="/imgs/getApp/ioc.png"
                    sizes="200*200"
                    alt="ioc png"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5255A34D-E3AC-4C5B-84A9-6B9B282FE241%26utm_content%3Dlo%26utm_medium%3Dbadge"
                  className=""
                >
                  <img
                    style={{ height: "40px" }}
                    src="/imgs/getApp/playStor.png"
                    alt="playStor png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 p-0 pe-md-3">
          <div>
            <img
              src="/imgs/instaLogo/noPost.jpg"
              width="100%"
              height="100%"
              alt="photo"
              className="rounded-start"
            />
          </div>
        </div>
        <div className="col-12 col-md-7 d-none d-md-flex">
          <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="">
              <div className="text-center">
                <h6 className="m-2 fw-500" style={{ fontSize: "1.1rem" }}>
                  Start capturing and sharing your moments.
                </h6>
                <p className="m-0">
                  Get the app to share your first photo or video.
                </p>
              </div>
              <div className="py-3 px-5 mt-2">
                <a
                  target="_blank"
                  href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                  className="me-2"
                >
                  <img
                    style={{ height: "40px" }}
                    src="/imgs/getApp/ioc.png"
                    sizes="200*200"
                    alt="ioc png"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5255A34D-E3AC-4C5B-84A9-6B9B282FE241%26utm_content%3Dlo%26utm_medium%3Dbadge"
                  className=""
                >
                  <img
                    style={{ height: "40px" }}
                    src="/imgs/getApp/playStor.png"
                    alt="playStor png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPost;
