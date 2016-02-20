import React from 'react';

function Quote(props){
	console.log(props.quote.url);
	return(
			<section>
				<blockquote cite={props.quote.url}>
					<p>{props.quote.content}</p>
					<p>{props.quote.author}</p>
				</blockquote>
			</section>
		);
}

export default Quote;