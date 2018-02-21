import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';

class  App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> {this.setState({ robots: users})});
	}
	render() {
		const robotsResult = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		if (this.state.robots.length === 0) {
			return <h1 className = "tc">App Loading...</h1>
		}
		else{
			return(
				<div className = "tc">
					<h1>RoboFriends</h1>
					<SearchBox  searchChange =  {this.onSearchChange}/>
					<CardList  robots = {robotsResult}/>
				</div>
			);
		}
	}
}

export default App;
