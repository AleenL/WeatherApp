import React from 'react'
import GetTwon from './GetTwon'
import './InputCity.css'

class InputCity extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			city:this.props.city,
			getCity: []
		}
	}

	changeTitle(event){
		var newArr = []
		this.preOrder(this.state.city,event.target.value,newArr)
		console.log(newArr)
		if(newArr.length !== 0){
			this.setState({
				getCity: newArr
			})
		}
		if(event.target.value.length === 0 ){
			this.setState({
				getCity:[]
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
			if(newValue[0].replace(/[^a-zA-Z]/gi,"").substring(0,value.length) === value.substring(0,value.length)){
				console.log(newValue[0].replace(/[^a-zA-Z]/gi,"").substring(0,value.length),value.substring(0,value.length))
				if(newValue[0].split(",").length > 2) return false;
				arr.push(newValue[0])
				return arr
			}
		}
	}

	render() {
		return (
			<div className='searchPage'>
				<input type='text'
				className = 'GetCity'
				placeholder='搜索你要找的城市'
				onChange = {this.changeTitle.bind(this)}/>
				<div id='getString'>
					<GetTwon getCity={this.state.getCity}/>
				</div>			
			</div>
		) 
	}
}

export default InputCity