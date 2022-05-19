const FirstLogo = () => {
  return (
    <>
      <div
        className="bg-white d-flex justify-content-center align-items-center position-relative"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="">
          <img src="/imgs/instaLogo/firstLogoInstagram.png" alt="Instagram" />
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle">
          <img src="/imgs/instaLogo/MetaPhoto.png" alt="Meta" />
        </div>
      </div>
    </>
  );
};

export default FirstLogo;
