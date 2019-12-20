import React, {Component} from 'react';
import styles from 'materialize-css';
import style from './style/form.module.css'
class Form extends Component{
	constructor(props){
		super(props);
		this.state = {valid:false}
		this.changeHandler = this.changeHandler.bind(this);
		var messageP, messageN;
		this.messageP="";
		this.messageN="";
	}
	changeHandler(event)
	{
		var input = event.target;
		var name = input.name;
		var val = input.value;
		var message ="";
		
		if (name=="name")
		{
				if (!/^[a-zA-Z ]+$/.test(val))
				{
					this.messageN = "Invalid name";
				}
				else
				{
					this.messageN = "";
				}
		}
		else if (name=="phone")
		{
				if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(val))
				{
					this.messageP = "Invalid Phone";

				}
				else
				{
					this.messageP = "";
				}

		}
	
		if (this.messageN == "" && this.messageP == "" )
		{
			this.setState({valid:true})
		}
		else
		{
			this.setState({valid:false})	
		}
		
	}
	render(){
		return(
			<div>
				<div className="row container">
			    <form className={style.form +" col s12"} method="post" action="/api/form">
			      <div className="row">
			        <div className="input-field col s6">
			          <i className="material-icons prefix">account_circle</i>
			          <input id="icon_prefix" type="text" name="name" className="validate" onBlur={this.changeHandler} minLength="3" maxLength="5" required />
			          <label for="icon_prefix">Name</label>
			        </div>
			        <div className="input-field col s6">
			          <i className="material-icons prefix">phone</i>
			          <input id="icon_telephone" type="tel" name="phone" className="validate" onBlur={this.changeHandler} required/>
			          <label for="icon_telephone">Telephone</label>
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			         <i className="material-icons prefix">contact_mail</i>
			          <input id="email" type="email" name="email" className="validate" required/>
			          <label for="email">Email</label>
			        </div>
			      </div>
			      <div className="row">
				      <div className ="col s12">
				         <h4>Rate the website</h4>
				         	<p>
				         	<label>
					        <input name="rate" type="radio" value ="Excellent" unchecked  />
					        <span className={style.radio}>Excellent</span></label></p>
					        <p>
					        <label><input name="rate" type="radio" value ="Good" unchecked />
					        <span className={style.radio}>Good</span></label></p>
					        <p>
					        <label><input name="rate" type="radio" value ="Average" unchecked  />
					        <span className={style.radio}>Average</span></label></p>
					        <p>
					        <label><input name="rate" type="radio" value ="Poor" unchecked  />
					        <span className={style.radio}>Poor</span></label></p>
		
				      </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <i className="material-icons prefix">mode_edit</i>
			          <textarea id="icon_prefix2" className="materialize-textarea" name="comment" required></textarea>
			          <label for="icon_prefix2">Message</label>
			        </div>
			      </div>
			      {(this.messageN || this.messageP) && <div className={style.message}>
			      <p>{this.messageN}</p>
			      <p>{this.messageP}</p>
			      </div>}
			      {this.state.valid && <button className={style.button + " btn waves-effect waves-light"} type="submit" name="action">Submit
				    <i className="material-icons right">send</i>
				  </button>}
			    </form>
			  </div>
			</div>
		)
	}
}
export default Form;