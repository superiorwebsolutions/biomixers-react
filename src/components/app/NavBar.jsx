import React, {Component} from "react";
import {Form, FormControl, Button, Nav, Navbar} from "react-bootstrap";
import NavForm from "./NavForm";



class NavBar extends Component{


    render(){
        return(
            <>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

                        {/*<Button onClick={this.refreshResults}>Refresh Results</Button>*/}

                    </Nav>




                </Navbar.Collapse>


            </Navbar>


            {/*<NavForm></NavForm>*/}

            </>

        )
    }
}
export default NavBar