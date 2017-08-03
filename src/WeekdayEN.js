import React from 'react'

class WeekdayEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			ch: this.props.ch,
			en: null,
			enless: null,
			choose: this.props.choose
		}
	}

	componentDidUpdate(nextProps, nextState){
		if(this.props.ch !== nextProps.ch){
			this.ToEN(this.props.ch)
		}
	}
	
	ToEN(node){
		if(node.indexOf('一') > -1){
				this.setState({
					en: 'Monday',
					enless: 'Mon'
				})
			}else if(node.indexOf('二') >-1 ){
				this.setState({
					en: 'Tuesday',
					enless: 'Tue'
				})
			}else if(node.indexOf('三') >-1 ){
				this.setState({
					en: 'Wednesday ',
					enless: 'Wed'
				})
			}else if(node.indexOf('四') >-1 ){
				this.setState({
					en: 'Thursday ',
					enless: 'Thu'
				})
			}else if(node.indexOf('五') >-1 ){
				this.setState({
					en: 'Friday ',
					enless: 'Fri'
				})
			}else if(node.indexOf('六') >-1 ){
				this.setState({
					en: 'Saturday',
					enless: 'Sat'
				})
			}else if(node.indexOf('日')>-1 || node.indexOf('天')>-1){
				this.setState({
					en: 'Sunday',
					enless: 'Sun'
				})
			}
	}

	componentDidMount() {
		if(this.state.ch){
			this.ToEN(this.state.ch)
		}
	}

	render(){
		if(this.state.choose === 'all'){
			return <p>{this.state.en}</p>
		}else{
			return <p>{this.state.enless}</p>
		}
		
	}
}

export default WeekdayEN