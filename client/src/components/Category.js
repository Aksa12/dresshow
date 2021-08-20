import React, {Component} from 'react';
import styles from 'materialize-css';
import style from './style/category.module.css';

export default class Category extends Component{
	constructor(props){
		super(props);	
		this.state = {
		}	
	}
	render(){
		console.log(this.props)
		return(
			<nav className={style.category + " container"}>
			    <div className="nav-wrapper">
			      <ul>
			      	<li style={{marginLeft:'20px'}}><a className={style.items} onClick={()=>this.props.filter("all")}  href="#">All</a></li>
			        <li><a className={style.items} onClick={()=>this.props.filter("khaadi")}  href="#">Khaadi</a></li>
			        <li><a className={style.items} onClick={()=>this.props.filter("outfitters")} href="#">Outfitters</a></li>
			        <li><a className={style.items} onClick={()=>this.props.filter("breakout")} href="#">Breakout</a></li>
			      </ul>
			    </div>
			 </nav>

		)
	}
}