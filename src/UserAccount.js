import React from 'react'
import './UserAccount.css'

export default React.createClass({
	render(){
		return(
			<div >
			{!this.props.action.indexOf('userAccount') && 
			<div className='UserAccount'>
				<p>账户</p>
				<p>{this.props.account}<i className='iconfont icon-gengduo'></i></p>
			</div>
			}
			{!this.props.action.indexOf('changePassword') && 
			<div className='changePassword'>
				<p>验证密码</p>
				<p><input type="text" placeholder='请输入注册时的邮箱'/></p>
				<p><input type="text" placeholder='请输入原密码'/></p>
				<button>下一步</button>
			</div>
			}
			</div>
		)
	}
})