import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <div className='sticky top-0 z-50 navbar bg-white px-4 md:px-10 border-b border-gray-100 shadow-sm min-h-20'>
                <div className='max-w-370 w-full mx-auto'>
                <Navbar></Navbar>
            </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;