import { Navigate, useLocation } from "react-router";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";


const AdminRoute = (children) => {
    const[user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="loading flex justify-center items-center loading-ring text w-44 mx-auto mt-16 "></div>

    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to ='/login' state={{ from: location }} replace ></Navigate>
};

export default AdminRoute;