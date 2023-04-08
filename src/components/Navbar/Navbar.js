import React from 'react';
import { menuItems } from './menuItems';
import MenuElements from './MenuElements';

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                {menuItems.map((menu, index) => {
                    return(
                        <MenuElements items={menu} key={index} />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;