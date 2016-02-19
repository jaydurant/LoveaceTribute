import React from 'react';

function Timeline(props){
	const timelineList = [<li>hey</li>];
	return(
			<section>
				<h3>Here is a time line of Ada Lovelace's life:</h3>
				<ul>
					{timelineList}
				</ul>
			</section>
		);
}

export default Timeline;