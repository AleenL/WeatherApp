
function Account (data) {

	this.data = data

	this.changEventCallback = {};

}

Account.prototype.set = function set (v) {
	this.data = v;
	if (this.changEventCallback['change'])
		this.changEventCallback['change'].forEach(fn => fn())
}

Account.prototype.onChangeEvent = function on (eventName, fn) {
	if (this.changEventCallback[eventName])
		this.changEventCallback[eventName].push(fn);
	else
		this.changEventCallback[eventName] = [fn];
}

export default Account;
