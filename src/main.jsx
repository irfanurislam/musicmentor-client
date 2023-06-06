import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className=''>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
     
    </div>
   
  </React.StrictMode>,
)
