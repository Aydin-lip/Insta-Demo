import Footer from "./footer/footer";
import ForgetPass from "./forgetPassword/forget";

const ForgetPassword = () => {
  document.title = "Reset Password • Instagram";
  return (
    <>
      <ForgetPass />
      <div className="row justify-content-center m-0">
        <div className="col-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
