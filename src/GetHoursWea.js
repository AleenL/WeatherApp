import React from 'react'
import WeatherEN from './weatherEN'

class GetHoursWea extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather
		}
	}

	componentDidUpdate(nextProps) {
		if(this.props.weather !== nextProps.weather){
			this.setState({
				weather:this.props.weather
			})
		}
		
	}


	render(){
		return(
			<ul className='dayMsg'>
				{this.state.weather && this.state.weather.map(function(value,index){
					return <li key={index}><WeatherEN weather={value} getIcon='Icon'/></li>
				})}
			</ul>
		)
	}
}

export default GetHoursWea