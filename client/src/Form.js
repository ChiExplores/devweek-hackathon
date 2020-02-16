import React, { useEffect, useState } from "react";
import SearchBar from './SearchBar'
const Form = (props) => {
  
	return (
		<>
			<SearchBar
       handleChange={props.handleChange}
       handleSearch={props.handleSearch}
       city={props.city} 
      />
		</>
	);
}
export default Form;
