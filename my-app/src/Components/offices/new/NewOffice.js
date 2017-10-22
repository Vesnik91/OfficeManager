import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import '../OfficesInfo.css';

class NewOffice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            officeInfo: props.officeInfo
        };
    }

    getValidationState() {
        return 'success'
    }

    handleCountryChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.country =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handleStateChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.state =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handlePostalCodeChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.postalCode =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handleCityChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.city =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handleAddressChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.address =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handleAlternativeAddressChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.alternativeAddress =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handlePhoneChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.phone =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handleFaxChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.fax =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handleEmailChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.email =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    handlePrimaryHQChange = (e) => {
        const officeInfo = this.state.officeInfo;
        officeInfo.primaryHQ =  e.target.value;
        this.setState({ officeInfo: officeInfo });
    };

    onCancel = () => {
        if (this.props.onCancel) {
            this.props.onCancel(this.state.officeInfo.id);
        }
    };

    onSave = () => {
        if (this.props.onSave) {
            this.props.onSave(this.state.officeInfo.id);
        }
    };

    render() {
        return (
            <div className="office new-office">
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <div className="office-section">
                            <div>
                                <ControlLabel>*Country:</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    value={this.state.country}
                                    placeholder="Country"
                                    onChange={this.handleCountryChange}
                                >
                                    <option value="">Country</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </FormControl>
                            </div>
                            <div>
                                <ControlLabel>*State/Province:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.state}
                                    placeholder="State/Province"
                                    onChange={this.handleStateChange}
                                />
                            </div>
                            <div>
                                <ControlLabel>*Postal Code:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.postalCode}
                                    placeholder="Code"
                                    onChange={this.handlePostalCodeChange}
                                />
                            </div>
                            <div>
                                <ControlLabel>*City:</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    value={this.state.city}
                                    placeholder="City"
                                    onChange={this.handleCityChange}
                                >
                                    <option value="">City</option>
                                    <option value="New York">New York</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="London">London</option>
                                </FormControl>
                            </div>
                            <div>
                                <ControlLabel>*Street Address:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.address}
                                    placeholder="Address"
                                    onChange={this.handleAddressChange}
                                />
                            </div>
                            <div>
                                <ControlLabel>Address 2:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.alternativeAddress}
                                    placeholder="Address"
                                    onChange={this.handleAlternativeAddressChange}
                                />
                            </div>
                        </div>
                        <div className="office-section">
                            <div>
                                <ControlLabel>Phone:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.phone}
                                    placeholder="Phone"
                                    onChange={this.handlePhoneChange}
                                />
                            </div>
                            <div>
                                <ControlLabel>Fax:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.fax}
                                    placeholder="Fax"
                                    onChange={this.handleFaxChange}
                                />
                            </div>
                            <div>
                                <ControlLabel>Email:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div>
                                <ControlLabel>Office type:</ControlLabel>
                                <Checkbox inline
                                          onChange={this.handlePrimaryHQChange}
                                >
                                    Primary HQ
                                </Checkbox>
                            </div>
                        </div>
                        <div className="office-section buttons-section">
                            <Button
                                className="office-btn"
                                bsSize="xsmall"
                                onClick={this.onCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="office-btn"
                                bsStyle="primary"
                                bsSize="xsmall"
                                onClick={this.onSave}
                            >
                                Save
                            </Button>
                        </div>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default NewOffice;
