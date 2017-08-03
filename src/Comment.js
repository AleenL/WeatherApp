import React from 'react';
import ReactDom from 'react-dom';
import UserInfo from './Userinfo';
import CommentText from './CommentText';
import CommentDate from './CommentDate'



class Comment extends React.Component {

    render(){
    	const user = this.props.user;
        return(
		<div className="Comment">
      		<UserInfo user={user}/>
      		<CommentText user={user}/>
      		<CommentDate user={user}/>
   		 </div>
		)
	}
}

export default Comment