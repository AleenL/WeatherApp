import React from 'react'

class GetTwonByChoose extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			town:this.props.town
		}
	}
	
	getWeather(e){
		console.log(e.target.innerHTML,e.target.className)
	}

	render(){
		return (
			<ul>
			{this.state.town.map(function(value,index){
				return <li key={index} className={value[1]} 
							onClick={this.getWeather.bind(this)}
						>{value[0]}</li>
			},this)}
			</ul>
		)
	}
}

export default GetTwonByChoose