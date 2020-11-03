import React, {Component} from "react";
import moment from "moment"
import ServiceApi from "../../services/ServiceApi";
import FinalEventCollection from "./FinalEventCollection"

import MembersAttendingModal from "./MembersAttendingModal";
import {Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import NavForm from "./NavForm";




class ResultsComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            results: [],
            searchFilterQuery: {
                minAllowedPerRestaurant: 6,
                maxAllowedPerRestaurant: 16,
                numDaysOfAvailability: 4,
                numFoodPreferences: 3,
                percentageOfMembersMet: 25,
                randomizeResults: false
            }

        }

        this.applySearchFilterQuery = this.applySearchFilterQuery.bind(this);
        this.refreshResults = this.refreshResults.bind(this);
        this.updateState = this.updateState.bind(this);


    }


    componentDidMount(){

    }

    refreshResults(){
        this.setState({
            loading: true
        })
        ServiceApi.getAllMembers()
            .then(
                (response) => {
                    this.setState({
                        results: response.data,
                        loading: false
                    })
                    console.log("CHECK STATE")
                    console.log(this.state);
                }
            )
    }

    applySearchFilterQuery(){

        ServiceApi.applySearchFilterQuery(this.state.searchFilterQuery).then(
            (response) => {

                console.log(response);
                this.refreshResults();
            }

        );
    }

    updateState(event){

        let value
        if(event.target.type === 'checkbox')
            value = event.target.checked
        else
            value = event.target.value

        let name = event.target.name;

        this.setState(prevState => (
            {
                searchFilterQuery: {
                    ...prevState.searchFilterQuery,
                    [name]: value
                }
            }
        ));
    }








    render(){

        return (
            <>
                <Modal className="modal loading-modal" show={this.state.loading}>

                    <Modal.Body>

                        Loading results..

                    </Modal.Body>



                </Modal>





            <br /><br />



            <div className="container">

                <h1 className="header-title">BIOmixers Event Generator</h1>
                <Button onClick={this.refreshResults}>Refresh Results</Button>
                <NavForm searchFilterQuery={this.state.searchFilterQuery} updateState={this.updateState} applySearchFilterQuery={this.applySearchFilterQuery}></NavForm>
                <NavBar></NavBar>

                {
                    this.state.results.map(
                        (result, index) =>{


                            if((index) % 3 == 0 && index != 0)
                                return(
                                    <>
                                    <div style={{clear:'both'}}></div>
                                    <FinalEventCollection key={index} data={result} index={index + 1}></FinalEventCollection>
                                    </>

                                )
                            else
                                return(
                                    <FinalEventCollection key={index} data={result} index={index + 1}></FinalEventCollection>
                                )
                        }
                    )
                }


            </div>


        </>
        )
    }
}



export default ResultsComponent
