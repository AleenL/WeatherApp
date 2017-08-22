import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'



const hello = ({location}) =>(
	<div>
		<div className='userAction'>
		{console.log(location.state)}
		<p>{location.state.dressing.details}</p>
		<p>{location.state.flu.details}</p>
		<p>{location.state.car_washing.details}</p>
		<p>{location.state.sport.details}</p>
		<p>{location.state.travel.details}</p>
		</div>
	</div>
)

export default hello