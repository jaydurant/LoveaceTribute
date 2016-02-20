import React from 'react';

function Timeline(props){
	const timelineList = props.timelineArray;
	let newArray = timelineList.map((val,i) => <li key={i}><strong>{val.year} </strong>{val.content}</li>);
	return(
			<section>
				<h3>Here is a time line of Ada Lovelace's life:</h3>
				<ul>
					{newArray}
				</ul>
			</section>
		);
}

export default Timeline;