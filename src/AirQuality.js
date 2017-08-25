import React from 'react'

class AirQuality extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			air:this.props.air,
			face:null,
			text:null,
		}
	}

	
	componentDidUpdate(nextProps) {
		if(this.props.air !== nextProps.air){
			this.changeFace(this.props.air.city.aqi)
		}
	}

	componentDidMount(){
		if(this.state.air){
			this.changeFace(this.props.air.city.aqi)
		}
	}

	changeFace(node){
		if(parseInt(node)<=50){
			this.setState({
				face:'good',
				text:'优',
				suggestText:'空气清新，适合外出登山踏青，温度过高时请记得擦涂防晒霜，温度过低时请注意添衣保暖。'
			})
		}else if(parseInt(node)<=100 && parseInt(node)>50){
			this.setState({
				face:'good',
				text:'良好',
				suggestText:'空气良好，是个聚会的好时光，和两三朋友小聚一次，小酌一杯清酒，岂不美哉？'
			})
		}else if(parseInt(node)<=150 && parseInt(node)>100){
			this.setState({
				face:'bad',
				text:'轻度污染',
				suggestText:'空气污染加重，好好宅在家里面，在冰箱里拿出一罐啤酒，配上炸鸡，再挑一部好看的电影。'
			})
		}else{
			this.setState({
				face:'bad',
				text:'重度污染',
				suggestText:'严重的空气污染，出行请带好口罩，防止呼吸道感染等疾病，未雨绸缪总是好的！'
			})
		}
	}

	render(){
		return(
			<div className='airBox'>
				<div className='airTitle'>
					<p><i className={`iconfont ${this.state.face}`}></i></p>
					<p>空气指数 : {this.state.air.city.aqi} {this.state.text}</p>
				</div>
				<div className='airSuggest'>
					<p style={{lineHeight:'1.5rem'}}>{this.state.suggestText}</p>
					<div className='airNumber'>
						<p>PM2.5 <b>{this.state.air.city.pm25}</b></p>
						<p>PM10 <b>{this.state.air.city.pm10}</b></p>
						<p>SO<sub>2</sub> <b>{this.state.air.city.so2}</b></p>
						<p>CO <b>{this.state.air.city.co}</b></p>
						<p>O<sub>3</sub> <b>{this.state.air.city.o3}</b></p>
						<p>NO<sub>2</sub> <b>{this.state.air.city.no2}</b></p>
					</div>
				</div>
			</div>
		)
	}
}

export default AirQuality