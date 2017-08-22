import React from 'react'
import Weekday from './WeekdayEN'

class WeatherCN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather,
			classname:null,
			getIcon:this.props.getIcon
		}
	}


	componentDidUpdate(nextProps, nextState) {
		if (this.props.weather !== nextProps.weather){
			this.Transfrom(this.props.weather.text)
		}
	}

	componentDidMount() {
		if(this.state.weather.text) {
			this.Transfrom(this.state.weather.text)
		}
	}
	
	Transfrom(state){
		if(state.indexOf('多云') > -1 ){
				this.setState({
					classname:'icon-duoyun'
				})
			}
			if(state.indexOf('晴') > -1 && state.length<4){
				this.setState({
					classname:'icon-qingtian',
				})
			}
			if(state.indexOf('雨') > -1){
				this.setState({
					classname:'icon-zhongyu'
				})
			}
			if(state.indexOf('雪') > -1){
				this.setState({
					classname:'icon-daxue'
				})
			}
			if(state.indexOf('阴') > -1){
				this.setState({
					classname:'icon-duoyunzhuanyin'
				})
			}
	}

	render(){
		if(this.state.getIcon === 'Icon'){
			return <p><i className={`icon iconfont ${this.state.classname}`}></i></p>
		}else{
			return(
			<div className='weatherTitle' id="weatherTitle">
				<p>{this.props.weather.day}</p>
				<div>
					<p>{this.props.weather.high}°<span>/</span>{this.props.weather.low}°</p>
					<p>{this.props.weather.text} </p>
				</div>
			</div>
			)
		}
		
	}
}

export default WeatherCN