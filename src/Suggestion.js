import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './Suggestion.css'



const hello = ({location}) =>(
	<div>
		<div className='userAction'>
			<div className='ReturnBack'>
				<p><Link to='/'><i className='iconfont'>&#xe603;</i></Link></p>
				<p>建议</p>
			</div>
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