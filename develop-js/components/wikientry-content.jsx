import React from 'react';

function WikiEntry(props){
	return (
			<section className='center-text section-container' >
				<p className='wiki-text text-background'>If you would like to learn more about this important person in history please <a className='interact-link' href={props.wikiUrl} title={props.wikiTitle} >view this wikipedia entry</a>.</p>
			</section>
		);
}



export default WikiEntry;