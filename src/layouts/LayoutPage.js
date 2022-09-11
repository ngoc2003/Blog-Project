import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';

const LayoutPage = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default LayoutPage;