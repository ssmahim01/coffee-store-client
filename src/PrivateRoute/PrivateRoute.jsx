import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center py-40">
            <span className="loading loading-infinity loading-lg text-primary text-xl"></span>
        </div>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/signIn"></Navigate>
    );
};

export default PrivateRoute;