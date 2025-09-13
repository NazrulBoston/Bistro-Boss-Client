import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  
         const{user} = useAuth();
    return (
        <div>
            <div className="h1 text-3xl">Welcome back {user.displayName}</div>
        </div>
    );

};

export default UserHome;