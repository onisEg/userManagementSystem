import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="">
            <h1 className="text-danger display-1">404</h1>
            <i className="fa-regular fa-face-frown fa-5x my-5"></i>
          </div>
          <Link to="dashboard" className="btn bg-warning ">
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
