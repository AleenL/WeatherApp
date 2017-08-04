import React from 'react'
import Weekday from './WeekdayEN'

class WeatherEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			weather:this.props.weather,
			classname:null,
			getIcon:this.props.getIcon,
			update:1,
		}
	}


	/*componentDidUpdate(nextProps, nextState) {
		if (this.props.weather !== nextProps.weather){
			this.Transfrom(this.props.weather.text)
		}
	}*/

	componentDidMount() {
		console.log(1)
		if(this.state.weather.text)
		this.Transfrom(this.state.weather.text)
		this.setState({
			update:2
		})
	}
	
	Transfrom(state){
		
			
		if(state.indexOf('多云') > -1 ){
				this.setState({
					text:'Cloudy',
					classname:'icon-duoyun'
				})
			}
			if(state.indexOf('晴') > -1 && state.length<4){
				this.setState({
					text:'Sun',
					classname:'icon-qingtian',
				})
			}
			if(state.indexOf('雨') > -1){
				this.setState({
					text:'Rainy',
					classname:'icon-zhongyu'
				})
			}
			if(state.indexOf('雪') > -1){
				this.setState({
					text:'Snow',
					classname:'icon-daxue'
				})
			}
			if(state.indexOf('阴') > -1){
				this.setState({
					text:'Overcast',
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
				<Weekday ch={this.props.weather.day} choose='all'/>
				<div>
					<p>{this.props.weather.high}<span>°</span></p>
					<p>{this.state.text} </p>
				</div>
			</div>
		)
		}
		
	}
}

export default WeatherEN