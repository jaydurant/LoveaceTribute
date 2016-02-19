import React from 'react';
import ContentTitle from "./title-content";
import ContentImage from "./image-content";
import Timeline from "./timeline-content";
import Quote from "./quote-content";
import WikiEntry from "./wikientry-content";


class BiographyContent extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	

	componentDidMount(){
		
	}

	render(){

		return(
			<div className="container">
				<ContentTitle />
				<ContentImage />
				<Timeline />
				<Quote />
				<WikiEntry />
			</div>
			);
	}
}




export default BiographyContent;