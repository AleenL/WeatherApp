import React from 'react'
import GetIcon from './GetIcon'

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
				<div>
					<GetIcon day={this.state.day.day1.text} />
					<p></p>
				</div>
				<div>
					<GetIcon day={this.state.day.day2.text} />
					<p></p>
				</div>
				<div>
					<GetIcon day={this.state.day.day3.text} />
					<p></p>
				</div>
				<div>
					<GetIcon day={this.state.day.day4.text} />
					<p></p>
				</div>
				<div>
					<GetIcon day={this.state.day.day5.text} />
					<p></p>
				</div>
				<div>
					<GetIcon day={this.state.day.day6.text} />
					<p></p>
				</div>
			</div>
		)
	}
}

export default NextWeekWeather