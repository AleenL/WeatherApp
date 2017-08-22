import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';

class PieReact extends Component {
	
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        let data = []
        for(let i=0;i<this.props.tmp.length;i++){
			data.push(this.props.tmp[i].temperature)
		}
        myChart.setOption({
        grid:{
        x:0,
        x2:0,
        y:30,
        y2:30
    	},
        textStyle:{
            fontSize:'12',
            color: 'rgb(255,255,255)'
        },
        tooltip : {
            trigger: 'axis'
        },
        //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: false},
                dataView : {show: false, readOnly: false},
                magicType : {show: false, type: ['line', 'bar']},
                restore : {show: false},
                saveAsImage : {show: false}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data : ['1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22v','23点','24点'],
            }
        ],

        yAxis : [
            {	
            	show:false,
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                },
                textStyle:{
                	fontSize:'12',
                	color: "#ffffff"
                }
            }
        ],
        series : [
            {
                name:'气温',
                type:'line',
                data:data,
                itemStyle:{
                	normal:{
                		color:'rgba(255,255,255,.4)'
                	}
                }
            }]
        });
    }

    render() {
        return(
        	<div style={{width:"100%",overflowX:'scroll'}}>
				<div id="main" style={{width:"200%",height:"200px"}}></div>
        	</div>
            
        );
    }
}

export default PieReact