import React from 'react'
import './Background.css'
import SettingTitle from './SettingTitle'
import Suggestion from './Suggestion'
import GetCity from './getCity'
import GetLocation from './GetLocation'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class Background extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			date : new Date(),
			imageUrl: [require('./image/Blood.png'),require('./image/Moon.png'),require('./image/Sun.png')]
		}
	}
	
	componentDidMount() {
		setInterval(() => this.setState({date:new Date}),100000)
	}

		render(){
			const { location } = this.props
    		const isModal = !!(
      			location.state &&
      			location.state.modal &&
      			this.previousLocation !== location // not initial render
    		)
			const hours = this.state.date.getHours()/*,
				  minutes = this.state.date.getMinutes(),
				  seconds = this.state.date.getSeconds()*/

			let BackgroundUrl = null
			if(hours>6 && hours<17){
				BackgroundUrl = this.state.imageUrl[2]
			}else if(hours>=17 && hours<21){
				BackgroundUrl = this.state.imageUrl[0]
			}else{
				BackgroundUrl = this.state.imageUrl[1]
			}
			
			return(
				<div className="Background" style={{backgroundImage:'url('+BackgroundUrl+')'}}>
					<Switch location={isModal?this.previousLocation : location}>
						<Route exact  path='WeatherApp/build/index.html/' component={GetLocation}/>
						<Route  path='WeatherApp/build/index.html/Setting' component={SettingTitle}/>
						<Route  path='WeatherApp/build/index.html/City' component={GetCity}/>
						<Route  path='WeatherApp/build/index.html/Suggest' component={Suggestion}/>
					</Switch>
				</div>
			)
	}	
}

export default Background