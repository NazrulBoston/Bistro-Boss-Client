import { useContext } from "react";
import { Link } from "react-router";
import { authContext } from "../../providers/AuthProvider";
import logoImg from '../../assets/logo/logo.png'
import Swal from "sweetalert2";

import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
 const { user, signOutUser } = useContext(authContext);
 const[cart] = useCart();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Successfully sign out!",
          icon: "success",
          timer: 3000,
          draggable: true
        });
      })
      .catch(error => {
        console.log("Failed to sign out")
      })
  }

  const navLinks = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><Link to="/order/category">Order</Link></li>
    <li>
      <>
        <Link to="/dashboard/cart"><button >
          <div className="flex gap-2 items-center">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge">{cart.length}</div>
          </div>
        </button></Link>
      </>

    </li>


  </>

  return (
    <div className="navbar w-11/12 fixed z-10 opacity-50 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-bold text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

            {
              navLinks
            }

          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-20 h-16 " src={logoImg} alt="" />
          <h3 className="text-2xl">Bistro-Boss</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {
            navLinks
          }

        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>

            <span className="mr-2">{user?.displayName}</span>
            <button onClick={handleSignOut} className="btn-md mr-5 font-semibold">Sign Out</button>
          </>
            :
            <>
              <Link className="mr-3 " to="/login">Login</Link>
              <Link className="mr-3" to="/signup">Register</Link>
            </>
        }

      </div>
    </div>
  );
};

export default Navbar;