import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Instructors from "../pages/Instructors/Instructors";
import ClassesPage from "../pages/ClassesPage/ClassesPage"
import Dashboard from "../layouts/Dashboard";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
        path: '/',
        element: <Home></Home>,
        
      },
        {
        path: '/instructors',
        element: <Instructors></Instructors>,
        
      },
        {
        path: '/classespage',
        element: <ClassesPage></ClassesPage>,
        
      },
        {
        path: '/login',
        element: <Login></Login>,
        
      },
        {
        path: '/signup',
        element: <SignUp></SignUp>,
        
      }
    
    
    
    ]
    },

    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard/adminhome',
          element: <></>,
        }
      ]
    }





  ]);

