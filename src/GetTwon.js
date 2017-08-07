import React from 'react'

class GetTwon extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			getTwon:this.props.getCity
		}
	}

	componentDidUpdate(nextProps) {
		if(this.props.getCity !== nextProps.getCity){
			this.setState({getTwon:this.props.getCity})
		}
	}

	getWeather(event){
		console.log(event.target.innerText)
		console.log(event.target.getAttribute('class'))
	}

	render(){
		console.log(this.state);
		return(
			<ul>
				{this.state.getTwon.map(function(value,index){
					return (<li key={index} 
							className={value.replace(/[^A-Za-z]/gi,"")}
							onClick={this.getWeather.bind(this)}
							>{value.replace(/[^\u4e00-\u9fa5]/gi,"")}</li>)
				},this)}
			</ul>
		)
	}
}

export default GetTwon