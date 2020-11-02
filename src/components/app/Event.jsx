import React, {Component} from "react";
import MembersAttendingModal from "./MembersAttendingModal";

class Event extends Component{
    constructor(props) {
        super(props)
    }



    render() {
        let event = this.props.data;
        let membersAttending = [];
        //console.log(this.props.data.membersAttending)

        // Convert object to javascript list
        Object.values(this.props.data.membersAttending).map(val =>
            membersAttending.push(val)
        )


        return (

            <div key={event.configId} className="event-wrapper">

                <div className="day-time">
                    {event.dayOfWeek} - {event.timeOfDay} - {event.foodType}
                </div>

                <div className="member-list">
                    <MembersAttendingModal data={membersAttending} index={event.configId} count={event.count}></MembersAttendingModal>
                </div>
            </div>
        )
    }
}
export default Event