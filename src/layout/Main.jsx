import { Outlet, useLocation } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes("signup")

    return (
        <div>
            {/* Navbar */}

            {noHeaderFooter || <Navbar></Navbar>}


            {/* Outlet */}
            <Outlet></Outlet>



            {/* Footer */}
        { noHeaderFooter || <Footer></Footer>}

        </div>
    );
};

export default Main;