import React, {Component} from "react";
import '../styles/App.css';

// const App = ()=>{
// 	const[para,setPara]=useState("");
// 	const clickHandler = ()=>{
// 		setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
// 	}
//     	return(
//     		<div id="main">
// 			<p id="para">{para}</p>
// 			<button id="click" onClick={clickHandler}>Click</button>
//     		</div>
//     	);
// }

class App extends Component{
	constructor(props){
		super(props);
		this.state={para:"",hide:"false"}
	}
	clickHandler(){
		this.setState({para:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",hide:"true"})
	}
	render(){
		return(
    		<div id="main">
			{!this.state.hide && <button type="button" id="click" onClick={this.clickHandler.bind(this)}>Click</button>}
			{this.state.hide && <p id="para">{this.state.para}</p>}
    		</div>
    		);
	}
}


export default App;

