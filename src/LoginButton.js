import React from 'react'

function LoginButton(props) {
  		return (
    		<button onClick={props.onClick}>
     		 Login
    		</button>
 		);
	}

	function LogoutButton(props) {
  		return (
    		<button onClick={props.onClick}>
      			Logout
    		</button>
  		);
	}

class LoginControl extends React.Component{
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false}
	}

	handleLoginClick(){
		this.setState({isLoggedIn:true})
	}

	handleLogoutClick(){
		this.setState({isLoggedIn:false})
	}



	render(){
		const isLoggedIn = this.state.isLoggedIn;
		let button = null
		if(isLoggedIn){
			 button = <LogoutButton onClick={this.handleLogoutClick.bind(this)} />;
		} else {
			button = <LogoutButton onClick={this.handleLoginClick.bind(this)} />;
		}

		return(
			<div>
				{button}
			</div>
		)
	}
}


export default LoginControl