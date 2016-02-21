import React from 'react';

function ContentImage(props){
	return (
			<section className="row center-text">
				<image className="img-responsive center-block" src={props.imgUrl}  width={props.imgWidth} height={props.imgHeight} />
				<div className="col-sm-8 center-column">{props.caption}</div>
			</section>
		);
}

export default ContentImage;