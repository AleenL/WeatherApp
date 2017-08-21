import React from 'react'
import ComponentSetting from './ComponentSetting'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state={
		 setting:[
			{name:'设置',Action:'settingTitle'},
			{name:'我的账号',Action:'userAccount'},
			{name:'修改密码',Action:'changePassword'},
			{name:'组件设置',Action:'componentSetting'},
			{name:'主题设置',Action:'colorSetting'},
			{name:'关于天气',Action:'About'},
			{name:'意见反馈',Action:'getAdioce'},
			{name:'退出当前帐号',Action:'loginOut'},
		 ]
		}
	}
	render(){
		return(
			<div className='settingContent'>
				{this.state.setting.map((value,index) => {
					var url = '/Setting/'+value.Action
					if(index === this.state.setting.length-1){
						return(
							<div className={value.Action} key={index}>
								<div className='layout'>
									<p><Link to={{
										pathname:url,
										state:{number:value.name,action:value.Action}
									}}>{value.name}</Link></p>
								</div>
							</div>
						)
					}
					if(index === 0){
						return(
							<div className={value.Action} key={index}>
								<div className='layout'>
									<p>{value.name}</p>
									<p><Link to={{
										pathname:'/',
										state:{number:value.name,action:value.Action}
									}}><i className='iconfont'>&#xe603;</i></Link></p>
								</div>
							</div>
						)
					}
					return(
						<div className={value.Action} key={index}>
							<div className='layout'>	
								<p>{value.name}</p>
								<p><Link to={{
										pathname:url,
										state:{number:value.name,action:value.Action}
									}}><i className='iconfont'>&#xe603;</i></Link>
								</p>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Home
