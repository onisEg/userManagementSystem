import "./Login.css";
export default function Login() {
  return (
    <>
      <div
        id="login"
        className="login vh-100 d-flex justify-content-center align-items-center "
      >
        <div className="bg-white rounded p-5">
          <div className="login-h1 ">
            <h1>User Management System</h1>
          </div>
          <div className=" text-center py-3">
            <h3>Sign In</h3>
            <span>Enter your credentials to access your account</span>
          </div>
          <form action="">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your email"
              />
            </div>
            <div className="my-3">
              <label className="form-label">Password</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your password"
              />
            </div>
            <button className="btn sign-btn w-100 text-white mt-3">SIGN IN</button>
          </form>
        </div>
      </div>
    </>
  );
}
