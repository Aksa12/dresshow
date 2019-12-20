import React, {Component} from 'react';
import Routes from './Routes.js';
import styles from 'materialize-css';
import style from './style/nav.module.css'
class Navbar extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount()
  {
    styles.AutoInit();
  }
	render(){
		return(
			<div>
				<nav>
				    <div className="nav-wrapper">
				      <a href="/home" className={style.logo + " brand-logo left"}><i className={style.icon+" material-icons"}>shop_two</i>DressHow</a>
				      <ul className="right right-on-med-and-down">
				        <li><a href="/home" className={style.nav}>Home</a></li>
				        <li><a href="/graph" className={style.nav}>Price Analysis</a></li>
				        <li><a href="/contact" className={style.nav}>Contact</a></li>  
				      </ul>
				    </div>
				</nav>
			</div>
	)
	}
}
export default Navbar;