import 'React' from 'react'

class GetTime extends React.Component{
	constructor(props) {
		super(props);
		this.state={
		time:'00:00'
		}
	}

	componentDidMount() {
		let time = new Date()
		let [hours,mins] = [time.getHours(),time.getMinutes()]
		this.setState({
			time: `${hours}:${mins}`
		})
	}

	render(){
		return <p>{this.state.time}</p>
	}
}

export default GetTime