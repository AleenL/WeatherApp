import React from 'react'

class GetTwon extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			getTwon:this.props.getCity
		}
	}

	componentDidUpdate(nextProps) {
		if(this.props.getCity !== nextProps.getCity){
			this.setState({getTwon:this.props.getCity})
		}
	}

	getWeather(event){
		let [that,en,ch] = [this,event.target.getAttribute('class'),ch=event.target.innerText]
		this.getJSON('https://weixin.jirengu.com/weather/cityid','get',{location:en},true).then(function(response){
				console.log(response)
				that.getCityId(response,ch)
			},function(error){
				console.log('失败')
		}).catch(function(){
			console.log('error')
		})
	}


	getJSON(url,type,param,async,header){
		return new Promise(function(resolve,reject){
			let req = new XMLHttpRequest()
			req.onload = function(){
				if(req.status === 200 || req.status === 304){
					resolve(JSON.parse(req.response))
				}else{
					reject(Error(req.statusText))
				}
			}
			req.onerror = function(){
				reject(Error('NetWork Error'))
			}
			//确定默认值
			type === null || type.toUpperCase() === 'GET' ? type='get' : type = 'post'
			param = formatParams(param)
			param === null || param === '' ? url : url=url+'?'+param
			async === null || async === true ? async=true : async=false
			//设置提交表单内容

			req.open(type,url,async)
			req.send()
		});
		function formatParams(data){
			var _fpArr = [];
			for (let _fpName in data) {
				_fpArr.push(_fpName + '=' + data[_fpName])
			}
			return _fpArr.join('&')
		}
	}

	getCityId(Json,name){
		let that = this;
		for(let i=0;i<Json.results.length;i++){
			if(Json.results[i].name === name){
				this.getJSON('https://weixin.jirengu.com/weather/now','get',{cityid:Json.results[i].id},true).then(
					function(response){
						that.setState({getWeather:response})
					},function(error){
						alert('失败')
					}
				)
			}
		}
	}

	render(){
		return(
			<ul>
				{this.state.getTwon.map(function(value,index){
					return (<li key={index} 
							className={value.replace(/[^A-Za-z]/gi,"")}
							onClick={this.getWeather.bind(this)}
							>{value.replace(/[^\u4e00-\u9fa5]/gi,"")}</li>)
				},this)}
			</ul>
		)
	}
}

export default GetTwon