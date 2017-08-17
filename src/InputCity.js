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
	
	componentDidMount() {
		let inputNode = document.getElementById('searchBar')
		this.removeResult(inputNode.childNodes[0].value)
	}

	removeResult(node){
		let ResultPage = document.getElementsByClassName('searchPage')[0]
		let allPage = document.getElementById('cityName')
		if(!node){
			ResultPage.setAttribute('id','overflow')
			allPage.style.height='auto'
			
		}else{
			ResultPage.removeAttribute('id','overflow')
			allPage.style.height='100vh'
		}
	}

	changeTitle(event){
		this.removeResult(event.target.value)
		let newArr = [],beforeArr=[],afterArr=[]
		this.preOrder(this.state.city,event.target.value,newArr)
		beforeArr = new Set(newArr)
		for(let e of beforeArr){
			afterArr.push(e)
		}
		if(newArr.length !== 0){
			this.setState({
				getCity: afterArr
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
				if(newValue[0].split(",").length > 2) return false;
				arr.push(newValue[0])
				return arr
			}
		}
	}

	render() {
		return (
			<div className='searchPage'>
				<div className='searchBar' id='searchBar'>
					<input type='text'
					className = 'GetCity'
					placeholder='搜索你要找的城市'
					onChange = {this.changeTitle.bind(this)}/>	
				</div>
				
				<div id='getString'>
					<div className='result'>
						<p>搜索结果</p>
					</div>
					<div className='resultTown'>
						<GetTwon getCity={this.state.getCity}/>
					</div>
				</div>			
			</div>
		) 
	}
}

export default InputCity