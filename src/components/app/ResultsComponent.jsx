import React, {Component} from "react";
import moment from "moment"
import ServiceApi from "../../services/ServiceApi";
import FinalEventCollection from "./FinalEventCollection"

import MemberModal from "./MemberModal";
import {Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';




class ResultsComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            results: []
        }

        this.refreshResults = this.refreshResults.bind(this);
    }


    componentDidMount(){


        //
        // ServiceApi.getAllMembers().then(
        //     response =>{
        //         console.log(response)
        //     }
        //
        // )
        /*
        ServiceApi.getAllMembers().then(
            response => this.setState({
                results: response.data
                // description: response.data.description,
                // targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            })

        )

         */



    }

    refreshResults(){
        ServiceApi.getAllMembers()
            .then(
                response => {
                    this.setState({results: response.data})
                }
            )
    }






    render(){

        return <div>
            <h1 className="header-title">BIOmixers Event Generator</h1>

            <Button onClick={this.refreshResults}>Refresh Results</Button>

            <br /><br />

            {/* TODO:  create loading popup */}


            <div className="container">

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


        </div>
    }
}



export default ResultsComponent
