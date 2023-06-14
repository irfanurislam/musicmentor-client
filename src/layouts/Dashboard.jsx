import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
  FaPlusCircle,
  FaUserCog,
  FaCog,
  FaChalkboardTeacher,
  FaCreditCard,
  FaGraduationCap,
  FaUserTie,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useUsers from "../hooks/useUsers";

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const isAdmin = useAdmin();
  const isInstructor = useInstructor();
  console.log(isAdmin,isInstructor);

  const [userData] = useUsers()
  console.log("userdata",userData)
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
          {isAdmin && (
  <>
    <li>
      <NavLink to="/dashboard/adminhome">
        <FaHome></FaHome> Admin Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manageuser">
        <FaUserCog></FaUserCog> Manage User
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manageclass">
        <FaCog></FaCog> Manage Class
      </NavLink>
    </li>
  </>
)}

{isInstructor && (
  <>
    <li>
      <NavLink to="/dashboard/selectedclasses">
        <FaUsers></FaUsers> All Users
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/addclass">
        <FaPlusCircle></FaPlusCircle> Add Class
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/myclass">
        <FaPlusCircle></FaPlusCircle> My Class
      </NavLink>
    </li>
  </>
)}

{!isAdmin &&  !isInstructor && (
  <>
    <li>
      <NavLink to="/dashboard/payment">
        <FaCreditCard></FaCreditCard> Payment
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/myenrolled">
        <FaCreditCard></FaCreditCard> myenrolled
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/paymenthistory">
        <FaCreditCard></FaCreditCard> history
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/mycart">
        <FaShoppingCart></FaShoppingCart> My Cart
      </NavLink>
    </li>
  </>
)}

          

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classespage">
              <FaGraduationCap></FaGraduationCap> Our Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructor">
              <FaUserTie></FaUserTie> Our Instructors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
