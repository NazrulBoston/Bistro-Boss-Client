import { BrowserRouter, Route, Routes } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Menu from "../pages/Shared/Menu/Menu";
import OrderFood from "../pages/Order/OrderFood";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/signup" element={<SignUp></SignUp>} />
                    <Route path="/menu" element={<Menu></Menu>} />
                    <Route path="/order/:category" element={<OrderFood></OrderFood>} />
                </Route>



            </Routes>
        </BrowserRouter>
    );
};

export default Router;