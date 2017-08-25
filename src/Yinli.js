import React from 'react'
import Ajax from './Ajax'
import GetTime from './GetTime'

class Yinli extends React.Component{
	constructor(props){
		super(props)
		this.state={
			date:null
		}
	}

	componentDidMount(){
		let date = new Date();
		let Years = date.getFullYear()
		let GanZhi = this.getGanZhi(Years)
		let Animate = this.Shuxing(Years)
		this.setState({
			years:GanZhi,
			animte:Animate
		})
		let time = new GetTime(new Date()).GetcDateString()
		console.log(time)
	}

	Shuxing(node){
		let SXDict = '鼠牛虎兔龙蛇马羊猴鸡狗猪'
		return SXDict.charAt((node-4)%12)
	}

	getGanZhi(node){
		let gan='甲乙丙丁戊己庚辛壬癸', zhi='子丑寅卯辰巳午未申酉戌亥';
		if(node<0){node+=1}
		return gan[(node-1984+60000)%10] + zhi[(node-1984+60000)%12]
	}

	

	render(){
		return <p>{this.state.years}年 {this.state.animte}年</p>
	}
}

export default Yinli