import React, {Component} from "react";
import {Form, FormControl, Button, Nav, Navbar} from "react-bootstrap";

class NavForm extends Component {
    constructor(props) {
        super(props);



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.props.updateState(event);

    }


    handleSubmit(event) {
        this.props.applySearchFilterQuery();

        // TODO:  validation:  make sure minAllowedPerRestaurant is less than maxAllowedPerRestaurant

        event.preventDefault();
    }

    render() {
        return (
            <>

                {/*<Navbar bg="light" expand="lg">*/}
                {/*    <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                {/*    <Navbar.Collapse id="basic-navbar-nav">*/}
                {/*        <Nav className="mr-auto">*/}
                {/*            <Nav.Link href="#home">Home</Nav.Link>*/}
                {/*            <Nav.Link href="#link">Link</Nav.Link>*/}

                {/*            /!*<Button onClick={this.refreshResults}>Refresh Results</Button>*!/*/}

                {/*        </Nav>*/}




                {/*    </Navbar.Collapse>*/}


                {/*</Navbar>*/}


                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="restaurantBounds">
                        <Form.Label>Minimum Members Per Restaurant:</Form.Label>
                        <Form.Control name="minAllowedPerRestaurant" type="text" value={this.props.searchFilterQuery.minAllowedPerRestaurant} onChange={this.handleChange} />

                        <Form.Label>Maximum Members Per Restaurant:</Form.Label>
                        <Form.Control name="maxAllowedPerRestaurant" type="text" value={this.props.searchFilterQuery.maxAllowedPerRestaurant} onChange={this.handleChange} />



                    </Form.Group>

                    <Form.Group controlId="sampleDataBounds">
                        <Form.Label>Randomize Member Sample Data:</Form.Label>
                        <Form.Control name="randomizeResults" type="checkbox" value={this.props.searchFilterQuery.randomizeResults} onChange={this.handleChange} />

                        <Form.Label>Percentage Members Met:</Form.Label>
                        <Form.Control className="percentageOfMembersMet" name="percentageOfMembersMet" type="text" value={this.props.searchFilterQuery.percentageOfMembersMet} onChange={this.handleChange} />
                    </Form.Group>

                    <Button id="submit" variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>

            </>
        );
    }
}
export default NavForm