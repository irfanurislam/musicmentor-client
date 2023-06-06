import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/SharedPages/NavBar/NavBar';
import Footer from '../pages/SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-black px-10 text-white'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;