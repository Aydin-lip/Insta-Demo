const EmailsFromInstagram = () => {
  document.title = "Emails From Instagram • Instagram";

  return (
    <>
      <div className="container ps-4 ms-3 pe-5">
        <span className="fs-4 fw-light">Emails From Instagram</span>

        <div className="w-100 mt-4 mb-4 pt-2 border-bottom">
          <span
            className="bg-white fw-500 pb-3 cursor d-inline-block text-center"
            style={{ width: "50%", borderBottom: "1px solid #000" }}
          >
            Security
          </span>
          <span
            className="bg-white fw-500 pb-3 text-muted d-inline-block text-center"
            style={{ width: "50%" }}
            disabled
          >
            Other
          </span>
        </div>
        <p
          className="text-muted"
          style={{ fontSize: "1.1rem", lineHeight: "23px" }}
        >
          Security and login emails from Instagram in the last 14 days will
          appear here. You can use it to verify which emails are real and which
          are fake.
          <span className="d-block text-dark cursor">Learn more.</span>
        </p>
      </div>
    </>
  );
};

export default EmailsFromInstagram;
