import React, {Component} from 'react';
import styles from 'materialize-css';

class Notfound extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount()
  {
    styles.AutoInit();
  }
	render(){
		return(
			<div style={{color:"lightCoral", textAlign:"center", margin:"100px"}}>
				  
				 <h2><i className="material-icons" style={{fontSize:"50px", margin:"10px", padding:"5px"}}>error</i>OOPS! Page Not Found</h2>
			</div>
	)
	}
}
export default Notfound;