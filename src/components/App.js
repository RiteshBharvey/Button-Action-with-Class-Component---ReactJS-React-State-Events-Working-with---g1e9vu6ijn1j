import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ()=>{
	const[para,setPara]=useState("");
	const clickHandler = ()=>{
		setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
	}
    	return(
    		<div id="main">
			<p id="para">{para}</p>
			<button id="click" onClick={clickHandler}>Click</button>
    		</div>
    	);
}


export default App;

