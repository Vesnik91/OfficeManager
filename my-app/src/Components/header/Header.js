import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-wrap">
                <div className="header">
                    <div className="header-left-side">
                        <div className="header-item header-company-name">SPD UKRAINE</div>
                        <div className="header-item header-profile-editor">Profile Editor</div>
                    </div>
                    <div className="header-right-side">
                        <div className="header-item header-contact">Contact</div>
                        <div className="header-item header-faq">FAQs</div>
                        <div className="header-item header-save-and-exit">Save and Exit</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
