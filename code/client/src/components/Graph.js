import React, {Component} from 'react';
import Chart from './Chart.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
const axios = require('axios').default;
class Graph extends Component{
	constructor(props){
		super(props)
		this.state = {
			items:[],
			catgraph1:[], // khaadi
			catgraph2:[], // outfitters
			catgraph3:[], // breakout
		}
	}
	componentDidMount()
	{
		
		const fetchPosts = async () => {
	    await axios.get('/api/items').then(response=>
        this.setState({items:response.data},()=>console.log("products fetched", response.data)))
     
    	this.setState({catgraph1:this.filter_array("khaadi")});
    	this.setState({catgraph2:this.filter_array("outfitters")});
    	this.setState({catgraph3:this.filter_array("breakout")});

    	console.log(this.state.catgraph1);
    	console.log(this.state.catgraph2);
    	console.log(this.state.catgraph3);

	    
    };
    fetchPosts();
   }
   filter_array(category)
   {
   		var array = this.state.items;
   		let filt_array = array.filter(item => item.brand == category)
        filt_array =  filt_array.slice(0,30);
        let price=[];
        for (let i =0; i<filt_array.length;i++)
        	price.push(filt_array[i].price)
        return price;
   }
	render(){
		return(
			<div>
				<Navbar />
				<div><h1 style={{textAlign:"center", color:"lightCoral"}}>Price Analysis </h1></div>
				<Chart data1={this.state.catgraph1} borderColor={"chocolate"} titleText={"Khaadi Price Analysis"} label={"Khaadi"}/>
				<Chart data1={this.state.catgraph2} borderColor={"lightSeaGreen"} titleText={"Outfitters Price Analysis"} label={"Outfitters"}/>
				<Chart data1={this.state.catgraph3} borderColor={"paleVioletRed"} titleText={"Breakout Price Analysis"} label={"Breakout"} />
				<Footer />
			</div>
		)
	}
}
export default Graph;