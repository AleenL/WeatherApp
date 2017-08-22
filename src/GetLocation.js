import React from 'react'
import Futureweather from './FutureWeather'
import Feel from './Feel'
import './Weather.css'
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import WeatherCN from './weatherCN'
import NextWeekWeather from './NextWeekWeather'
import NextWeekTmp from './NextWeekTmp'
import Ajax from './Ajax'
import GetHoursWea from './GetHoursWea'

class GetLocation extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			city: null,
			tmp: null,
			feel:null,
			today:" ",
			future: {
				day1:" ",
				day2:" ",
				day3:" ",
				day4:" ",
				day5:" ",
				day6:" "
			},
			hours:null
		}
	}

	componentDidMount() {
		this.getLocation()
	}

	getLocation(){
		let that = this;
		const Location = new Ajax('https://weixin.jirengu.com/weather/ip','get')
		Location.getMsg().then(function(data){
			that.getCityId(data)
		},function(error){
			//未获取到就返回失败
			console.log('失败')
		}).catch(function(Error){
			console.log('Error')
		})
	}

	getCityId(data){
		let that = this;
		var CityId = new Ajax('https://weixin.jirengu.com/weather/cityid','get',{location:data.data},true)
		CityId.getMsg().then(function(data){
			that.getWeather(data.results[0].id)
			that.getHours(data.results[0].id)
		},function(error){
			//未获取到就返回失败
			console.log('失败')
		}).catch(function(Error){
			console.log('Error')
		})
	}

	getHours(data){
		let that = this;
		var CityId = new Ajax('https://weixin.jirengu.com/weather/future24h','get',{cityid:data},true)
		CityId.getMsg().then(function(result){
			that.setState({
      		 	hours:result.hourly  		 
      		 })
		},function(error){
			//未获取到就返回失败
			console.log('失败')
		}).catch(function(Error){
			console.log('Error')
		})
	}

	getWeather(data){
		let that = this;
		var CityId = new Ajax('https://weixin.jirengu.com/weather/now','get',{cityid:data},true)
		CityId.getMsg().then(function(result){
			that.setState({
      		 	tmp: result.weather[0].now.temperature,
      		 	city: result.weather[0].city_name,
      		 	today: result.weather[0].now,
      		 	future:{
      		 		day1: result.weather[0].future[0],
      		 		day2: result.weather[0].future[1],
      		 		day3: result.weather[0].future[2],
      		 		day4: result.weather[0].future[3],
      		 		day5: result.weather[0].future[4],
      		 		day6: result.weather[0].future[5]
      		 	}      		 
      		 })
		},function(error){
			//未获取到就返回失败
			console.log('失败')
		}).catch(function(Error){
			console.log('Error')
		})
	}

	render(){
		return (
			<div className='titleText'>
				<p>{this.state.tmp}<span>°</span></p>
				<Feel tmp={this.state.tmp} />
				<div className='weatherMsg'>
					<WeatherCN weather={this.state.future.day1} />
					<WeatherCN weather={this.state.future.day2} />
					<NextWeekWeather day={this.state.future} />
					<NextWeekTmp day={this.state.future} />
				</div>
				<div className='IconChoose'>
					<p><Link to='/Setting'><i className='iconfont'>&#xe605;</i></Link></p>
					<p><Link to='/City'><i className='iconfont'>&#xe648;</i></Link></p>
					<p><Link to='/Suggest'><i className='iconfont'>&#xe6e5;</i></Link></p>
				</div>
			</div>
		)
	}
}

export default GetLocation
