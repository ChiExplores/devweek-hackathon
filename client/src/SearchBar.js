import React from 'react';

const SearchBar = (props) => {
	return (
		<>
			<form className='city-search' onSubmit={props.handleSearch}>
				<input 
					placeholder="search City" type="text" autoComplete="off"  
					onChange={props.handleChange}
					city={props.city} />
				<button id='searchBtn'>
					Search
				</button>
			</form>
		</>
	);
}

export default SearchBar;



