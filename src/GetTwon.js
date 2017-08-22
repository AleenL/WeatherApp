import React from 'react'
import GetWeather from './GetWeather'


class GetTwon extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			getTwon:this.props.getCity,
			data:null,
		}
	}

	componentDidUpdate(nextProps) {
		if(this.props.getCity !== nextProps.getCity){
			this.setState({getTwon:this.props.getCity})
		}
	}

	getWeather(event){
		let [en] = [event.target.getAttribute('class')]
		this.setState({
			data:en
		})
	}
	
	render(){
		return(
			<ul>
				{this.state.getTwon.map((value,index) => {
					return (<li key={index} >
								<p onClick={this.getWeather.bind(this)}
								className={value.replace(/[^A-Za-z]/gi,"")}>
								{value.replace(/[^\u4e00-\u9fa5]/gi,"")}</p>
							</li>)
				})}
				{this.state.data && <GetWeather data={this.state.data}/>}
			</ul>
		)
	}
}

export default GetTwon