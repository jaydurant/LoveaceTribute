import React from 'react';

function Quote(props){
	return(
			<section className='section-container'>
				<blockquote className='quote-text center-text col-sm-11 center-block' cite={props.quote.url}>
					<p className='text-background'>{props.quote.content}</p>
					<p className='text-background'>{props.quote.author}</p>
				</blockquote>
			</section>
		);
}

export default Quote;