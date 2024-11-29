import { Link, NavLink } from "react-router-dom";
import coffeeImg from "/src/assets/more/logo1.png";
import "./Navbar.css";

const Navbar = () => {
    const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/usersProfile">Users</NavLink>
    </>

    return (
        <div className="lg:px-16 px-8 flex justify-between items-center" style={{
            backgroundImage: "url('/src/assets/more/navbarBG.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div className="flex justify-center items-center gap-3 py-5">
                <figure>
                    <img className="w-16 h-16" src={coffeeImg} alt="Image of coffee logo" />
                </figure>

                <h2 className="text-white text-4xl font-medium font-rancho hidden md:block">Espresso Emporium</h2>
            </div>

            <div className="text-lg text-white font-bold text-center md:flex gap-3 items-center hidden">
                {links}
            </div>

            <div className="justify-end flex gap-4 items-center">
                <Link to="/signIn">
                <button className="btn btn-outline border-2 text-gray-100 hover:bg-violet-500 md:text-xl text-lg font-rancho font-bold px-6">Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;