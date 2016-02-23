import React from 'react';

function ContentImage(props){
	return (
			<section className="row center-text section-container">
				<figure className="img-frame img-main">
					<image className="img-responsive" src={props.imgUrl}  width={props.imgWidth} height={props.imgHeight} />
					<figcaption className="figure-text">{props.caption}</figcaption>
				</figure>
			</section>
		);
}

export default ContentImage;