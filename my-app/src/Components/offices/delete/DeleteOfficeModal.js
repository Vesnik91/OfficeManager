import React, { Component } from 'react';
import '.././OfficesInfo.css';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class DeleteOfficeModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            reason: '',
            officeId: undefined
        }
    }

    showModal = (officeId) => {
        this.setState({
            showModal: true,
            officeId: officeId
        })
    };

    closeModal = () => {
        this.setState({
            showModal: false
        });

        if (this.props.onClose) {
            this.props.onClose(this.state.officeId);
        }
    };

    removeRecord = () => {
        this.closeModal();
        if (this.props.onRemove) {
            this.props.onRemove(this.state.officeId);
        }
    };

    handleReasonChange = (e) => {
        this.setState({ reason: e.target.value });
    };

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header>
                    <Modal.Title>Please tell us why you're removing this record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId="form-reason">
                            <FormControl
                                componentClass="select"
                                value={this.state.country}
                                placeholder="Reason"
                                onChange={this.handleReasonChange}
                            >
                                <option value="">Reason</option>
                                <option value="Former Record">Former Record</option>
                                <option value="Duplicate Record">Duplicate Record</option>
                                <option value="Record never Existed">Record never Existed</option>
                                <option value="Other">Other</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="form-notes">
                            <ControlLabel>Notes: </ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Notes"/>
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal} className="office-btn">Cancel</Button>
                    <Button onClick={this.removeRecord} className="office-btn" bsStyle="primary">Remove record</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default DeleteOfficeModal;
