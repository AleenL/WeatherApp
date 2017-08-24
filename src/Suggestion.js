import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './Suggestion.css'
import GetTime from './GetTime'
import WeatherCN from './weatherCN'



const hello = ({location}) =>(
	<div>
		<div className='userAction'>
			<div className='ReturnBack'>
				<p><Link to='/'><i className='iconfont'>&#xe603;</i></Link></p>
				<p>建议</p>
			</div>
			<div className='suggestionPage'>
				<GetTime/>
				<div className='weatherList'>
				{console.log(location.state)}
					<div className='weatherListTitle'>
						<WeatherCN weather={location.state.today} getIcon='Icon' />
						<p>{location.state.today.text}</p>
						<p>{location.state.today.temperature}°C</p>
						<p>{location.state.suggest.suggestion.sport.brief}运动</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default hello