import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component{
	render(){
		return <h1>hello,{this.props.name},this is good?</h1>
	}
}

export default Welcome