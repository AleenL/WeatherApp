import React from 'react'
import './ComponentSetting.css'

class ComponentSetting extends React.Component{
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
						if(index === 0){
							return(
								<div className={value.Action} key={index}>
									<div className='layoutTitle'>
										<p><i className='iconfont icon-gengduo'></i></p>
										<p>{value.name}</p>
									</div>
								</div>
							)
						}
						if(index === this.length){
							return(
								<div className={value.Action} key={index}>
									<div className='layout'>
										<p>{value.name}</p>
									</div>
								</div>
							)
						}

						return(
							<div className={value.Action} key={index}>
								<div className='layout'>	
									<p>{value.name}</p>
									<p><i className='iconfont icon-gengduo'></i></p>
								</div>
							</div>
						)
					})}
				</div>
		)
	}	
}

export default ComponentSetting