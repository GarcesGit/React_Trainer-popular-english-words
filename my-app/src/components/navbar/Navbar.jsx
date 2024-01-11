import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import logo_img from '../../images/logo.png';
import ball_w from '../../images/ball_w.png';
import list from '../../images/list.png';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar_nav">
            <img src={logo_img} alt="" className="logo_img" />
                <ul className="menu">
                    <li>
                        <img src={ball_w} alt="" className="small_img" />
                        <Link to='/translator'>Тренер слов</Link>
                    </li>
                    <li>
                    <img src={list} alt="" className="small_img" />
                        <Link to='/wordsLists'>Списки слов</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
