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
					<Route  path='/Setting/loginOut' component={hello}/>
					<Route  path='/Setting/componentSetting' component={hello}/>
				</Switch>
			</div>
			)
		}	
	}

const hello = ({location}) =>(
	<div className='userAction'>
		<p><Link to='/Setting'><i className='iconfont icon-gengduo'></i></Link></p>
		<p>{location.state.number}</p>
	</div>
)

const ModalGallery = () => (
  <Router>
    <Route component={ComponentSetting} />
  </Router>
)

export default ModalGallery