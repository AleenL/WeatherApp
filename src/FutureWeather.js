import React from 'react'
import WeatherEN from './weatherEN'
import NextWeekWeather from './NextWeekWeather'

import './FutureWeather.css'

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
			wList.style.height='5rem'
		}else{
			setTimeout(() => this.setState({
				show: true
			}),1000)
			console.log(this.props.weather)
			node.style.backgroundColor='rgba(0,0,0,0)'
			wList.style.height='0rem'
		}
	}

	render(){

		return (
			<div className='weatherMsg'>
				<div className='first' onClick={this.handleLogoutClick.bind(this)}>
					<WeatherEN weather={this.state.day.day1} />
					<NextWeekWeather day={this.state.day} />
				</div>
				{this.state.show && <WeatherEN weather={this.state.day.day2} />}
				<div id='weatherList'>
					
				</div>
			</div>	
		)
	}
}

export default Futureweather