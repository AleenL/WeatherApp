import React from 'react'
import Account from './Account'

const account = new Account({name: 'Tong'});

class WeekdayEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			tmp: this.props.weather.high,
			name: account.data.name,
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