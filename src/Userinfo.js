import React from 'react';
import ReactDom from 'react-dom';
import Avatar from './Avatar'

class UserInfo extends React.Component{
	render(){
		return (
			<div className="UserInfo">
        		<Avatar user={this.props.user}/>
        		<div className="UserInfo-name">
          			{this.props.user.author.name}
        		</div>
      		</div>
		)
	}
}

export default UserInfo