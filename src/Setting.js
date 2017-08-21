import React from 'react'
import Setting from './Setting'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import SettingItems from './SettingItems'

class Setting extends React.Component{
	render(){
		return(
			<Router>
    			<Route component={Home} />
  			</Router>
		)
	}	
}

export default Setting