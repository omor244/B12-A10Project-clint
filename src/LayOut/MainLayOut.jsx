import React from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayOut = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='sticky top-0 z-50'>

            <Navber></Navber> 
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;