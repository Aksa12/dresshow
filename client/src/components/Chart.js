import React, {Component} from 'react';
import styles from 'materialize-css';
import {Bar, Line} from 'react-chartjs-2';
import style from './style/chart.module.css';
class Chart extends Component{
	constructor(props){
		super(props);
		var hello=this.props.data1;
		this.state = {
			chartDate:{},
			min:0,
			max:0,
			avg:0,
		};
	}
	componentDidMount() {
    setTimeout(() => {
    	this.setState({
			chartData:{
				labels:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
				datasets:[
				{
					label:this.props.label,
					data: this.props.data1,
					fill:false,
					//lineTension:0,
					borderColor:this.props.borderColor,
					borderWidth:2,
					hoverBorderWidth:5,
				}]
			}


		})
      
    }, 1000)
    setTimeout(() => {
    var array = this.props.data1;
    var minval = Math.min.apply(null, array);
    var maxval = Math.max.apply(null, this.props.data1);
    var sum = this.props.data1.reduce((a, b) => a + b,0)
    var avgval = (sum / this.props.data1.length).toFixed(2);
    this.setState({min:minval, max:maxval, avg:avgval})
    }, 1000)
   
	}

	// setting the default values of the props
    static defaultProps = {
    	titleText : "Brand Price Analysis",
    	label:"brand",
    	borderColor:'lightCoral'
    }

	render(){	
		console.log("chart "+this.props.data1)
				return(
			<div className='chart container'>
			<div className={style.chart}>
			<Line data={this.state.chartData} width={200} height={70} options={{ 
				title:{
					display:true,
					text:this.props.titleText,
					fontSize:25,
					padding:25,
					fontColor:'lightCoral',
				},
				legend:{
					display:true,
					position:'right'
				}
			}} />
			 <ul className={style.box + " collection with-header"} style={{color:this.props.borderColor}}>
		        <li className="collection-header" style={{backgroundColor:this.props.borderColor,color:'white'}}><h4>Analysis</h4></li>
		        <li className="collection-item">Minimum Price: {this.state.min}</li>
		        <li className="collection-item">Maximum Price: {this.state.max}</li>
		        <li className="collection-item">Average Price: {this.state.avg}</li>
		      </ul>
			</div>
			</div>)
	}
}
export default Chart