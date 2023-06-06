import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='px-10'>
      <RouterProvider router={router} />
    </div>
   
  </React.StrictMode>,
)
