import React from 'react';

function ContentImage(props){
	return (
			<figure className="row center-text">
				<image className="img-responsive center-block" src={props.imgUrl}  width={props.imgWidth} height={props.imgHeight} />
				<figcaption className="col-sm-8 center-column">{props.caption}</figcaption>
			</figure>
		);
}

export default ContentImage;