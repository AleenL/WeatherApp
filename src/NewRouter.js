import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import WeatherEN from './weatherEN'
import NextWeekWeather from './NextWeekWeather'
import NextWeekTmp from './NextWeekTmp'
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './FutureWeather.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Futureweather extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			today:this.props.weather[0],
			day:this.props.weather[1],
			show:true,
		}
	}
	componentDidUpdate(nextProps, nextState) {
		if (this.props.weather !== nextProps.weather)
		this.setState({
			today:this.props.weather[0],
			day:this.props.weather[1],
		})
	}
	
	const About = () =>(
		<NextWeekTmp day={this.state.day} />
	)
	
	const Home = () =>(
		<NextWeekWeather day={this.state.day} />
	)

	const Message = () =>(
		<WeatherEN weather={this.state.day.day2} />
	)
	render(){

		return (
			<div className='weatherMsg'>
				<div className='first'>
					<WeatherEN weather={this.state.day.day1} />
				</div>
				{this.props.children}
				<div>
				<ul>
          			<li><Link to="/">Home</Link></li>
          			<li><Link to="/about">About</Link></li>
          			<li><Link to="/inbox">Inbox</Link></li>
        		</ul>
				</div>
			</div>	
		)
	}
}

export default Futureweather