function Ajax(url,type,param,async,header){
	this.url = url;
	this.type = type;
	this.async = async;
	this.header = header;
	this.param = param
}

Ajax.prototype.getMsg = function(){
	var _this = this;
	return new Promise(function(resolve,reject){
		let req = new XMLHttpRequest()
		req.onload = function(){
			if (req.status === 200 || req.status === 304) {
			   resolve(JSON.parse(req.response))
			} else {
			    reject(Error(req.statusText))
			}
		}
		req.onerror = function(){
			reject(Error('NetWork Error'))
		}
		//确定默认值
		_this.type === null || _this.type.toUpperCase() === 'GET' ? _this.type = 'get' : _this.type = 'post'
		_this.param = formatParams(_this.param)
		_this.param === null || _this.param === '' ? _this.url : _this.url=_this.url + '?' + _this.param
		_this.async === null || _this.async === true ? _this.async = true : _this.async = false

		//设置提交表单内容
		req.open(_this.type,_this.url,_this.async)
		req.send()
	});

	function formatParams(data){
		let _fqArr = []
		for (let _fpName in data) {
			_fqArr.push(_fpName + '=' + data[_fpName])
		}
		return _fqArr.join('&')
	}
}

export default Ajax