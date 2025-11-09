import React from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayOut = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navber></Navber> 
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;