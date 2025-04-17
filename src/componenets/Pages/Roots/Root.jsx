import React from 'react';
import Navbar from '../../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;