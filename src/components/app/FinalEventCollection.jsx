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


        // Sort results by day of week
        let daysOfWeekList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

        let resultsList = []

        for(let dayName of daysOfWeekList){
            Object.keys(finalEventCollection.configTree).map(key => {
                if (finalEventCollection.configTree[key].dayOfWeek == dayName) {
                    resultsList.push({key: key, configTree: finalEventCollection.configTree[key]})
                }
            }
        )}



        return (
            
            <div className="event-result-wrapper">

                <div className="event-result-header">

                    <div className="count float-left">{index}</div>

                    <div className="placed float-right">{finalEventCollection.htmlPlaced}</div>



                </div>

                <div className="event-result-body">


                    {/* TODO:  Uncomment this to allow saving of event collections*/}
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
                    <div>{finalEventCollection.totalPmc} member interactions</div>
                    <br />



                        {[...resultsList].map((resultObj, i) =>

                            <Event key={resultObj.key} data={resultObj.configTree}></Event>

                        )}







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
