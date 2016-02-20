import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import BiographyContent from "./components/biography-content";


renderPage();

function renderPage(){
	const personName = "Ada_Lovelace";
	const rootContainer = document.querySelector("#article-content");
	render(<BiographyContent url='assets/bio.json'/>,rootContainer);

}
