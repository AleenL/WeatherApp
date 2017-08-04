import React from 'react'
import Account from './Account'

const account = new Account({name: 'Tong'});

class WeekdayEN extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			tmp: this.props.weather.high,
			name: account.data.name,
		}

		// account.onChangeEvent('change', () => {
		// 	this.setState({
		// 		name: account.data.name
		// 	})
		// })

		account.onChangeEvent('change', () => {
			console.log(111111)
		})


		account.onChangeEvent('change', () => {
			console.log(222222)
		})

		account.onChangeEvent('change', () => {
			console.log(333333)
		})
	}

	// componentDidUpdate(nextProps, nextState){
	// 	if(this.props.weather !== nextProps.weather)
	// 		this.setState({
	// 			tmp:this.props.weather.high
	// 		})
	// }

	changeName (event) {
		account.set({name: '112'});
	}
	// componentDidMount() {
	// 	console.log(1)
	// 	if(this.state.weather)
	// 		this.setState({
	// 			tmp:this.state.weather.high
	// 		})
	// }

	render(){
		return <p onClick={this.changeName.bind(this)}>{this.state.name}°</p>	
	}
}

export default WeekdayEN