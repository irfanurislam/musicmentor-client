import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Tooltip } from "react-tooltip";
import { FaShoppingCart } from "react-icons/fa";
import useBooked from "../../../hooks/useBooked";
import Swal from "sweetalert2";

const NavBar = () => {
 const [cart] = useBooked()
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      Swal.fire({
        title: 'Success!',
        text: 'User Logout successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
    .catch(error =>{
      console.log(error.message)
    })
  }





  const listItems = (
    <>
      <li>
        <Link to="/" className="">
          Home{" "}
        </Link>
      </li>

      <li>
        <Link to="/instructors">Instructor</Link>
      </li>
      <li>
        <Link to="/classespage">Classes</Link>
      </li>

      {
        user && <li>
         <Link to="/dashboard/mycart">
          Favoruite
          <span className="text-pink-600">+{cart.length || 0}</span>
        
        </Link>
        </li>
      }

      {/* TODO list when user here  */}
      {/* {user &&  <li>
        <Link to="/dashboard/mycart">
          <button className="btn btn-xs gap-2 flex items-center justify-center">
          Dashboard
          <span className="badge badge-secondary">+{cart.length || 0}</span>
          </button>
        </Link>
      </li>} */}
      
    </>
  );

  return (
   <div className="">
     <div className='fixed z-10 bg-white max-w-[83rem] w-full mx-auto bg-opacity-20'>
      <div className="navbar bg-base-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-usedAll menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
           
             {listItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl font-used hover:text-pink-700">Melody Mentor</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg px-1 text-usedAll">
        
            {listItems}
          
            
          </ul>
        </div>
        <div className="navbar-end">
     
        
        {
        user ? <>
        
          <div className="" >
                <img className="w-16 rounded-full" src={user?.photoURL} alt="Profile"
                data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName ||'Unknown User'}
                 />
                 <Tooltip id="my-tooltip" />
                
              </div>
        
          <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
          
        
        </>:<>
        <Link to='/signup'> <button className="btn btn-primary">Sign Up</button></Link>
        </>
       }
        </div>
      </div>
    </div>
   </div>
  );
};

export default NavBar;
