import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            {/* Navbar */}

            <Navbar></Navbar>


            {/* Outlet */}
            <Outlet></Outlet>



            {/* Footer */}
            
            <Footer></Footer>

        </div>
    );
};

export default Main;