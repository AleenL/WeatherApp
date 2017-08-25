import React from 'react'

class WindIcon extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			wind:this.props.wind,
			classname:null,
			windMessage:null
		}
	}

	componentWillUpdate(nextProps) {
		if(this.props.wind !== nextProps.wind){
			this.windIcon(this.props.wind.wind_direction)
			this.windMessage(this.props.wind.wind_scale)
		}
	}

	componentDidMount() {
		if(this.state.wind) {
			this.windIcon(this.props.wind.wind_direction)
			this.windMessage(this.props.wind.wind_scale)
		}
	}
	
	windMessage(node){
		console.log(node)
		switch(node)
		{
			case '0':
				this.setState({
					windMessage:'无风'
				});
				console.log('wufeng')
				break;
			case '1':
				this.setState({
					windMessage:'软风'
				});
				break;
			case '2':
				this.setState({
					windMessage:'轻风'
				});
				break;
			case '3':
				this.setState({
					windMessage:'微风'
				});
				break;
			case '4':
				this.setState({
					windMessage:'和风'
				});
				break;
			case '5':
				this.setState({
					windMessage:'劲风'
				});
				break;
			case '6':
				this.setState({
					windMessage:'强风'
				});
				break;
			case '7':
				this.setState({
					windMessage:'疾风'
				});
				break;
			case '8':
				this.setState({
					windMessage:'大风'
				});
				break;
			case '9':
				this.setState({
					windMessage:'烈风'
				});
				break;
			case '10':
				this.setState({
					windMessage:'狂风'
				});
				break;
			case '11':
				this.setState({
					windMessage:'暴风'
				});
				break;
			case '12':
				this.setState({
					windMessage:'台风'
				});
				break;
		}
	}
	
	windIcon(node){
		if(node==='东'){
			this.setState({
				classname:'dong'
			})
		}
		if(node==='东南'){
			this.setState({
				classname:'dongnan'
			})
		}
		if(node==='东北'){
			this.setState({
				classname:'dongbei'
			})
		}
		if(node==='南'){
			this.setState({
				classname:'nan'
			})
		}
		if(node==='北'){
			this.setState({
				classname:'bei'
			})
		}
		if(node==='西'){
			this.setState({
				classname:'xi'
			})
		}
		if(node==='西南'){
			this.setState({
				classname:'xinan'
			})
		}
		if(node==='西北'){
			this.setState({
				classname:'xibei'
			})
		}
	}

	render(){
		return (
			<p>
			<i className={`iconfont ${this.state.classname}`}></i> 
			 {this.state.wind.wind_scale}级 {this.state.wind.wind_direction}风 {this.state.windMessage}
			</p>
		)
	}

}

export default WindIcon