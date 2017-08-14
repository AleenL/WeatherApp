import React from 'react'

class GetIcon extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			text:this.props.day,
			classname:null
		}
	}

	componentDidUpdate(nextProps, nextState) {
		console.log(this.props.day)
		if(this.props.day !== nextProps.day){
			console.log(this.props.day)
			if(this.props.day === '多云'){
				this.setState({
					classname:'icon-duoyun'
				})
			}
			if(this.props.day.indexOf('晴') > -1 && this.props.day.length<3){
				this.setState({
					classname:'icon-qingtian'
				})
			}
			if(this.props.day.indexOf('雨') > -1){
				this.setState({
					classname:'icon-zhongyu'
				})
			}
			if(this.props.day.indexOf('雪') > -1){
				this.setState({
					classname:'icon-daxue'
				})
			}
			if(this.props.day.indexOf('阴') > -1){
				this.setState({
					classname:'icon-duoyunzhuanyin'
				})
			}
		}
	}

	render(){
		return(
			<p>
				{this.state.classname &&  <i className={this.state.classname}>
				</i>}
			</p>
		)
	}
}

export default GetIcon