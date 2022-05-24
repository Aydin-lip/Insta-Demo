import { RingLoader } from "react-spinners";

const LoginActivity = () => {
  document.title = "Login Activity • Instagram";

  return (
    <>
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ height: "5rem" }}
      >
        <RingLoader size="30px" />
      </div>
    </>
  );
};

export default LoginActivity;
