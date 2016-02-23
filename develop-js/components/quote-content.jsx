import React from 'react';

function Quote(props){
	console.log(props.quote.url);
	return(
			<section className='sectionContainer'>
				<blockquote className='quote-text center-text' cite={props.quote.url}>
					<p className='text-background'>{props.quote.content}</p>
					<p className='text-background'>{props.quote.author}</p>
				</blockquote>
			</section>
		);
}

export default Quote;