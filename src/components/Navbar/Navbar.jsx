import { Link, NavLink } from "react-router-dom";
import coffeeImg from "/src/assets/more/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/usersProfile">Users</NavLink>
    </>
  );

  return (
    <div
      className="lg:px-16 px-8 flex justify-between items-center"
      style={{
        backgroundImage: "url('navbarBG.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="navbar-start flex gap-4 items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden text-white border-2 border-gray-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-52 p-4 shadow-sm font-bold"
          >
           {links}
          </ul>
          
        </div>
        <div className="flex items-center gap-3 py-3">
        <figure>
          <img
            className="w-16 h-16"
            src={coffeeImg}
            alt="Image of coffee logo"
          />
        </figure>

        <h2 className="text-white lg:text-4xl text-2xl font-medium font-rancho hidden md:block">
          Espresso Emporium
        </h2>
      </div>
      </div>

      <div className="text-lg text-white font-bold text-center md:flex gap-3 justify-center items-center hidden">
        {links}
      </div>

      <div className="justify-end flex gap-4 items-center">
        <Link to="/signIn">
          <button className="btn btn-info text-gray-100 hover:btn-primary md:text-xl text-lg font-rancho font-bold px-6">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;