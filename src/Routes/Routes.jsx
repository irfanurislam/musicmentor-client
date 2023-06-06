import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

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
        path: '/login',
        element: <Login></Login>,
        
      },
        {
        path: '/signup',
        element: <SignUp></SignUp>,
        
      }
    
    
    
    ]
    },
  ]);

