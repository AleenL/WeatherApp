import React from 'react'
import Greeting from './Greeting'


class Toggle extends React.Component{
	constructor(props) {
		super(props);
		this.state = {isToggleOn:true}
	}

	handleClick(){
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}))
	}

	render(){
		return(
			<div>
				<Greeting isLoggedIn = {isLoggedIn} />
				<button onClick={this.handleClick.bind(this)}>
					{this.state.isToggleOn? "ON" : "OFF"}
				</button>
			</div>
			
		)
	}
}

export default Toggle