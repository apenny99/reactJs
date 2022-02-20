import React, { Component } from 'react';
import { DropdownButton, Dropdown} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        // The state is just a list of key/value pair (like a hashmap)
        this.state = {
            search: "",
            type: "all"
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
          this.setState({search: event.target.value.toLowerCase()});
    }
    onSelect = (event) => {
        this.setState({type: event});
    }


    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if(item.name.toLowerCase().search(this.state.search) === -1) return false;
        if(this.state.type === "fruit" && item.type === "Vegetable") return false;
        return item.name.toLowerCase().search(this.state.search) !== -1;
    }

    render() {
        return (
            <div className="filter-list">
               <h1>Search Food</h1>
               <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelect}>
                    <Dropdown.Item Eventkey="all">All</Dropdown.Item>
                    <Dropdown.Item Eventkey="fruit">Fruit</Dropdown.Item>
                    <Dropdown.Item Eventkey="Vegetable">Vegetable</Dropdown.Item>
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}


export default FilteredList;