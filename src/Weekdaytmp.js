import React from 'react'


class WeekdayEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			tmp: this.props.weather.high
		}
	}
	componentDidUpdate(nextProps) {
		if(nextProps.weather.high !== this.props.weather.high){
			this.setState({
				tmp: this.props.weather.high
			})
		}
	}

	render(){
		return <p>{this.state.tmp}°</p>	
	}
}

export default WeekdayEN