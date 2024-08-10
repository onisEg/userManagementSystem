import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

export default function Sidbar() {
  const [user, setUser]: any = useState({});
  let { userData }: any = useContext(AuthContext);
  const [activeItem, setActiveItem] = useState("users");
  const [isCollaps, setIsCollaps] = useState(false);

  let toggleCollapse = () => {
    setIsCollaps(!isCollaps);
  };
  const handleItemClick = (item: any) => {
    setActiveItem(item);
  };
  const getUserDataById = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/users/${userData.id}`);
      setUser(res.data);
    } catch (error) {
      toast.error(`Error fetching userInfo data! ${error}`);
    }
  };
  useEffect(() => {
    getUserDataById();
  }, []);

  return (
    <>
      <div className="sidebarContainer vh-100 ">
        <Sidebar collapsed={isCollaps}>
          <div className="logo   text-end my-2">
            {isCollaps ? (
              <a onClick={toggleCollapse} className="btn  " href="#">
                <i className="fa-regular fa-circle-right fa-2x "></i>
              </a>
            ) : (
              <a onClick={toggleCollapse} className="btn  " href="#">
                <i className="fa-regular fa-circle-left fa-2x"></i>
              </a>
            )}
          </div>
          <div className="selectedUser  flex-column text-center my-5">
            <img className="img-fluid" src={user?.image} alt="" />
            <h3 className="fw-bold text-capitalize mt-3">{user?.firstName}</h3>
            <h6 className="text-yellow text-capitalize">{user?.role}</h6>
          </div>
          <Menu>
            <MenuItem
              active={activeItem === "home"}
              onClick={() => handleItemClick("home")}
              icon={<i className="bi bi-house-door"></i>}
              component={<Link to="/dashboard/home" />}
            >
              Home
            </MenuItem>
            <MenuItem
              active={activeItem === "users"}
              onClick={() => handleItemClick("users")}
              icon={<i className="bi bi-bookmark"></i>}
              component={<Link to="/dashboard" />}
            >
              Users
            </MenuItem>
            <MenuItem
              active={activeItem === "userdata"}
              onClick={() => handleItemClick("userdata")}
              icon={<i className="bi bi-mortarboard"></i>}
              component={<Link to="/dashboard/userdata" />}
            >
              userdata
            </MenuItem>
            <MenuItem
              active={activeItem === "profile"}
              onClick={() => handleItemClick("profile")}
              icon={<i className="bi bi-currency-dollar"></i>}
              component={<Link to="/dashboard/profile" />}
            >
              profile
            </MenuItem>
            <MenuItem
              icon={<i className=" bi bi-box-arrow-right"></i>}
              component={<Link to="/" />}
              className="text-danger fw-bold"
            >
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
