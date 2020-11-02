import React, {Component} from "react";
import '../../assets/style.css';
import Event from "./Event";
import MembersAttendingModal from "./MembersAttendingModal";


import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";
import MembersUnplacedModal from "./MembersUnplacedModal";


class FinalEventCollection extends Component{

    constructor(props){
        super(props);
    }

    render() {
        let item = this.props.data;
        let index = this.props.index;

        let membersUnplaced = [];

        Object.values(item.membersPlacedList).map(member => {
                membersUnplaced.push(member.fullName);
            }
        )

        let membersUnplacedString = membersUnplaced.join(', ');
        return (
            
            <div className="event-result-wrapper">

                <div className="event-result-header">
                    <div className="count">{index}</div>

                    <strong className="placed">{item.htmlPlaced}</strong>


                </div>

                <div className="event-result-body">
                    {item.maxActiveConfigs} (max_active_configs)<br />
                    {item.maxMembersAllowedPerRestaurant} (max_members_allowed_per_restaurant)<br /><br />
                    Total PMC: {item.totalPmc}
                    <br />
                    {
                        Object.keys(item.configTree).map(key =>
                            <Event key={key} data={item.configTree[key]}></Event>
                        )
                    }


                    {item.numUnplacedInt != 0 &&
                    <div className="unplaced-members-wrapper">
                        <MembersUnplacedModal membersUnplaced={membersUnplacedString} numUnplacedInt={item.numUnplacedInt}></MembersUnplacedModal>
                    </div>
                    }






                </div>
            </div>
    );
    }

    }
export default FinalEventCollection
