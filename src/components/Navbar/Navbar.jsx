import { NavLink } from "react-router-dom";
import coffeeImg from "/src/assets/more/logo1.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="lg:px-24 px-8 flex justify-between items-center" style={{
            backgroundImage: "url('/src/assets/more/navbarBG.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div className="flex justify-center items-center gap-3 py-5">
                <figure>
                    <img className="w-16 h-16" src={coffeeImg} alt="Image of coffee logo" />
                </figure>

                <h2 className="text-white text-5xl font-medium font-rancho hidden md:block">Espresso Emporium</h2>
            </div>

            <div className="justify-end flex gap-4 items-center">
                <NavLink to="/signIn">
                <button className="btn btn-outline border-2 hover:bg-lime-500 text-white md:text-xl text-lg font-rancho font-bold px-6">Sign In</button>
                </NavLink>

                <NavLink to="/signUp">
                <button className="btn btn-outline border-2 hover:bg-rose-500 text-white md:text-xl text-lg font-rancho font-bold px-6">Sign Up</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;