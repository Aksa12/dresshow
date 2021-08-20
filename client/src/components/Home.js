import React, {Component} from 'react';
import Navbar from './Navbar.js';
import Items from './Items.js';
import Pagination from './Pagination.js'
import style from './style/welcome.module.css';
import Category from './Category.js';
import Sort from './Sort.js';
import Footer from './Footer.js';
const axios = require('axios').default;
export default class Home extends Component{
	constructor(props){
		super(props);	
		this.state = {
			items:[],
			filteredItems:[],
			loading:false,
			currentPage:1,
			itemsPerPage:12,
		}	
	}
	componentDidMount()
	{
		
		const fetchPosts = async () => {
	    this.setState({loading:true})
	    await axios.get('/api/items').then(response=>
      this.setState({items:response.data},()=>console.log("products fetched", response.data)))
	    this.setState({loading:false})
		  this.setState({filteredItems:this.state.items});
    };
    

   fetchPosts();
   }
   

	render()
	{
		
    	// Change page
    	const paginate = pageNumber => this.setState({currentPage:pageNumber});
    	//category
    	const filter = (category)=> {
    		if (category == 'all')
    		{
    			this.setState({filteredItems:this.state.items})
    		}
    		else
    		{
    		let filt_array = this.state.items.filter(item => item.brand == category) 
    		this.setState({filteredItems:filt_array})
    		}
    	};
       // sort the items according to the price
    	const sortItems = (order)=>{
  			var sortArray= [];
    		if (order == 'ascending')
    		{
    			
    			sortArray= this.state.filteredItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
    			this.setState({filteredItems:sortArray});
    		}
    		else
    		{
 
    			sortArray= this.state.filteredItems.sort((a, b) => (a.price > b.price) ? -1 : 1)
    			this.setState({filteredItems:sortArray});
    		}
    		
    	}
    		
    	const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage;
  		const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
  		
  		var array = this.state.filteredItems;
  		var currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);

		return(
			<div>
				<Navbar />
				<div className={style.welcome}>
				<h1 className={style.welcomeh1}>DressHow</h1>
				<h3 className={style.welcomeh3}>Choose what's best for you!</h3>
				</div>
				<Category filter={filter}/>
				<Sort sortItems={sortItems}/>
				<Items items={currentPosts} loading={this.state.loading} />
      			<Pagination
       				postsPerPage={this.state.itemsPerPage}
        			totalPosts={this.state.filteredItems.length}
        			currentPage = {this.state.currentPage}
       				paginate={paginate}
      			/>
				<Footer />
			</div>
		)
	}
}