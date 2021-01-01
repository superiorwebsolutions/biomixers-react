import React, {Component} from "react";
import '../../assets/style.css';
import Event from "./Event";
import MembersAttendingModal from "./MembersAttendingModal";


import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";
import MembersUnplacedModal from "./MembersUnplacedModal";
import ServiceApi from "../../services/ServiceApi";


class FinalEventCollection extends Component{

    constructor(props){
        super(props);
    }

    render() {
        console.log("render loaded")
        let finalEventCollection = this.props.data;
        let index = this.props.index;

        let membersUnplaced = [];

        Object.values(finalEventCollection.membersPlacedList).map(member => {
                membersUnplaced.push(member.fullName);
            }
        )

        let membersUnplacedString = membersUnplaced.join(', ');


        return (
            
            <div className="event-result-wrapper">

                <div className="event-result-header">

                    <div className="count float-left">{index}</div>

                    <div className="placed float-right">{finalEventCollection.htmlPlaced}</div>



                </div>

                <div className="event-result-body">


                    // TODO:  Uncomment this to allow saving of event collections
                    {/*<Button onClick={() => {*/}
                    {/*    ServiceApi.saveFinalEventCollection(finalEventCollection)*/}
                    {/*        .then(function (response) {*/}
                    {/*            console.log(response);*/}
                    {/*        })*/}
                    {/*        .catch(function (error) {*/}
                    {/*            console.log(error);*/}
                    {/*        });*/}
                    {/*}}>Run This Event</Button>*/}

                    {/*{finalEventCollection.maxActiveConfigs} (max_active_configs)<br />*/}
                    {/*{finalEventCollection.maxMembersAllowedPerRestaurant} (max_members_allowed_per_restaurant)<br /><br />*/}

                    <br />
                    <div>Total PMC: {finalEventCollection.totalPmc}</div>
                    <br />
                    {
                        Object.keys(finalEventCollection.configTree).map(key =>
                            <Event key={key} data={finalEventCollection.configTree[key]}></Event>
                        )
                    }


                    {finalEventCollection.numUnplacedInt != 0 &&
                    <div className="unplaced-members-wrapper">
                        <MembersUnplacedModal membersUnplaced={membersUnplacedString} numUnplacedInt={finalEventCollection.numUnplacedInt}></MembersUnplacedModal>
                    </div>
                    }






                </div>
            </div>
    );
    }

    }
export default FinalEventCollection
