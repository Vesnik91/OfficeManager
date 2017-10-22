import React, { Component } from 'react';
import './LeftNav.css';

class LeftNav extends Component {
    render() {
        return (
            <div className="app-left-nav-wrap">
                <header className="left-nav-header"></header>
                <ul className="left-nav-menu">
                    <li className="left-nav-menu-item">
                        <a>COMPANY INFO</a>
                        <ul className="left-nav-submenu">
                            <li className="left-nav-submenu-item completed"><a>Basic info</a></li>
                            <li className="left-nav-submenu-item in-progress"><a>Offices</a></li>
                            <li className="left-nav-submenu-item not-started"><a>Competitors</a></li>
                        </ul>
                    </li>
                    <li className="left-nav-menu-item"><a>MY FIRM</a></li>
                    <li className="left-nav-menu-item"><a>DEALS</a></li>
                    <li className="left-nav-menu-item"><a>FINACIALS</a></li>
                </ul>
            </div>
        );
    }
}

export default LeftNav;
