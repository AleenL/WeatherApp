import React from 'react'
import './GetCity.css'
import InputCity from './InputCity'

class GetCity extends React.Component{
	constructor(props){
		super(props);
		this.state={
		 city:[
		 	{city:'北京',town:[['朝阳','chaoyang'],['海淀','haidian'],['丰台','fengtai'],['宣武','xuanweu']]},
			{city:'上海',town:[['浦东','pudong'],['黄埔','huangpu'],['嘉定','jiading'],['奉贤','fengxian']]},
			{city:'重庆',town:[['石柱','shizhu'],['秀山','xiushan'],['渝中','yuzhong'],['巴南','banan'],['酉阳','youyang'],['开县','kaixian'],['丰都','fengdu'],['渝北','yubei']]},
			{city:'河北',town:[['石家庄','shijiazhuang'],['唐山','tangshan'],['邯郸','handan'],['邢台','xingtai'],['沧州','cangzhou'],['秦皇岛','qinghuangdao'],['张家口','zhangjiakou'],['衡水','hengshui'],['廊坊','langfang'],['承德','chengde']]},
			{city:'河南',town:[['郑州','zhengzhou'],['南阳','nanyang'],['新乡','xinxiang'],['安阳','anyang'],['洛阳','luoyang'],['信阳','xinyang'],['平顶山','pingdingshan'],['周口','zhoukou'],['商丘','shangqiu'],['开封','kaifeng'],['焦作','jiaozuo'],['驻马店','zhumadian'],['濮阳','puyang'],['三门峡','sanmenxia'],['漯河','luohe'],['许昌','xuchang'],['鹤壁','hebi'],['济源','jiyuan']]},
			{city:'云南',town:[['昆明','kunming'],['红河','honghe'],['大理','dali'],['文山','wenshan'],['德宏','dehong'],['曲靖','qujing'],['昭通','zhaotong'],['楚雄','chuxiong'],['保山','baoshan'],['玉溪','yuxi'],['丽江','lijiang'],['临沧','lingcang'],['思茅','simao'],['西双版纳','xishuangbanna'],['怒江','nujiang'],['迪庆','diqing']]},
			{city:'辽宁',town:[['大连','dalian'],['沈阳','shenyang'],['丹东','dandong'],['辽阳','liaoyang'],['葫芦岛','huludao'],['锦州','jinzhou'],['朝阳','chaoyang'],['营口','yingkou'],['鞍山','anshan'],['抚顺','fushun'],['阜新','huxin'],['本溪','benxi'],['盘锦','panjin'],['铁岭','tieling']]},
			{city:'黑龙江',town:[['齐齐哈尔','qiqihaer'],['哈尔滨','haerbing'],['大庆','daqing'],['佳木斯','jiamusi'],['双鸭山','shuangyashan'],['牡丹江','mudanjiang'],['鸡西','jixi'],['黑河','heihe'],['绥化','suihua'],['鹤岗','hegang'],['伊春','yichun'],['大兴安岭','daxinganling'],['七台河','qitaihe']]},
			{city:'湖南',town:[['长沙','changsha'],['邵阳','shaoyang'],['常德','changde'],['衡阳','hengyang'],['株洲','zhuzhou'],['湘潭','xiangtan'],['永州','yongzhou'],['岳阳','yueyang'],['怀化','huaihua'],['郴州','shenzhou'],['娄底','loudi'],['益阳','yiyang'],['张家界','zhangiajie'],['湘西','xiangxi']]},
			{city:'安徽',town:[['芜湖','wuhu'],['合肥','hefei'],['六安','liuan'],['宿州','suzhou'],['阜阳','huyang'],['安庆','anqing'],['马鞍山','maanshan'],['蚌埠','fenghu'],['淮北','huaibei'],['淮南','huainan'],['宣城','xuancheng'],['黄山','huangshan'],['铜陵','tongling'],['亳州','haozhou'],['池州','chizhou'],['巢湖','caohu'],['滁州','chuzhou']]},
			{city:'山东',town:[['济南','jinan'],['青岛','qingdao'],['临沂','linyi'],['济宁','jining'],['菏泽','heze'],['烟台','yantai'],['泰安','taian'],['淄博','zibo'],['潍坊','weifang'],['日照','rizhao'],['威海','weihai'],['滨州','binzhou'],['东营','dongying'],['聊城','liaocheng'],['德州','dezhou'],['莱芜','laiwu'],['枣庄','zaozhuang']]},
			{city:'新疆',town:[['乌鲁木齐','wulumuqi'],['伊犁','yili'],['昌吉','changji'],['石河子','shihezi'],['哈密','hami'],['阿克苏','akesu'],['巴音郭楞','bayindunlen'],['喀什','kashi'],['塔城','tacheng'],['克拉玛依','kelamayi'],['和田','hetian'],['阿勒泰','aleta'],['吐鲁番','tulufan'],['阿拉尔','alaer'],['博尔塔拉','boertala'],['五家渠','wujiaqu'],['克孜勒苏','kezilesu'],['图木舒克','tumushuke']]},
			{city:'江苏',town:[['苏州','suzhou'],['徐州','xuzhou'],['盐城','yancheng'],['无锡','wuxi'],['南京','nanjing'],['南通','nantong'],['连云港','lianyungang'],['常州','changzhou'],['扬州','yangzhou'],['镇江','zhenjiang'],['淮安','huaian'],['泰州','taizhou'],['宿迁','suqian']]},
			{city:'浙江',town:[['温州','wenzhou'],['宁波','ningbo'],['杭州','hangzhou'],['台州','taizhou'],['嘉兴','jiaxing'],['金华','jinhua'],['湖州','huzhou'],['绍兴','shaoxing'],['舟山','zhoushan'],['丽水','lishui'],['衢州','quzhou']]},
			{city:'江西',town:[['南昌','nanchang'],['赣州','ganzhou'],['上饶','shangrao'],['吉安','jian'],['九江','jiujiang'],['新余','xinyu'],['抚州','fuzhou'],['宜春','yichun'],['景德镇','jingdezhen'],['萍乡','pingxiang'],['鹰潭','yingtan']]},
			{city:'湖北',town:[['武汉','wuhan'],['宜昌','yichang'],['襄樊','fanxiang'],['荆州','jinzhou'],['恩施','enshi'],['孝感','xiaogan'],['黄冈','huanggang'],['十堰','shiyan'],['咸宁','xianning'],['黄石','huangshi'],['仙桃','xiantao'],['随州','suizhou'],['天门','tianmen'],['荆门','jinmen'],['潜江','qianjiang'],['鄂州','ezhou'],['神农架','shennongjia']]},
			{city:'广西',town:[['贵港','guigang'],['玉林','yulin'],['北海','beihai'],['南宁','nanning'],['柳州','liuzhou'],['桂林','guilin'],['梧州','wuzhou'],['钦州','qinzhou'],['来宾','laibing'],['河池','hechi'],['百色','baise'],['贺州','hezhou'],['崇左','chongzuo'],['防城港','fangchenggang']]},
			{city:'甘肃',town:[['兰州','lanzhou'],['天水','tianshui'],['庆阳','qingyang'],['武威','wuwei'],['酒泉','jiuquan'],['张掖','zhangye'],['陇南','longnan'],['白银','baiyin'],['定西','dingxi'],['平凉','pingliang'],['嘉峪关','jiayuguang'],['临夏','lingxia'],['金昌','jinchang'],['甘南','gannan']]},
			{city:'山西',town:[['太原','taiyuan'],['大同','datong'], ['运城','yuncheng'],['长治','changzhi'],['晋城','jincheng'],['忻州','xinzhou'],['临汾','linfen'],['吕梁','lvliang'],['晋中','jinzhong'],['阳泉','yangquan'],['朔州','shuozhou']]},
			{city:'内蒙古',town:[['赤峰','chifeng'],['包头','baotou'],['通辽','tongliao'],['呼和浩特','huhehaote'],['乌海','wuhai'],['鄂尔多斯','eerduosi'],['呼伦贝尔','hulunbeier'],['兴安','xinan'],['巴彦淖尔','bayanzhouer'],['乌兰察布','wulanchabu'],['锡林郭勒','xilinguole'],['阿拉善','alashan']]},
			{city:'陕西',town:[['西安','xian'],['咸阳','xianyang'],['宝鸡','baoji'],['汉中','hanzhou'],['渭南','weinan'],['安康','ankang'],['榆林','yulin'],['商洛','shangluo'],['延安','yanan'],['铜川','tongchuan']]},
			{city:'吉林',town:[['吉林','jilin'],['长春','changchun'],['白山','baishan'],['白城','baicheng'],['延边','yanbian'],['松原','songyuan'],['辽源','liaoyuan'],['通化','tonghua'],['四平','siping']]},
			{city:'福建',town:[['漳州','zhangzhou'],['泉州','quanzhou'], ['厦门','xiamen'],['福州','fuzou'],['莆田','putian'], ['宁德','ningde'],['三明','sanming'],['南平','nanping'],['龙岩','longyan']]},
			{city:'贵州',town:[['贵阳','guiyang'],['黔东南','qiandongnan'],['黔南','qiannan'],['遵义','zunyi'],['黔西南','qianxinan'],['毕节','bijie'],['铜仁','tongren'],['安顺','anshun'],['六盘水','liupanshui']]},
			{city:'广东',town:[['东莞','dongwan'],['广州','guangzhou'],['中山','zhongshan'],['深圳','shenzhen'],['惠州','huizhou'],['江门','jiangmen'],['珠海','zhuhai'],['汕头','shantou'],['佛山','fuoshan'],['湛江','zhanjiang'],['河源','heyuan'],['肇庆','zhaoqing'],['潮州','chaohzou'],['清远','qiangyuan'],['韶关','shaoguan'],['揭阳','jieyang'],['阳江','yangjiang'],['云浮','yunfu'],['茂名','maoming'],['梅州','meizhou'],['汕尾','shanwei']]},
			{city:'青海',town:[['西宁','xining'],['海西','haixi'],['海东','hiadong'], ['海北','haibei'],['果洛','guoluo'],['玉树','yushu'] ,['黄南','huangnan']]},
			{city:'西藏',town:[['拉萨','lasa'],['山南','shannan'],['林芝','linzhi'],['日喀则','rikeze'],['阿里','ali'],['昌都','changdu'],['那曲','naqu']]},
			{city:'四川',town:[['成都','chengdu'],['绵阳','mianyang'],['广元','guangyuan'],['达州','dazhou'],['南充','nanchong'],['德阳','deyang'],['广安','guangan'],['阿坝','aba'],['巴中','bazhong'],['遂宁','suining'],['内江','neijiang'],['凉山','liangshan'],['攀枝花','panzhihua'],['乐山','leshan'],['自贡','zigong'],['泸州','luzhou'],['雅安','yaan'],['宜宾','yibing'],['资阳','ziyang'],['眉山','meishan'],['甘孜','ganzi']]},
			{city:'宁夏',town:[['银川','yinchuan'],['吴忠','wuzhong'],['中卫','zhongwei'],['石嘴山','shizuishan'],['固原','guyuan']]},
			{city:'海南',town:[['三亚','sanya'],['海口','haikou'],['琼海','qionghai'],['文昌','wenchang'],['东方','dongfang'],['五指山','wuzhishan'],['万宁','wangning']]},
		 	]
		}
	}
	
