import React from 'react';
import ReactDOM from 'react-dom';

class CommentDate extends React.Component{
	render(){
		return(
			<div className="Comment-date">
        		{(this.props.user.date).toLocaleString()}
      		</div>
		)
	}
}

export default CommentDate