import React, {Component, useState} from "react";
import PropTypes from 'prop-types';
import "../../assets/modal.css"
import {Button, Modal} from 'react-bootstrap';

class MemberModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    hideModal(){
        this.setState({show: false})
    }

    showModal(){
        this.setState({show: true})
    }

    render() {
        let membersAttending = this.props.data;

        return (
            <>



                <Button variant="secondary" size="sm" onClick={this.showModal}>
                    View {this.props.count} Members Attending
                </Button>

                <Modal className="modal" show={this.state.show} onHide={this.hideModal}>

                    <Modal.Body>

                        {
                            Object.values(membersAttending).map(member =>

                                <div key={member.memberData.fullName + "-" + member.userId}>{member.memberData.fullName} <span className="met-others-count">(has met {member.pmc} others)</span></div>

                            )
                        }


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={this.hideModal}>
                            Close
                        </Button>
                    </Modal.Footer>


                </Modal>
            </>
        )

    }
}
export default MemberModal