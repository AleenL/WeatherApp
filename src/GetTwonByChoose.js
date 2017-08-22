import React from 'react'
import GetWeather from './GetWeather'

class GetTwonByChoose extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			town:this.props.town,
			data:null
		}
	}
	
	getWeather(event){
		let [en] = [event.target.getAttribute('class')]
		this.setState({
			data:en
		})
	}

	

	render(){
		return (
			<ul>
			{this.state.town.map((value,index) => {
				return (<li key={index} >
							<p  onClick={this.getWeather.bind(this)}
								className={value[1]} 
							>{value[0]}</p>
						</li>
					)
			})}
			{this.state.data && <GetWeather data={this.state.data}/>}
			</ul>
		)
	}
}

export default GetTwonByChoose