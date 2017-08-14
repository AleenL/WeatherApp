import React from 'react'

class Hours extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			hours:this.props.hours
		}
	}

	componentDidUpdate(nextProps) {
		console.log(this.state.hours)
		if(this.props.hours !== nextProps.hours){
			
			this.setState({
				hours:this.props.hours
			})
		}
	}

	render(){
		return (
			<p>ff</p>
		)
	}
}

export default Hours
