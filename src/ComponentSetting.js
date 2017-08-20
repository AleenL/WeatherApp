import React from 'react'
import './ComponentSetting.css'
import Home from './Home'
import UserAccount from './UserAccount'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class ComponentSetting extends React.Component{
	previousLocation = this.props.location
  	componentWillUpdate(nextProps) {
	   const { location } = this.props
    	// set previousLocation if props.location is not modal
    	if (
      	nextProps.history.action !== 'POP' &&
      	(!location.state || !location.state.modal)
    	){
     	 	this.previousLocation = this.props.location
   	 	}
  	}
	render(){
		const { location } = this.props
   		const isModal = !!(
      		location.state &&
      		location.state.modal &&
      		this.previousLocation !== location // not initial render
    	)
		return(
			<div className='SettingPage'>
				<Switch location={isModal?this.previousLocation : location}>
					<Route exact path='/Setting' component={Home}/>
					<Route  path='/Setting/loginout' component={hello}/>
				</Switch>
			</div>
			)
		}	
	}

const hello = ({location}) =>(
	<p>{location.state.number}</p>
)

const ModalGallery = () => (
  <Router>
    <Route component={ComponentSetting} />
  </Router>
)

export default ModalGallery