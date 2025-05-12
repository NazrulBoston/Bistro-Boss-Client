import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    // set background color based on admin status
    const sidebarBg = isAdmin ? 'bg-orange-300' : 'bg-blue-200';

    return (
        <div>
            <div className="flex">
                {/* dashboard sidebar */}
                <div className={`w-64 min-h-screen ${sidebarBg}`}>
                    <ul className="menu p-4 space-y-4">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/adminHome'>
                                            <FaHome /> Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageItems'>
                                            <FaList /> Manage Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addItems'>
                                            <FaUtensils /> Add Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/bookings'>
                                            <FaBook /> Manage Booking
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/users'>
                                            <FaUser /> All Users
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/dashboard/userHome'>
                                            <FaHome /> User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/cart'>
                                            <FaShoppingCart /> My Cart ({cart.length})
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/reservation'>
                                            <FaCalendar /> Reservation
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/review'>
                                            <FaAd /> Add a review
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/bookings'>
                                            <FaList /> My List
                                        </NavLink>
                                    </li>
                                </>
                        }

                        <div className="divider"></div>

                        {/* shared dashboard links */}
                        <li>
                            <NavLink to='/'>
                                <FaHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
                                <FaSearch /> Menu
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* dashboard content */}
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;














// dashboard ar color change korar jonno ai uporer code


// import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";


// const Dashboard = () => {
//     const [cart] = useCart();
   
//     // // TODO: get isAdmin value from database
//     const [isAdmin] = useAdmin()
    
  
//     return (
//         <div>
//             <div className="flex">
//                 {/* dashboard side bar */}
//                 <div className="w-64 min-h-screen bg-orange-400">
//                     <ul className="menu p-4 space-y-4">
//                         {
//                             isAdmin ?
//                                 <>
//                                     <li>
//                                         <NavLink to='/dashboard/adminHome'>
//                                             <FaHome></FaHome> Admin Home</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/manageItems'>
//                                             <FaList></FaList> Manage Items</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/addItems'>
//                                             <FaUtensils></FaUtensils> Add Items</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/bookings'>
//                                             <FaBook></FaBook>Manage Booking</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/users'>
//                                             <FaUser></FaUser>All Users</NavLink>
//                                     </li>
//                                 </>
//                                 :
//                                 <>
//                                     <li>
//                                         <NavLink to='/dashboard/userHome'>
//                                             <FaHome></FaHome> User Home</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/cart'>
//                                             <FaShoppingCart></FaShoppingCart> My Cart( {cart.length})</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/reservation'>
//                                             <FaCalendar></FaCalendar> Reservation</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/review'>
//                                             <FaAd></FaAd> Add a review</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to='/dashboard/bookings'>
//                                             <FaList></FaList> My List</NavLink>
//                                     </li>
//                                 </>
//                         }

//                         <div className="divider"></div>
//                         {/* shared dashboard (navlink) */}
//                         <li>
//                             <NavLink to='/'>
//                                 <FaHome></FaHome>Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/order/salad'>
//                                 <FaSearch></FaSearch>Menu</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* dashboard content */}
//                 <div className="flex-1 p-6">
//                     <Outlet></Outlet>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Dashboard;