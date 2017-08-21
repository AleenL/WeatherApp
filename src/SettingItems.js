import React from 'react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class SettingItems extends React.Component{
	render(){
		const { location } = this.props
    	const isModal = !!(
      		location.state &&
      		location.state.modal &&
      		this.previousLocation !== location // not initial render
    	)
	
		return(
			<div className="SettingPage">
				<Switch location={isModal?this.previousLocation : location}>					
					<Route component={Home}/>
				</Switch>
			</div>
		)
	}	
}



export default SettingItems