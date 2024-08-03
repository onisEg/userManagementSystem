import { useForm } from "react-hook-form";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let onSubmit = async (data: any) => {
    try {
      let response = await axios.post("https://dummyjson.com/auth/login", data);
      // console.log(response);
      if (response.status == 200) {
        navigate("/dashboard");
        toast.success("Login sccess!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        id="login"
        className="login vh-100 d-flex justify-content-center align-items-center"
      >
        <div className="bg-white rounded p-5">
          <div className="login-h1 ">
            <h1>User Management System</h1>
          </div>
          <div className=" text-center py-3">
            <h3>Sign In</h3>
            <span>Enter your credentials to access your account</span>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">username</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Enter username",
                })}
              />

              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </div>
            <div className="my-3">
              <label className="form-label">Password</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your password"
                {...register("password", { required: "Enter password" })}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
            <button className="btn sign-btn w-100 text-white mt-3">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
