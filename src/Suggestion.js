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
import WindIcon from './WindIcon'
import AirQuality from './AirQuality'
import Yinli from './Yinli'



const hello = ({location}) =>(
	<div>
		<div className='userAction'>
			<div className='ReturnBack'>
				<p><Link to='/'><i className='iconfont'>&#xe603;</i></Link></p>
				<p>建议</p>
			</div>
			<div className='suggestionPage'>
				<p className='timeShow'>{new GetTime(new Date()).GetHM()}</p>
				<div className='weatherList'>
				{console.log(location.state)}
					<div>
						<div className='weatherListTitle'>
							<WeatherCN weather={location.state.today} getIcon='Icon' />
							<p>{location.state.today.text}</p>
							<p>{location.state.today.temperature}°C</p>
							<p>{location.state.suggest.suggestion.sport.brief}运动</p>
						</div>
						<Yinli />
						<div className='weatherItems'>
							<p><i className='iconfont'>&#xe71a;</i>湿度 {location.state.today.humidity}%</p>
							<p><i className='iconfont'>&#xe62d;</i>体感温度 {location.state.today.feels_like}°</p>
							<WindIcon wind={location.state.today} />
							<p><i className='iconfont'>&#xe654;</i>紫外线 {location.state.suggest.suggestion.uv.brief}</p> 
						</div>
					</div>
					<AirQuality air={location.state.today.air_quality} />
				</div>
			</div>
		</div>
	</div>
)

export default hello