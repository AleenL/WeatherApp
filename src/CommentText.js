import React from 'react';
import ReactDOM from 'react-dom';

class CommentText extends React.Component{
	render(){
		return(
			<div className="Comment-text">
        		{this.props.user.text}
      		</div>
		)
	}
}

export default CommentText