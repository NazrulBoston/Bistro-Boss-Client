import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authContext } from "../../providers/AuthProvider";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext)
    const location = useLocation()

    if(loading){
        return <div className="loading flex justify-center items-center loading-ring text w-44 mx-auto mt-16 "></div>

    }
    if(user){
        return children;
    }
    return <Navigate to ='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;