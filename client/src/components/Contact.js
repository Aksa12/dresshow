import React, {Component} from 'react';
import Navbar from './Navbar.js';
import Form  from './Form.js';
import Footer from './Footer.js';
class Contact extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Navbar />
				<div><h2 style={{textAlign:"center", color:"lightCoral"}}>Give Us Feedback!</h2></div>
				<Form />
				<Footer />
			</div>
		)
	}
}
export default Contact;