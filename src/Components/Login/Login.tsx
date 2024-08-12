import { useForm } from "react-hook-form";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  let { saveUserData }: any = useContext(AuthContext);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  let onSubmit = async (data: any) => {
    try {
      let response = await axios.post("https://dummyjson.com/auth/login", data);
      localStorage.setItem("userToken", response.data.token);
      if (response.status == 200) {
        navigate("/dashboard");
        toast.success("Login sccess!");
        saveUserData();
      }
    } catch (error) {
      toast.error(`userName or password or errror => ${error}`);
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
                value="emilys"
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Enter username",
                })}
              />
              {/* <small style={{}}>use this username : " emilys "</small> */}

              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </div>
            <div className="my-3">
              <label className="form-label">Password</label>
              <input
                value="emilyspass"
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your password"
                {...register("password", { required: "Enter password" })}
              />
              {/* <small style={{ color: "#aaa" }}>EX: emilyspass</small> */}
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
