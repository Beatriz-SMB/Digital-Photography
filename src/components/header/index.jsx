import React from 'react';
import { Menu } from './style';

const Header = () => {
    return(
        <Menu>
            <li>
                <a href="#home">
                    Home
                </a>
            </li>
            <li>
                <a href="#video">
                    Video
                </a>
            </li>
            <li>
                <a href="https://edu.gcfglobal.org/en/">
                    About Us
                </a>
            </li>
        </Menu>
    )
}

export default Header