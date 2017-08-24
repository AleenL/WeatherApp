import React from 'react'

class GetTime extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			date:new Date,
		}
	}

	componentDidMount() {
		setInterval(() => this.setState({date:new Date}),1000)
	}

	render(){
		return (
			<p className='timeShow'>
			{this.state.date.getHours()<10 ? ('0'+this.state.date.getHours()) : this.state.date.getHours()}:
			{this.state.date.getMinutes()<10 ? ('0'+this.state.date.getMinutes()) : this.state.date.getMinutes()}
			</p>
		)
	}
}

export default GetTime