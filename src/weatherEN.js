import React from 'react'
import Weekday from './WeekdayEN'

class WeatherEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather,
			text:this.props.weather.text
		}
	}


	componentDidUpdate(nextProps, nextState) {
		if (this.props.weather !== nextProps.weather){
			console.log(this.props.weather.text)
			if(this.props.weather.text.indexOf('多云') >-1){
				this.setState({
					text:'Cloudy'
				})
			}
			if(this.props.weather.text.indexOf('晴') > -1 && this.props.weather.text.length<3){
				this.setState({
					text:'Sun'
				})
			}
			if(this.props.weather.text.indexOf('雨') > -1){
				this.setState({
					text:'Rainy'
				})
			}
			if(this.props.weather.text.indexOf('雪') > -1){
				this.setState({
					text:'Snow'
				})
			}
			if(this.props.weather.text.indexOf('阴') > -1){
				this.setState({
					text:'Overcast'
				})
			}
		}
	}

	componentDidMount() {
		if(this.state.weather.text){
			this.Transfrom(this.state.weather.text)
		}
	}
	
	Transfrom(state){
		if(state.indexOf('多云') > -1 ){
				this.setState({
					text:'Cloudy'
				})
			}
			if(state.indexOf('晴') > -1 && state.length<3){
				this.setState({
					text:'Sun'
				})
			}
			if(state.indexOf('雨') > -1){
				this.setState({
					text:'Rainy'
				})
			}
			if(state.indexOf('雪') > -1){
				this.setState({
					text:'Snow'
				})
			}
			if(state.indexOf('阴') > -1){
				this.setState({
					text:'Overcast'
				})
			}
	}

	render(){
		return(
			<div className='weatherTitle' id="weatherTitle">
				<Weekday ch={this.props.weather.day} choose='all'/>
				<div>
					<p>{this.props.weather.high}<span>°</span></p>
					<p>{this.state.text} </p>
				</div>
			</div>
		)
	}
}

export default WeatherEN