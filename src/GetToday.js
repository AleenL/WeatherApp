import React from 'react'
import GetTime from './GetTime'

class GetToday extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			today:this.props.today,
			time:null,
			year:null,
			sunset:null
		}
	}

	
	componentDidUpdate(nextProps) {

		if(this.props.today !== nextProps.today){
			this.setState({
				today:this.props.today
			})
		}
	}

	componentDidMount(){
		if(this.state.today){
			this.setState({
				today:this.props.today
			})
		}
		this.getAfteroon(this.state.today.sunset.substring(0,5))
		setInterval(this.setState({time:new GetTime(new Date()).getYangli()}),1000)
		setInterval(this.setState({year:new GetTime(new Date()).GetLunarDay()}),1000)
	}

	getAfteroon(node){
		let hours = parseInt(node.substring(0,2)) + 12
		let min = node.substring(3,5)
		this.setState({
			sunset:hours+':'+min
		})

	}


	render(){
		return(
			<div className='todayBox'>
				<div className='todayTitle'>
					<p><i className='iconfont'>&#xe6e2;</i></p>
					<p> {this.state.time}</p>
				</div>
				<div className='weatherItems'>
					<p><i className='iconfont'>&#xe68b;</i> {this.state.today.sunrise.substring(0,5)} 日出</p>
					<p><i className='iconfont'>&#xe679;</i> {this.state.sunset} 日落</p>
					<p style={{width:'100%'}}><i style={{fontSize:'1rem'}} className='iconfont'>&#xe7a6;</i> 农历: {this.state.year}</p> 
				</div>
			</div>
		)
	}
}

export default GetToday