import React from 'react'
import WeatherEN from './weatherEN'
import NextWeekWeather from './NextWeekWeather'

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

	handleLogoutClick(){
		let node = document.getElementById('weatherTitle'),
		    wList = document.getElementById('weatherList')
		if(this.state.show){
			this.setState({
				show: false
			})
			node.style.backgroundColor='rgba(10,10,10,.1)'
		}else{
			this.setState({
				show: true
			})
			node.style.backgroundColor='rgba(0,0,0,0)'
		}
	}

	render(){

		return (
			<div className='weatherMsg'>
				<div className='first' onClick={this.handleLogoutClick.bind(this)}>
					<WeatherEN weather={this.state.day.day1} />
					{!this.state.show &&<NextWeekWeather day={this.state.day} />}
				</div>
				
					{this.state.show && <WeatherEN weather={this.state.day.day2} />}
				
				<div id='weatherList'>
					
				</div>
			</div>	
		)
	}
}

export default Futureweather