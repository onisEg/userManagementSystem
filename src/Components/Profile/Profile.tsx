import PageHeader from "../pagehader/PageHeader";
import "./profile.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

export default function Profile() {
  const [user, setUser]: any = useState({});
  let { userData }: any = useContext(AuthContext);
  const getUserDataById = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/users/${userData.id}`);
      setUser(res.data);
      toast.success("get userInfo by id successfully!");
    } catch (error) {
      toast.error(`Error fetching userInfo data! ${error}`);
    }
  };
  useEffect(() => {
    getUserDataById();
  }, []);

  return (
    <>
      <PageHeader headerText={"Profile"} />
      <div
        id="profile-form"
        className=" container-fluid my-5 py-5  d-flex justify-content-center align-items-center"
      >
        <div className="form-body w-75  py-5 mt-5 ">
          <img src={`${user?.image}`} alt="" />
          <form className=" row  m-auto bg-white py-3 px-5" action="">
            <div className="col-md-6 py-4 ">
              <div className=" ">
                <label className="form-label">First Name</label>
                <input
                  value={user?.firstName}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your First Name"
                />
              </div>
            </div>
            <div className="col-md-6 py-4 ">
              <div className=" ">
                <label className="form-label">Last Name</label>
                <input
                  value={user?.lastName}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Last Name"
                />
              </div>
            </div>
            <div className="col-md-6 py-4 ">
              <div className=" ">
                <label className="form-label">Email</label>
                <input
                  value={user?.email}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            <div className="col-md-6 py-4 ">
              <div className=" ">
                <label className="form-label">Phone Number</label>
                <input
                  value={user?.phone}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Phone Number"
                />
              </div>
            </div>

            <div className="col-md-6 py-4 ">
              <div className=" ">
                <label className="form-label">Age</label>
                <input
                  value={user?.age}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Age"
                />
              </div>
            </div>
            <div className="col-md-6 py-4 ">
              <div className=" ">
                <label className="form-label">Birth Date</label>
                <input
                  value={user?.birthDate}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your birth Date"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
