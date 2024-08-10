import "./usersList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Usertr from "../UserInfo/Usertr";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [show, setShow]: any = useState(false);
  const [userId, setUserId] = useState(0);
  const [userData, setUserData]: any = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (user: any) => {
    setShow(true);
    setUserId(user.id);
    setUserData(user);
  };

  interface user {
    id: number;
    firstName: string;
    image: any;
    lastName: string;
    email: string;
    phone: number;
    gender: string;
    birthDate: number;
  }
  let [userss, setUserss] = useState([]);
  let getUsers = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      // console.log(res.data.users);
      setUserss(res.data.users);
    } catch (error) {
      console.log(error);
      toast.error(`check your internet ! ${error}`);
    }
  };
  let deleteUser = async () => {
    try {
      let response = await axios.delete(
        `https://dummyjson.com/users/${userId}`
      );
      console.log(response.data.user);
      handleClose();
      toast.success("Delete successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error");
      handleClose();
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  let navigate = useNavigate();
  let navigateToAddNewUser = () => {
    navigate("/dashboard/userdata");
  };
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body>
          {" "}
          Delete{" "}
          <span className="fw-bold">
            {userData.firstName} {userData.lastName}
          </span>{" "}
          ?{" "}
        </Modal.Body>
        <Modal.Footer className="m-auto">
          <Button variant="danger" onClick={deleteUser}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="">
        <div className="page-header mx-5 py-2 ">
          <h1 style={{ fontSize: 30 }}>Users List</h1>
          <button
            onClick={navigateToAddNewUser}
            className="btn bg-yellow text-white px-5"
          >
            Add New User
          </button>
        </div>
        <div className=" m-5 ">
          <div className="row">
            <table className="usersTable">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Date-of admission</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="">
                {userss.map((user: user) => (
                  <Usertr handleShow={handleShow} key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
