import { Link, NavLink } from "react-router-dom";
import coffeeImg from "/src/assets/more/logo1.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);

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
      <div className="flex gap-4 items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white border-2 border-gray-300 shadow-md"
          >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-56 p-3 shadow-sm font-bold"
          >
            <div className="lg:hidden flex flex-col mb-1">
            <img className="w-12 h-12 bg-lime-100 rounded-full border-2 border-lime-400 mb-1" src={user?.photoURL} alt={user?.displayName} />
        <p className="text-sm font-semibold text-gray-800">{user?.displayName}</p>
        <p className="text-sm font-semibold text-emerald-600">{user?.email}</p>
        </div>
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

      <div className="text-lg text-white font-bold text-center lg:flex gap-3 justify-center items-center hidden">
        {links}
      </div>

      {user ? (
        <div className="flex gap-3 items-center">
         <div className="lg:flex hidden gap-2 items-center">
          <img className="w-10 h-10 rounded-full bg-lime-100 border-2 border-lime-400" src={user?.photoURL} alt={user?.displayName} />

        <div className="flex flex-col">
        <p className="text-sm font-semibold text-white md:block hidden">{user?.displayName}</p>
        <p className="text-sm font-semibold text-white md:block hidden">{user?.email}</p>
        </div>
         </div>

          <button onClick={signOutUser} className="btn bg-rose-500 border-none text-white text-lg  font-bold font-rancho rounded-none">Sign Out</button>
        </div>
      ) : (
        <div className="justify-end flex gap-4 items-center">
          <Link to="/signIn">
            <button className="btn btn-info text-gray-100 hover:btn-primary md:text-xl text-lg font-rancho font-bold px-6">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
