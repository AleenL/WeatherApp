import React from 'react'
import './ComponentSetting.css'
import UserAccount from './UserAccount'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class ComponentSetting extends React.Component{
	previousLocation = this.props.location
  	componentWillUpdate(nextProps) {
	    const { location } = this.props
	    // set previousLocation if props.location is not modal
	    if (
	      nextProps.history.action !== 'POP' &&
	      (!location.state || !location.state.modal)
	    ) {
	      this.previousLocation = this.props.location
	    }
	  }
	render(){
		return(
				<p>dd</p>	
			)
		}	
	}

export default ComponentSetting