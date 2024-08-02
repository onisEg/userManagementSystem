import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidbar";
import Navbar from "../Navbar/Navbar";

export default function MasterLayout() {
  return (
    <>
      <div>
        <div className="d-flex">
          <div className="">
            <Sidebar />
          </div>
          <div className="w-100 ">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
