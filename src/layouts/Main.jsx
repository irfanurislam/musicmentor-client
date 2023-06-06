import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/SharedPages/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;