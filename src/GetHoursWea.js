import React from 'react'

class GetHoursWea extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather
		}
	}

	componentDidUpdate(nextProps) {
		console.log(this.props.weather[0].code)
		if(this.props.weather !== nextProps.weather){
			this.setState({
				weather:this.props.weather
			})
		}
	}



	render(){
		return(
			<ul>
				
			</ul>
		)
	}
}

export default GetHoursWea