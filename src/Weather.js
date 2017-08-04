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
import WeatherEN from './weatherEN'
import NextWeekWeather from './NextWeekWeather'
import NextWeekTmp from './NextWeekTmp'
class Weather extends React.Component{
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
			}
		}
	}



	componentDidMount() {
		var that = this;
		
		function getWeather(result){
			console.log(result)
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
		}

		var getJSON = function(url){
			
			let promise = new Promise(function(resolve,reject){
				let client = new XMLHttpRequest()
					client.open('GET',url)
					client.onreadystatechange = handler
					client.responeType = 'JSON'
					client.setRequestHeader('Accept','application/json')
					client.send()

					function handler(){
						if( this.readyState !==4 ){
							return
						}
						if( this.status === 200 ){
							resolve(this.response)
						}else{
							reject(new Error(this.statusText))
						}
					}
				})
				return promise
			}

			getJSON(this.props.source).then(function(result){
				getWeather(JSON.parse(result))
				
			},function(error){
				console.log(error)
			})
		}

	render(){
		const About = () =>(
		<NextWeekTmp day={this.state.future} />
	)
	
	const Home = () =>(
		<NextWeekWeather day={this.state.future} />
	)

	const Message = () =>(
		<WeatherEN weather={this.state.future.day2} />
	)
		return (
			<div className='titleText'>
				<p>{this.state.tmp}<span>°</span></p>
				<Feel tmp={this.state.tmp} />
				<HashRouter>
    				<Futureweather weather={[this.state.today,this.state.future]}>
        				<Route exact path="/" component={Home} />
        				<Route path="/about" component={About} />
        				<Route path="/Message" component={Message} />
    				</Futureweather>
  				</HashRouter>
			</div>
		)
	}
}
	

export default Weather