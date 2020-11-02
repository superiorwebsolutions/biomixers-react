import React, {Component} from "react";
import {Button, Modal} from 'react-bootstrap';

class MembersUnplacedModal extends Component{

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
        let membersUnplaced = this.props.membersUnplaced
        let numUnplacedInt = this.props.numUnplacedInt

        return (
            <>



                <Button variant="outline-info" size="sm" onClick={this.showModal}>
                    <div className="unplaced-members-title">View {numUnplacedInt} unplaced members</div>
                </Button>

                <Modal className="modal" show={this.state.show} onHide={this.hideModal}>

                    <Modal.Title>{numUnplacedInt} unplaced members</Modal.Title>

                    <Modal.Body className="unplaced-members">
                        {membersUnplaced}
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
export default MembersUnplacedModal