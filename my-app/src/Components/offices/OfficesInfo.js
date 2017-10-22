import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewOffice from './new/NewOffice.js';
import DeleteOfficeModal from './delete/DeleteOfficeModal.js';
import './OfficesInfo.css';

class OfficesInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offices: [
                {
                    id: 0,
                    country: 'United States',
                    state: 'Washington',
                    postalCode: '98052',
                    city: 'Redmond',
                    address: 'One Microsoft Way',
                    alternativeAddress: '',
                    phone: '+1 (425) 882-8080',
                    fax: '',
                    email: 'msft@microsoft.com',
                    primaryHQ: true,
                },
                {
                    id: 1,
                    primaryHQ: false,
                    country: 'United Kingdom',
                    state: 'England',
                    postalCode: 'RG6 1WG',
                    city: 'Berkshire',
                    address: 'Thames Valley Park Reading',
                    phone: '+44 (0)34 4800 2400',
                    email: 'msft@microsoft.com'
                },
                {
                    id: 2,
                    primaryHQ: false,
                    country: 'Australia',
                    state: 'New South Wales',
                    postalCode: 1670,
                    city: 'Sydney',
                    address: 'PO Box 91 North Ryde',
                    phone: '+61 (0)2 9870 2200',
                    email: 'msft@microsoft.com'
                }
            ]
        }
    }

    removeOffice = (officeId) => {
        const offices = this.state.offices;

        let idxToDelete;

        offices.forEach((office, idx) => {
            if (office.id === officeId) {
                idxToDelete = idx;
            }
        });

        offices.splice(idxToDelete, 1);

        this.setState({
            offices: offices
        })

    };

    saveNewOffice = (officeId) => {
        let offices = this.state.offices;

        offices = offices.map((office) => {
            if (office.id === officeId) {
                office.newOffice = false;
            }
            return office;
        });

        this.setState({
            offices: offices
        })
    };

    showModal = (officeId) => {
        this.refs.deleteOfficeModal.showModal(officeId);
    };

    getOfficesTemplate_tpl () {
        return this.state.offices.map((office, idx) => {
            if (office.newOffice) {
                return <NewOffice
                    key={"new-office-" + idx}
                    onCancel={this.removeOffice}
                    onSave={this.saveNewOffice}
                    officeInfo={office}
                />
            } else {

                const onRemove = () => {
                    this.showModal(office.id)
                };

                return  (
                    <div className="office" key={"office-" + idx}>
                        <div className="office-section">
                            <div className="office-section-title">
                                <div>Address:</div>
                            </div>
                            <div className="office-section-content">
                                <div>{office.primaryHQ ? 'Primary HQ' : ''}</div>
                                <div>{office.address}</div>
                                <div>{office.city + ', ' + office.state + ' ' + office.postalCode}</div>
                                <div>{office.country}</div>
                            </div>
                        </div>
                        <div className="office-section">
                            <div className="office-section-title">
                                <div>Phone:</div>
                                <div>Email:</div>
                            </div>
                            <div className="office-section-content">
                                <div>{office.phone}</div>
                                <div>{office.email}</div>
                            </div>
                        </div>
                        <div className="office-section buttons-section">
                            <Button className="office-btn" bsSize="xsmall" onClick={onRemove}>Remove</Button>
                            <Button className="office-btn" bsStyle="primary" bsSize="xsmall">Edit</Button>
                        </div>
                    </div>
                )
            }
        })
    }

    generateOfficeId () {
        const offices = this.state.offices;

        const arrayWithIds = [];

        offices.forEach((office) => {
            arrayWithIds.push(office.id);
        });

        return Math.max.apply(null, arrayWithIds) + 1;
    }

    addNewOffice = () => {
        const offices = this.state.offices;
        offices.unshift(
            {
                id: this.generateOfficeId(),
                country: '',
                state: '',
                postalCode: '',
                city: '',
                address: '',
                alternativeAddress: '',
                phone: '',
                fax: '',
                email: '',
                primaryHQ: false,
                newOffice: true
            }
        );
        this.setState({offices: offices});
    };

    render() {
        return (
            <div>
                <header className="company-header">
                    <h1>OFFICES</h1>
                    <h1>| COMPANY INFO</h1>
                    <p>Updating your location and contact information
                        helps you appeal to regional investors and service providers.</p>
                </header>
                <hr className="divider"/>
                <div className="app-offices-container">
                    <Button className="office-btn" onClick={this.addNewOffice}>Add New Office</Button>
                    {this.getOfficesTemplate_tpl()}
                </div>
                <hr className="divider"/>
                <div className="buttons-section">
                    <Button className="office-btn">Back</Button>
                    <div className="right-section">
                        <Button className="office-btn">Skip this step</Button>
                        <Button className="office-btn" bsStyle="primary">Continue</Button>
                    </div>
                </div>

                <DeleteOfficeModal
                    onRemove={this.removeOffice}
                    ref="deleteOfficeModal"
                />

            </div>
        );
    }
}

export default OfficesInfo;
