import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';

class PieReact extends Component {
	
	componentDidUpdate(nextProps) {
		console.log(this.props.tmp)
		/*var arr = []
		console.log(this.props.tmp.length)
		if(this.props.tmp !== nextProps.tmp){
			for(let i=0;i<this.props.tmp.length;i++){
				console.log(i)
			}
		}
		console.log(arr)*/
	}

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        let data = []
        for(let i=0;i<this.props.tmp.length;i++){
			data.push(this.props.tmp[i].temperature)
		}
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
            },
            yAxis: {},
            series: [{
                name: '温度',
                type: 'bar',
                data: data
            }]
        });
    }

    render() {
        return(
            <div id="main" style={{width:"100%",height:"200px"}}></div>
        );
    }
}

export default PieReact