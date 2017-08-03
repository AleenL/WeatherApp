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
			if(this.props.ch.indexOf('一') > -1){
				this.setState({
					en: 'Monday',
					enless: 'Mon'
				})
			}else if(this.props.ch.indexOf('二') >-1 ){
				this.setState({
					en: 'Tuesday',
					enless: 'Tue'
				})
			}else if(this.props.ch.indexOf('三') >-1 ){
				this.setState({
					en: 'Wednesday ',
					enless: 'Wed'
				})
			}else if(this.props.ch.indexOf('四') >-1 ){
				this.setState({
					en: 'Thursday ',
					enless: 'Thu'
				})
			}else if(this.props.ch.indexOf('五') >-1 ){
				this.setState({
					en: 'Friday ',
					enless: 'Fri'
				})
			}else if(this.props.ch.indexOf('六') >-1 ){
				this.setState({
					en: 'Saturday',
					enless: 'Sat'
				})
			}else if(this.props.ch.indexOf('日')>-1 || this.props.ch.indexOf('天')>-1){
				this.setState({
					en: 'Sunday',
					enless: 'Sun'
				})
			}
		}
	}

	componentDidMount() {
		if(this.state.ch){
			if(this.state.ch.indexOf('一') > -1){
				this.setState({
					en: 'Monday'
				})
			}else if(this.state.ch.indexOf('二') >-1 ){
				this.setState({
					en: 'Tuesday'
				})
			}else if(this.state.ch.indexOf('三') >-1 ){
				this.setState({
					en: 'Wednesday '
				})
			}else if(this.state.ch.indexOf('四') >-1 ){
				this.setState({
					en: 'Thursday '
				})
			}else if(this.state.ch.indexOf('五') >-1 ){
				this.setState({
					en: 'Friday '
				})
			}else if(this.state.ch.indexOf('六') >-1 ){
				this.setState({
					en: 'Saturday'
				})
			}else if(this.state.ch.indexOf('日')>-1 || this.state.ch.indexOf('天')>-1){
				this.setState({
					en: 'Sunday'
				})
			}
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