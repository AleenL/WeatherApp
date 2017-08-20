import React from 'react'
import ComponentSetting from './ComponentSetting'

class Setting extends React.Component{
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
}