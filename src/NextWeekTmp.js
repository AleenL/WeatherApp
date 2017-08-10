import React from 'react'
import WeekdayEN from './WeekdayEN'
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
					<WeekdayEN ch={this.state.day.day1.day} choose='enless'/>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day2} getIcon='Icon'/>
					<WeekdayEN ch={this.state.day.day2.day} choose='enless'/>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day3} getIcon='Icon'/>
					<WeekdayEN ch={this.state.day.day3.day} choose='enless'/>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day4} getIcon='Icon'/>
					<WeekdayEN ch={this.state.day.day4.day} choose='enless'/>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day5} getIcon='Icon'/>
					<WeekdayEN ch={this.state.day.day5.day} choose='enless'/>
				</div>
				<div className='iconList'>
					<Weekdaytmp weather={this.state.day.day6} getIcon='Icon'/>
					<WeekdayEN ch={this.state.day.day6.day} choose='enless'/>
				</div>
			</div>
		)
	}
}

export default NextWeekWeather