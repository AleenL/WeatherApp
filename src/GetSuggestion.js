import React from 'react'

class GetSuggestion extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			style:null,
			text:null,
			icon:null
		}
	}
	componentDidUpdate(nextProps) {
		if(this.props.style !== nextProps.style){
			this.setState({
				style:this.props.style,
				text:this.props.text,
				icon:this.props.icon
			})
		}
	}

	componentDidMount() {
		if(this.state.style){
			this.setState({
				style:this.props.style,
				text:this.props.text,
				icon:this.props.icon
			})
		}
	}

	render(){
		return(
			<div className='clothesBox'>
				<div className='clothesTitle'>
					{console.log(this.state.style)}
				</div>
				<div className='weatherItems'>
					
				</div>
			</div>
		)
	}
}

export default GetSuggestion