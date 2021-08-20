import React, {Component} from 'react';
import styles from 'materialize-css';
import style from './style/sort.module.css';

export default class Sort extends Component{
	constructor(props){
		super(props);	
		this.state = {
		}	
	}
	render(){
		return(
			<div className="container center">
			<a className={style.button + " waves-effect waves-light btn"} onClick ={() => this.props.sortItems("ascending")}>Ascending</a>
			<a className={style.button + " waves-effect waves-light btn"} onClick ={() => this.props.sortItems("descending")}>Descending</a>
			</div>

		)
	}
}