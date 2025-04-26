import { BrowserRouter, Route, Routes } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/SharedComponent/Login";
import SignUp from "../components/SharedComponent/SignUp";
import Menu from "../pages/Shared/Menu/Menu";
import OrderFood from "../pages/Order/OrderFood";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/signup" element={<SignUp></SignUp>} />
                    <Route path="/menu" element={<Menu></Menu>} />
                    <Route path='/order/:category' element={<OrderFood></OrderFood>} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                    <Route path="users" element= {<AllUsers></AllUsers>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;