import React, {Component} from "react";
import '../styles/App.css';

class App extends Component{
	constructor(){
		super();
		this.state={para:"",hide:false}
	}
	clickHandler(){
		this.setState({para:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",hide:true})
	}
	render(){
		return(
    		<div id="main">
			<button type="button" id="click" onClick={this.clickHandler.bind(this)}>Click</button>
			{this.state.hide && <p id="para">{this.state.para}</p>}
    		</div>
    		);
	}
}


export default App;

