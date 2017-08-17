import React from 'react'
import Ajax from './Ajax'
import GetWeather from './GetWeather'

class GetTwonByChoose extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			town:this.props.town,
			data:null
		}
	}
	
/*	getWeather(event){

		//获取城市的拼音值和汉字值
		let [that,en,ch] = [this,event.target.getAttribute('class'),ch=event.target.innerText]
		//获取城市ID
		console.log(en,ch)
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
		let that = this,flag = true
		for(let i=0;i<Json.results.length;i++){
			if(Json.results[i].name === name){
				var getWeather = new Ajax('https://weixin.jirengu.com/weather/now','get',{cityid:Json.results[i].id},true)
				getWeather.getMsg().then(
					function(response){
						if(!flag) return false;
						console.log(response)
						that.setState({getWeather:response})
						flag = false
					},function(error){
						alert('失败')
					}
				)
			}
		}
	}*/
	getWeather(event){
		let [that,en,ch] = [this,event.target.getAttribute('class'),ch=event.target.innerText]
		this.setState({
			data:en
		})
	}

	

	render(){
		return (
			<ul>
			{this.state.town.map((value,index) => {
				return (<li key={index} >
							<p  onClick={this.getWeather.bind(this)}
								className={value[1]} 
							>{value[0]}</p>
						</li>
					)
			})}
			{this.state.data && <GetWeather data={this.state}/>}
			</ul>

		)
	}
}

export default GetTwonByChoose