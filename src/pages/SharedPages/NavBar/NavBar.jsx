import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {







  const listItems = (
    <>
      <li>
        <Link to="/" className="">
          Home{" "}
        </Link>
      </li>

      <li>
        <Link to="/instructor">Instructor</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {/* TODO list when user here  */}
      <li>
        <Link to="/dashboard">DashBoard</Link>
      </li>
      
    </>
  );

  return (
    <div className='mt-10 '>
      <div className="navbar bg-base-100">
        <div className="">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
           
             {listItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Melody Mentor</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
        
            {listItems}
          
            
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-primary btn-md" onClick={handleToggle}>
            Toggle Color
          </button>
        
        <>
        <Link to='/signup'> <button className="btn btn-primary btn-md">Sign Up</button></Link>
        </>
       
        </div>
      </div>
    </div>
  );
};

export default NavBar;
