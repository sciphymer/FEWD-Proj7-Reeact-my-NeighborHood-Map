import React, { Component } from 'react';
class SearchMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			query:[],
			searchInput:""
		}
	}

	render(){
		let showMenu = this.props.showSearchMenu;
		let mapLocation = this.props.mapLocations;
		return(
			<div className={`location-menu ${showMenu?"open":""}`}>
				<p className="location-menu-title">
					Hong Kong Attractions
				</p>
				<div className="search-bar">
					<label for="location_input">Input attractions location for filtering</label>
					<input id="location_input" type="text" tabindex="0" placeholder="Attractions Location"/>
					<label for="filter button">filter</label>
					<button id="filter button" tabindex="0" onClick={this.props.doLocationFilter}>Filter</button>
				</div>
				{mapLocation.map((location,index)=>{
					return(
					<div role="button" tabindex="0" key={index} className="locationList"
					onClick={(e)=>{this.props.selectedLocationHandler(e.target.innerText)}}
					onKeyPress={(e)=>{this.props.selectedLocationHandler(e.target.innerText)}}
					>
					{location.title}</div>
					)
				})}
			</div>
		)
	}
}

export default SearchMenu