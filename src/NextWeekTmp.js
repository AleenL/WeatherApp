import React from 'react'
import Weekdaytmp from './Weekdaytmp'
import './NextWeekWeather.css'

class NextWeekWeather extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			day:this.props.day
		}
	}

	componentDidUpdate(nextProps, nextState) {
		if (this.props.day !== nextProps.day)
			this.setState({
				day:this.props.day
			})
	}

	render(){
		return(
			<div className='NextWeekWeather'>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day1} getIcon='Icon'/>
					<p>{this.state.day.day1.day}</p>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day2} getIcon='Icon'/>
					<p>{this.state.day.day1.day}</p>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day3} getIcon='Icon'/>
					<p>{this.state.day.day1.day}</p>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day4} getIcon='Icon'/>
					<p>{this.state.day.day1.day}</p>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day5} getIcon='Icon'/>
					{/*<WeekdayEN ch={this.state.day.day5.day} choose='enless'/>*/}
					<p>{this.state.day.day1.day}</p>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day6} getIcon='Icon'/>
					<p>{this.state.day.day1.day}</p>
				</div>
			</div>
		)
	}
}

export default NextWeekWeather