	/*componentDidMount(){
		var BigCity = [];
		var NodeCity = document.getElementById('cityName')
		console.log(NodeCity)
		this.state.city.forEach(function(key,index){
			BigCity.push(`<p key=${index}<p>${key.town}</p></p>`)
		})
		NodeCity.innerHTML=BigCity
	}*/
	
	/*getTwon(e){
		if(e.target.nextElementSibling.getElementsByTagName('li').length > 0){
			e.target.nextElementSibling.innerHTML = ''
			return false;
		}
		if(e.target.nodeName !== 'DIV') return false;
		var ArrCity = e.target.getAttribute('data').split(',')
			function _chunk(arr,idx){
				var newarr = []
				chunk(arr,idx)
				function chunk(arr,idx){
					if(arr.length > idx){
						let a = arr.slice(0,idx)
						newarr.push(a)
						arr.splice(0,idx)
						chunk(arr,idx)
					}else{
						newarr.push(arr)
					}
				}
				 return newarr
			}
		var newtwon = _chunk(ArrCity,2)
		newtwon.forEach(function(key,index){
			var newLi = document.createElement('li')
			newLi.innerHTML = key[0]
			e.target.nextElementSibling.append(newLi)
		})
		console.log(e.target.nextElementSibling,e.target)
	}
	*/
	/*changeHeight(e){
		let ulNode = e.target.nextElementSibling,
			index = ulNode.getElementsByTagName('li').length

		if( ulNode.style.height === '0px' || !ulNode.style.height){
			ulNode.style.height = index*2.5+'rem'
		}else{
			ulNode.style.height = 0
		}
	}
	
	hello(e){
		console.log(e.target)
	}*/

	render(){
		return(

			<InputCity city={this.state.city}/>


		)
	}
}
export default GetCity