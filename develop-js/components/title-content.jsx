import React from 'react';

function ContentTitle(props){
	return (
			<section>
				<h1>{props.pageTitle}</h1>
				<h2>{props.tagLine}</h2>
			</section>
		);
}


export default ContentTitle;