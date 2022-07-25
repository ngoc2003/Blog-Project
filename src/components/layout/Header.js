import React from 'react';
import {NavLink} from 'react-router-dom'
const NavList = [
    {
        url: '/',
        name:'HOME'
    },
    {
        url: '/',
        name:'BLOG'
    },
    {
        url: '/',
        name:'CONTACT'
    },
]

const Header = () => {
    return (
        <div className='container-page'>
            <a href="/" className='text-primary'>BLG</a>
            <ul>
                {/* <NavLink></NavLink> */}
            </ul>
        </div>
    );
};

export default Header;