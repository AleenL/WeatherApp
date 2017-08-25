import React from 'react'

class GetSuggestion extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			style:this.props.style,
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
			<div className='styleBox'>
				<div className='styleTitle'>
					<p><i className={`iconfont ${this.state.icon}`}></i></p>
					<p> {this.state.text} : {this.state.style.brief}</p>
				</div>
				<div className='weatherItems'>
					<p style={{width:'100%'}}>{this.state.style.details}</p> 
				</div>
			</div>
		)
	}
}

export default GetSuggestion