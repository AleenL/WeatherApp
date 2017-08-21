import React from 'react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import UserAccount from './UserAccount'

class SettingTitle extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			url:['userAccount','changePassword','componentSetting','colorSetting','About','getAdioce','loginOut']
		}
	}
	render(){
		const { location } = this.props
    		const isModal = !!(
      			location.state &&
      			location.state.modal &&
      			this.previousLocation !== location // not initial render
    		)
		return(
			<div className='SettingPage'>
				<Switch location={isModal?this.previousLocation : location}>
					<Route exact path='/Setting' component={Home}/>
					{this.state.url.map((value,index) => {
						const url = '/Setting/'+value
						return <Route key={index} path={url} component={hello}/>
					})}
				</Switch>
			</div>
		)
	}	
}

const hello = ({location}) =>(
	<div>
		<div className='userAction' id={location.state.action}>
			<p><Link to='/Setting'><i className='iconfont'>&#xe603;</i></Link></p>
			<p>{location.state.number}</p>
		</div>
		<UserAccount account='784757xxx@qq.com' action={location.state.action} / >
	</div>
)

export default SettingTitle