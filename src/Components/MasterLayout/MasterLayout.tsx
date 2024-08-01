import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export default function MasterLayout() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-3 bg-info vh-100">
            <Sidebar/>
          </div>
          <div className="col-md-9 ">
            <Navbar/>
            <Outlet/>
          </div>
        </div>
    </div>
    </>
  )
}
