import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import WeatherEN from './weatherEN'


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
	
	
	render(){
	
		return (
			<div className='weatherMsg'>
				<div className='first'>
					<WeatherEN weather={this.state.day.day1} />
				</div>
				
			</div>	
		)
	}
}


export default Futureweather