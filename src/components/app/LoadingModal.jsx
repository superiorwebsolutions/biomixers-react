import React, {Component} from "react";
import {Modal} from "react-bootstrap";

class LoadingModal extends Component{


    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Modal className="modal loading-modal" show={this.props.loading}>
                <Modal.Body>
                    Loading events..
                </Modal.Body>
            </Modal>
        )
    }
}
export default LoadingModal