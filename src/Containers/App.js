import React from "react";
import CardList from "../components/CardList.js";
import { robots } from "../robots.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import "./App.css"
import ErrorBoundry from "../components/ErrorBoundry.js";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value.toLowerCase()})
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField);
        });

        return (
            <div className="tc">
                <h1 className="f1">roboFreinds</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>    
            </div>
        );
    }
}

export default App