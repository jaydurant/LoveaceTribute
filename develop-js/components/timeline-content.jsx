import React from 'react';

function Timeline(props){
	const timelineList = props.timelineArray;
	let newArray = timelineList.map((val,i) => <li key={i}><strong>-{val.year}: </strong>{val.content}</li>);
	return(
			<section className='row section-container'>
				<h3 className='col-sm-8 center-block'>Here is a time line of Ada Lovelace's life:</h3>
				<ul className='col-sm-10 center-block list-text text-background'>
					{newArray}
				</ul>
			</section>
		);
}

export default Timeline;