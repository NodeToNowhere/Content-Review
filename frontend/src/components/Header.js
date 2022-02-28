import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerTitle">
                <Link to="/">OurChan</Link>
            </div>
            <div className="otherLinks">
                <Link to="/">Other Links</Link>
            </div>
        </div>
    )
}

export default Header;