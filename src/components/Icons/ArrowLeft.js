import * as React from 'react';
const SvgArrowLeft = ({ title, titleId, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		viewBox='0 0 24 24'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M12.374 5.122a.5.5 0 0 1 0 .707l-6.147 6.147H19.02a.5.5 0 1 1 0 1H6.227l6.147 6.146a.5.5 0 0 1-.708.707l-7-7a.5.5 0 0 1 0-.707l7-7a.5.5 0 0 1 .708 0Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgArrowLeft;
