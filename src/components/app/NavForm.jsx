import React, {Component} from "react";
import ServiceApi from "../../services/ServiceApi";

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Minimum Members Per Restaurant:
                    <input name="minAllowedPerRestaurant" type="text" value={this.props.searchFilterQuery.minAllowedPerRestaurant} onChange={this.handleChange} />
                </label>
                <label>
                    Maximum Members Per Restaurant:
                    <input name="maxAllowedPerRestaurant" type="text" value={this.props.searchFilterQuery.maxAllowedPerRestaurant} onChange={this.handleChange} />
                </label>
                <label>
                    Randomize Member Sample Data:
                    <input name="randomizeResults" type="checkbox" value={this.props.searchFilterQuery.randomizeResults} onChange={this.handleChange} />
                </label>
                <label>
                    Percentage Members Met:
                    <input name="percentageOfMembersMet" type="text" value={this.props.searchFilterQuery.percentageOfMembersMet} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NavForm