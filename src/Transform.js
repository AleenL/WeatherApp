import React from 'react'
import $ from 'jquery'

class Transfrom extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			ch: '你好',
			en: null,
			appid: '20170802000070189',
			key: 'XFMbC7WWQbpK0DGF6ZbP',
			salt: (new Date).getTime(),
		}
	}

	componentDidMount() {
		var getJSON = function(url){
			var that = this;
			let promise = new Promise(function(resolve,reject){
				$.ajax({
    				url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
   					type: 'get',
    				dataType: 'jsonp',
    				data: {
        				q: that.state.ch,
        				appid: that.state.appid,
        				salt: that.state.salt,
        				from: 'zh',
        				to: 'en',
        				sign: sign
    				},
    				success: function(data) {
        				resolve(data);
    				},
    				error: function(XMLHttpRequest){
    					reject(error)
    				}
				});
			})
			return promise
		}

			getJSON(this.props.source).then(function(result){
				getWeather(JSON.parse(result))
				
			},function(error){
				console.log(error)
			})
	}