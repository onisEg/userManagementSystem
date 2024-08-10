import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-white ">
        <div className="container-fluid ">
          <div
            className="collapse d-flex justify-content-between navbar-collapse"
            id="navbarTogglerDemo03"
          >
           <img className="img-fluid" src="/LogoUMS.png" alt="user" />
            <div className="d-flex align-items-center mx-4">
              <div className="search  d-flex align-items-center form-control mx-3">
                <input type="text" className="" placeholder="Search..." />
                <i
                  style={{ fontSize: 14 }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </div>
              <i
                className="fa-regular fa-bell fa-2x"
                style={{ fontSize: 24 }}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
