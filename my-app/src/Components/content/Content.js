import React, { Component } from 'react';
import LeftNav from '../leftNav/LeftNav.js';
import OfficesInfo from '../offices/OfficesInfo.js';
import './Content.css';

class OfficesContainer extends Component {

    render() {
        return (
            <div className="content-wrapper">
                <LeftNav>
                    <div className="company-progress"></div>
                </LeftNav>
                <main className="content">
                    <OfficesInfo></OfficesInfo>
                </main>
            </div>
        );
    }
}

export default OfficesContainer;
