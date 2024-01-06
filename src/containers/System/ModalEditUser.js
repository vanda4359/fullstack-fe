import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from '../../utils/emitter';
import _ from "lodash"

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        }
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState ({
                email: user.email,
                password: "123345",
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
    }

    toggle = () => {
        this.props.toggleUserEditModal();
    }

    handleOnChangeInput = (event, text) => {
        let copyState = { ...this.state };
        copyState[text] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ["email", "password", "firstName", "lastName", "address"];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing parameter " + arrInput[i]);
                break
            }
        }
        return isValid;
    }

    handleEditUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.editUser({
                id: this.props.currentUser.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
            });
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                size="lg"
                centered
                className="modal-user-container"
            >
                <ModalHeader toggle={() => { this.toggle() }}>Edit User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div class="input-container">
                            <label>Email</label>
                            <input
                                type="email"
                                class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div class="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                                value={this.state.password}
                                disabled
                            />
                        </div>
                        <div class="input-container">
                            <label>First name</label>
                            <input
                                type="text"
                                class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                value={this.state.firstName}
                            />
                        </div>
                        <div class="input-container">
                            <label>Last name</label>
                            <input
                                type="text"
                                class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                value={this.state.lastName}
                            />
                        </div>
                        <div class="input-container max-width-input">
                            <label>Address</label>
                            <input
                                type="text"
                                class="form-control"
                                onChange={(event) => this.handleOnChangeInput(event, "address")}
                                value={this.state.address}
                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button className="px-3" color="secondary" onClick={() => { this.toggle() }}>
                        Close
                    </Button>{" "}
                    <Button className="px-3" color="primary" onClick={() => { this.handleEditUser() }}>
                        Save changes
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
