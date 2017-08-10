import React from 'react'
import Ajax from './Ajax'

class GetTwonByChoose extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			town:this.props.town
		}
	}
	
	getWeather(event){
			//获取城市的拼音值和汉字值
		let [that,en,ch] = [this,event.target.getAttribute('class'),ch=event.target.innerText]
		//获取城市ID
		var getCity = new Ajax('https://weixin.jirengu.com/weather/cityid','get',{location:en},true)
		getCity.getMsg().then(function(response){
				//当ID值获取到就再一步获取该ID值的天气
				console.log(response)
				that.getCityId(response,ch)
			},function(error){
				//未获取到就返回失败
				console.log('失败')
		}).catch(function(){
			console.log('error')
		})
	}

	getCityId(Json,name){
		let that = this;
		for(let i=0;i<Json.results.length;i++){
			if(Json.results[i].name === name){
				var getWeather = new Ajax('https://weixin.jirengu.com/weather/now','get',{cityid:Json.results[i].id},true)
				getWeather.getMsg().then(
					function(response){
						console.log(response)
						that.setState({getWeather:response})
					},function(error){
						alert('失败')
					}
				)
			}
		}
	}

	render(){
		return (
			<ul>
			{this.state.town.map(function(value,index){
				return <li key={index} className={value[1]} 
							onClick={this.getWeather.bind(this)}
						>{value[0]}</li>
			},this)}
			</ul>
		)
	}
}

export default GetTwonByChoose