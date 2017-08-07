import React from 'react'

class InputCity extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			city:this.props.city
		}
	}

	getWeather(event){
		console.log(event.target.innerText)
		console.log(event.target.ClassName)
	}	

	render() {
		return (
			<div>
				<input type='text'
				className = 'GetCity'
				onChange = {this.changeTitle.bind(this)}/>
				<div id='getString'>
				</div>			
			</div>
			) 
	}



	changeTitle(event){
		document.getElementById('getString').innerHTML = ''
		if(event.target.value.length === 0 ) return false;
		this.preOrder(this.state.city,event.target.value)
	}

	alertD(node){
		var that = this;
		var newp=document.createElement('p')
		newp.innerHTML = node.replace(/[^\u4e00-\u9fa5]/gi,"")
		newp.setAttribute('class', node.replace(/[^A-Za-z]/gi,""))
		newp.setAttribute('onClick', '{this.getWeather.bind(this)}')
		var oldp = document.getElementById('getString')
		oldp.append(newp)
	}
	preOrder(s,value){
		var newValue = (s.toString().split('\n'))
		if(s){
			for(let i in s){
				if(typeof s[i] == 'object'){
					this.preOrder(s[i],value)
				}
			}
			if(newValue[0].replace(/[^\u4e00-\u9fa5]/gi,"").indexOf(value) > -1){
				if(newValue[0].split(",").length > 2) return false;
				this.alertD(newValue[0])
			}
		}
	}
}

export default InputCity