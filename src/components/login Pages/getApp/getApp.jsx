const GetApp = () => {
  return (
    <>
      <div className="row justify-content-center align-items-center">
        <div className="col-9">
          <div className="text-center my-3">
            <span className="" style={{ fontSize: ".9rem" }}>
              Get the app.
            </span>
          </div>
          <div className="row">
            <a
              target="_blank"
              href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
              className="col-6"
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
              className="col-6"
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
    </>
  );
};

export default GetApp;
