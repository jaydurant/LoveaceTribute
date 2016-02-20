import React from 'react';

function WikiEntry(props){
	return (
			<section>
				<p>If you would like to learn more about this important person in history please <a href={props.wikiUrl} title={props.wikiTitle}>view this wikipedia entry</a>.</p>
			</section>
		);
}



export default WikiEntry;