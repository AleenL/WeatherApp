class Square extends React.Component {
	render(){
		return (
			<button className='square'>
				{this.props.value}
			</button>
		);
	}
}