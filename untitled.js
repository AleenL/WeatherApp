{/*<div className='settingContent'>
					<div className='settingTitle'>
						<div className='layoutTitle'>
							<p><i className='iconfont icon-gengduo'></i></p>
							<p>设置</p>
						</div>
					</div>
					<div className='userAccount'>
						<div className='layout'>
							<p>我的账号</p>
							<p><i className='iconfont icon-gengduo'></i></p>
						</div>
					</div>
					<div className='changePassword'>
						<div className='layout'>
							<p>修改密码</p>
							<p><i className='iconfont icon-gengduo'></i></p>
						</div>
					</div>
					
					
					<div className='componentSetting'>
						<div className='layout'>
							<p>组件设置</p>
							<p><i className='iconfont icon-gengduo'></i></p>
						</div>
					</div>
					<div className='colorSetting'>
						<div className='layout'>
							<p>主题设置</p>
							<p><i className='iconfont icon-gengduo'></i></p>
						</div>
					</div>

					<div className='About'>
						<div className='layout'>
							<p>关于天气</p>
							<p><i style={{fontStyle:'normal'}}>3.0.1</i> <i className='iconfont icon-gengduo'></i></p>
						</div>
					</div>
					<div className='getAdioce'>
						<div className='layout'>
							<p>意见反馈</p>
							<p><i className='iconfont icon-gengduo'></i></p>
						</div>
					</div>

					<div className='loginOut'>
						<div className='layout'>
							<p>退出当前帐号</p>
						</div>
					</div>
				</div>*/}

											/*<Route path='/changePassword' component={ChangePassword}/>
						
							<Route path='/colorSetting' component={ColorSetting}/>
							<Route path='/about' component={About}/>
							<Route path='/getAdioce' component={GetAdioce}/>}*/


			<div className='settingContent'>
				{this.state.setting.map((value,index) => {
					if(index === this.state.setting.length-1){
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
