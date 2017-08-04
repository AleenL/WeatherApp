import React from 'react'

class WeekdayEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			tmp: this.props.weather.high
		}
	}

	componentDidUpdate(nextProps, nextState){
		if(this.props.weather !== nextProps.weather)
		this.setState({
			tmp:this.props.weather.high
		})
	}
	componentDidMount() {
		if(this.state.weather)
		this.setState({
			tmp:this.state.weather.high
		})
	}

	render(){
		return <p>{this.state.tmp}°</p>	
	}
}

export default WeekdayEN