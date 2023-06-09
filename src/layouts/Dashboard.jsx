import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const isAdmin = useAdmin()

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        
      <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          { isAdmin ?
            <>
            <li>
            <NavLink to="/dashboard/adminhome">
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageuser">
              <FaHome></FaHome> Manage User
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addclass">
              <FaHome></FaHome> Addclass
            </NavLink>
          </li>
          
            </> : <>
            
            <li>
            <NavLink to="/dashboard/selectedclasses">
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart> MyCart
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
            
            
            </>



          }
         
          
          {/* user */}
         
          {/* instructor */}
          <li>
            <NavLink to="/dashboard/addclass">
              <FaWallet></FaWallet> add class
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myclass">
              <FaWallet></FaWallet> myclass
            </NavLink>
          </li>








          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classespage"> Our classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructor">our instructor</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
