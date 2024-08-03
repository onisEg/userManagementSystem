import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidbar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item: any) => {
    setActiveItem(item);
  };
  return (
    <>
      <div className="sidebarContainer vh-100">
        <div className="logo p-2">
          <img className="img-fluid" src="/LogoUMS.png" alt="user" />
        </div>
        <div className="selectedUser  flex-column text-center my-5">
          <img src="/pexels-photo-2379004.png" alt="" />
          <h3 className="fw-bold text-capitalize mt-3">anas</h3>
          <span className="role ">Admin</span>
        </div>
        <Sidebar>
          <Menu>
            <MenuItem
              active={activeItem === "home"}
              onClick={() => handleItemClick("home")}
              icon={<i className="bi bi-house-door"></i>}
              component={<Link to="/dashboard" />}
            >
              Home
            </MenuItem>
            <MenuItem
              active={activeItem === "users"}
              onClick={() => handleItemClick("users")}
              icon={<i className="bi bi-bookmark"></i>}
              component={<Link to="/dashboard/users" />}
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
          </Menu>
        </Sidebar>
        <Link to="../login" className="d-flex m-auto btn text-danger">
          <span className="mx-3">Logout</span>
          <i className="bi bi-box-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}
