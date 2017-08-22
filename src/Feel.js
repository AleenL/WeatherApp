import React from 'react'

class Feel extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			tmp: this.props.tmp,
			feel: null
		}
	}

	componentDidUpdate(nextProps, nextState){
		if(this.props.tmp !== nextProps.tmp)	
			this.feelLike(this.props.tmp)
	}

	feelLike(tmp){
		console.log(tmp)
		if(tmp>30){
			this.setState({
				feel:'炎热'
			})
		}else if(tmp<=30 && tmp>20){
			this.setState({
				feel:'舒适'
			})
		}else if(tmp<10 && tmp<=20){
			this.setState({
				feel:'凉爽'
			})
		}else{
			this.setState({
				feel:'寒冷'
			})
		}
	}

	render(){
		return <p>{this.state.feel}</p>
	}
} 

export default Feel