import React from 'react'
import GetTwon from './GetTwon'

class InputCity extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			city:this.props.city,
			getCity: []
		}
	}

	getWeather(event){
		console.log(event.target.innerText)
		console.log(event.target.ClassName)
	}	

	



	changeTitle(event){
		// console.log(event.target.value);
		// document.getElementById('getString').innerHTML = ''
		if(event.target.value.length === 0 ) return false;
		var newArr = []
		this.preOrder(this.state.city,event.target.value,newArr)
		if(newArr.length !== 0){
			this.setState({
				getCity: newArr
			})
		}
	}

	preOrder(s,value,arr){
		var newValue = (s.toString().split('\n'))
		if(s){
			for(let i in s){
				if(typeof s[i] === 'object'){
					this.preOrder(s[i],value,arr)
				}
			}
			if(newValue[0].replace(/[^\u4e00-\u9fa5]/gi,"").indexOf(value) > -1){
				if(newValue[0].split(",").length > 2) return false;
				arr.push(newValue[0])
				return arr
			}
		}
	}

	render() {
		return (
			<div>
				<input type='text'
				className = 'GetCity'
				onChange = {this.changeTitle.bind(this)}/>
				<div id='getString'>
					<GetTwon getCity={this.state.getCity}/>
				</div>			
			</div>
		) 
	}
}

export default InputCity