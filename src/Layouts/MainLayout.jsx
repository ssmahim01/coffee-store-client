import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MainLayout = () => {
  const {loading} = useContext(AuthContext);

  if(loading){
    return <div className="flex justify-center items-center py-40">
            <span className="loading loading-infinity loading-lg text-primary text-xl"></span>
        </div>
  };

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
