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
import GetToday from './GetToday'
import GetSuggestion from './GetSuggestion'

const hello = ({location}) =>(
	<div>
		<div className='userAction'>
			<div className='ReturnBack'>
				<p><Link to='/'><i className='iconfont'>&#xe603;</i></Link></p>
				<p>建议</p>
			</div>
			<div className='suggestionPage'>
				<div className='weatherList'>
					<div>
						<div className='weatherListTitle'>
							<WeatherCN weather={location.state.today} getIcon='Icon' />
							<p>{location.state.today.text}</p>
							<p>{location.state.today.temperature}°C</p>
							<p>{location.state.suggest.suggestion.sport.brief}运动</p>
						</div>
						<div className='weatherItems'>
							<p><i className='iconfont'>&#xe71a;</i>湿度 {location.state.today.humidity}%</p>
							<p><i className='iconfont'>&#xe62d;</i>体感温度 {location.state.today.feels_like}°</p>
							<WindIcon wind={location.state.today} />
							<p><i className='iconfont'>&#xe654;</i>紫外线 {location.state.suggest.suggestion.uv.brief}</p> 
						</div>
					</div>
					<GetToday today={location.state.suggest}/>
					<AirQuality air={location.state.today.air_quality} />
					<GetSuggestion style={location.state.suggest.suggestion.car_washing} icon='washingCar' text='洗车建议'/>
					<GetSuggestion style={location.state.suggest.suggestion.dressing} icon='clothes' text='温度状况'/>
					<GetSuggestion style={location.state.suggest.suggestion.flu} icon='feelCold' text='感冒指数'/>
					<GetSuggestion style={location.state.suggest.suggestion.sport} icon='Sport' text='运动建议'/>
					<GetSuggestion style={location.state.suggest.suggestion.car_washing} icon='travel' text='旅游建议'/>
					<GetSuggestion style={location.state.suggest.suggestion.uv} icon='uvNumber' text='防晒指数'/>
				</div>
			</div>
		</div>
	</div>
)

export default hello