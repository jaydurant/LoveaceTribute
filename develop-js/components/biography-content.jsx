import React from 'react';
import ContentTitle from './title-content';
import ContentImage from './image-content';
import Timeline from './timeline-content';
import Quote from './quote-content';
import WikiEntry from './wikientry-content';
import xhr from '../utils/xhr';


class BiographyContent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			url: props.url,
			cebName:'',
			tagLine:'',
			imgUrl:'assets/main-image.jpg',
			imgWidth:'500',
			imgHeight:'602',
			imgCaption:"Painting of Ada Lovelace at a piano in 1852 by Henry Phillips. While she was in great pain at the time, she sat for the painting as Phillips' father, Thomas Phillips, had painted Ada's father, Lord Byron.",
			timelineArray:[],
			quote:{},
			wikiUrl:'',
			wikiTitle:'wikipedia page for Ada Lovelace'
		};
		this.xhr = xhr;
	}

	componentDidMount(){
		this.xhr(JSON.parse,{url:this.props.url}).then((data) => {
			this.setState({cebName: data.bio.name,tagLine: data.bio.tagLine,timelineArray: data.timeLine,wikiUrl: data.wikiUrl,quote:data.quote});
		});
	}

	render(){

		return(
			<div className="container container-background">
				<ContentTitle pageTitle={this.state.cebName} tagLine={this.state.tagLine} />
				<ContentImage imgUrl={this.state.imgUrl} imgWidth={this.state.imgWidth} imgHeight={this.state.imgHeight} caption={this.state.imgCaption}/>
				<Timeline timelineArray={this.state.timelineArray}/>
				<Quote quote={this.state.quote} />
				<WikiEntry wikiUrl={this.state.wikiUrl} wikiTitle={this.state.wikiTitle} />
			</div>
			);
	}
}




export default BiographyContent;