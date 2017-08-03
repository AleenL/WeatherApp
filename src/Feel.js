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
				feel:'Sweltering'
			})
		}else if(tmp<=30 && tmp>20){
			this.setState({
				feel:'Comfortable'
			})
		}else if(tmp<10 && tmp<=20){
			this.setState({
				feel:'Cold'
			})
		}else{
			this.setState({
				feel:'Chilly'
			})
		}
	}

	render(){
		return <p>{this.state.feel}</p>
	}
} 

export default Feel