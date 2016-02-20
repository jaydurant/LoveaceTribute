import React from 'react';

function ContentImage(props){
	return (
			<section>
				<image className="img-responsive center-block" src={props.imgUrl}  width={props.imgWidth} height={props.imgHeight} />
				<div>{props.caption}</div>
			</section>
		);
}

export default ContentImage;