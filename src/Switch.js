import React from 'react'
import './Switch.css'

export default class Switch extends React.Component{

	getState(e){
		this.props.showState.call(this)
	}

	render(){
		return(
			<div className='row'>
				<input type='checkbox' defaultChecked={this.props.state} id={this.props.id} className='switch' onChange={this.getState.bind(this)}/>
				<label htmlFor={this.props.id} className='green'></label>
			</div>
		)
	}
}