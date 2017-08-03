import React from 'react'
import './Clock.css'

class Clock extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			date : this.props.time
		}
	}
	
	componentDidMount() {
		let drawing = document.getElementById('clock');
		let cxt = drawing.getContext('2d')
		let that = this

		function drawClock(){			
			cxt.clearRect(0,0,drawing.width,drawing.height)			
			
			let [hour,min,sec] = [that.props.time[0],that.props.time[1],that.props.time[2]]
			
			hour=hour+min/60;   //小时必须获取浮点类型(小时+分数转化成的小时)  
        	//问题 19:23:30  
        	//将24小时进制转换为12小时  
        	hour=hour>12?hour-12:hour;  
          
          
	        cxt.lineWidth=2;  
	        cxt.strokeStyle="rgba(109,109,110,.7)";  //表盘(蓝色)  
	        cxt.beginPath();  
	        cxt.arc(105,105,85,0,Math.PI*360,false);  
	        cxt.closePath();  
	        cxt.stroke();  
	  
	        //时刻度  
	        for(let i=0;i<12;i++){  
	            cxt.save();               
	            cxt.lineWidth=4;    //设置时针的粗细                 
	            cxt.strokeStyle="rgba(109,109,110,.7)";  //设置时针的颜色                 
	            cxt.translate(105,105);               
	            cxt.rotate(i*30*Math.PI/180);//角度*Math.PI/180=弧度  
	            cxt.beginPath();  
	            cxt.moveTo(0,-82);  
	            cxt.lineTo(0,-75);  
	            cxt.closePath();  
	            cxt.stroke();  
	            cxt.restore();  
	        }  
	              
	        //分刻度  
	        for(let i=0;i<60;i++){  
	            cxt.save();               
	            cxt.lineWidth=3;                  
	            cxt.strokeStyle="rgba(109,109,110,.7)";                
	            cxt.translate(105,105);           
	            cxt.rotate(i*6*Math.PI/180);                  
	            cxt.beginPath();  
	            cxt.moveTo(0,-82);  
	            cxt.lineTo(0,-78);  
	            cxt.closePath();  
	            cxt.stroke();  
	            cxt.restore();  
	        }  
	          
	        //时针  
	            cxt.save();           
	            cxt.lineWidth=5;                  
	            cxt.strokeStyle="rgba(109,109,110,.7)";                
	            cxt.translate(105,105);//设置异次元空间的0，0点，画布的圆心  
	            cxt.rotate(hour*30*Math.PI/180);  
	            cxt.beginPath();  
	            cxt.moveTo(0,-40);     //针长  
	            cxt.lineTo(0,10);
	            cxt.closePath();  
	            cxt.stroke();  
	            cxt.restore();  
	          
	          
	        //分针  
	            cxt.save();  
	            cxt.lineWidth=3;  
	            cxt.strokeStyle="rgba(109,109,110,.7)";  
	            cxt.translate(105,105);  
	            cxt.rotate(min*6*Math.PI/180);  
	            cxt.beginPath();  
	            cxt.moveTo(0,-55);  
	            cxt.lineTo(0,15);  
	            cxt.closePath();  
	            cxt.stroke();  
	            cxt.restore();  
	          
	              
	        //秒针              
	            cxt.save();  
	            cxt.strokeStyle="rgba(109,109,110,.7)";  
	            cxt.lineWidth=1;  
	            cxt.translate(105,105);               
	            cxt.rotate(sec*6*Math.PI/180);//设置旋转角度                
	            cxt.beginPath();    //画图  
	            cxt.moveTo(0,-75);  
	            cxt.lineTo(0,20);  
	            cxt.closePath();  
	            cxt.stroke();                 
	            cxt.beginPath();    //画出时针、分针、秒针的交叉点、  
	            cxt.arc(0,0,5,0,360,false);  
	            cxt.closePath();                  
	            cxt.fillStyle="rgba(109,109,110,.7)";   //设置填充样式  
	            cxt.fill();               
	            cxt.stroke();  
	              
	            //设置秒针前段的小圆点  
	            cxt.beginPath();  
	            cxt.arc(0,-150,5,0,360,false);  
	            cxt.closePath();  
	            cxt.fillStyle="rgba(109,109,110,.7)";  
	            cxt.fill();               
	            cxt.stroke();//设置笔触样式(秒针已设置)                  
	            cxt.restore();  
			}
			 setInterval(drawClock, 1000);
	         drawClock();
		}


 	render(){
 		return (
 			<div>
				<canvas id='clock' width='200px' height='200px'></canvas>
 			</div>
 		)
 	}
}
export default Clock