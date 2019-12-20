import React, {Component} from 'react';
import styles from 'materialize-css';

class Footer extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount()
  {
    styles.AutoInit();
  }
	render(){
		return(
			<footer className="page-footer" style={{marginTop:"100px"}}>
	          <div class="container">
	            <div class="row">
	              <div class="col l6 s12">
	                <h5 class="white-text">DressHow</h5>
	                <p class="grey-text text-lighten-4">This web app is build to enhance skills in react, nodejs and express</p>
	              </div>
	              <div class="col l4 offset-l2 s12">
	                <h5 class="white-text">Follow me on!</h5>
	                <ul>
	                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/aqsa.mustafa.1" target="_blank">Facebook</a></li>
	                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/aksaaa111/" target="_blank">Instagram</a></li>
	                </ul>
	              </div>
	            </div>
	          </div>
	        </footer>
	)
	}
}
export default Footer;