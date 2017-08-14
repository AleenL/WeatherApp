import React from 'react'
import WeatherEN from './weatherEN'
import './GetHoursWea.css'
import PieReact from './pieReact'

class GetHoursWea extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather
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
			<div>
				{this.state.weather && <PieReact tmp={this.state.weather} />}
				<ul className='dayMsg'>
					
					{this.state.weather && this.state.weather.map(function(value,index){
						return (
							<li key={index}>
								<WeatherEN weather={value} getIcon='Icon'/>
								<p>{value.temperature}<span>°</span></p>
								<p>{index+1}时</p>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default GetHoursWea