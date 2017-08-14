import React from 'react'
import WeatherEN from './weatherEN'
import './GetHoursWea.css'
import Hours from './Hours'

class GetHoursWea extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather,
			hours:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
		}
	}

	componentDidUpdate(nextProps) {
		if(this.props.weather !== nextProps.weather){
			console.log(this.props.weather)
			this.setState({
				weather:this.props.weather
			})
		}
		
	}


	render(){
		return(
			<ul className='dayMsg'>
				{this.state.weather && this.state.weather.map(function(value,index){
					return (
						<li key={index}>
							<WeatherEN weather={value} getIcon='Icon'/>
							<p>{value.temperature}</p>
							<Hours hours={this.state.hours} />
						</li>
					)
				})}
			</ul>
		)
	}
}

export default GetHoursWea