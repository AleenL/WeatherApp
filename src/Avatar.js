import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component{
	render(){
		return(
			<img className = 'Avatar' 
				src={this.props.user.author.avatarUrl}
				alt={this.props.user.author.name}
			/>
		)
	}
}

export default Avatar