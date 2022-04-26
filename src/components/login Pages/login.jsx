import Footer from "./footer/footer";
import FormLogin from "./formLogin/formLogin";
import PhoneEffect from "./phone/phoneEffect";

const Login = () => {
  document.title = "Login • Instagram";
  return (
    <>
      <div className="container-lg">
        <div className="row mt-4 pt-2">
          <div className="col-6 pe-0 d-none d-lg-block">
            <PhoneEffect />
          </div>
          <div className="col-12 col-lg-6 d-flex d-lg-block justify-content-center align-items-center">
            <FormLogin />
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-8">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
