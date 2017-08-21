import React from 'react'
import Switch from './Switch'

class ComponentState extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			state:[
				{text:'显示时间',component:'timeShow',state:false},
				{text:'未来一周天气',component:'futureShow',state:true},
				{text:'温度设置',component:'tmpStyle',state:false},
				{text:'语言设置',component:'LanguageStyle',state:false},
				{text:'温度感受',component:'feelShow',state:true}
			]
		}
	}

	showState(event){
		/*e.target.checked,e.target.getAttribute('id')*/
		this.state.state.forEach((e,index)=>{
			if(e.component === event.target.getAttribute('id')){
				let items = this.state.state
				items[index] = {text:e.text,component:e.component,state:event.target.checked}
				this.setState({
					state:items
				})
			}
		})
		console.log(this.state.state)
	}

	render(){
		
		return(
			<div style={{width:'95%',margin:'0 auto'}}>
			{this.state.state.map(function(value,index){
				return (
					<div key={index} className={value.component} 
					style={{
						display:'flex',
						justifyContent: 'space-between',
						alignItems:'center',
					}}>
						<p style={{fontSize:'1.0rem'}}>{value.text}</p>
						<Switch id={value.component} state={value.state} showState={this.showState.bind(this)}/>
					</div>
				)
			},this)}
			</div>
		)
	}		
}

export default ComponentState