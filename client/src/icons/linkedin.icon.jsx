import React from 'react';

const SVG = ({
  style = {},
  fill = '#333',
  width = '100%',
  viewBox = '0 0 96 96',
	id='linkedIn-icon'
}) => (
	<svg
		version='1.1'
		id={ id }
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		viewBox={ viewBox }
	>
	<g id='XMLID_2_'>
		<path id='XMLID_9_' className='st0' d='M15.5,15.5v65h65v-65H15.5z M30.9,26.2c3.5,0,5.6,2.2,5.7,5.1c0,2.9-2.2,5.1-5.7,5.1h-0.1
			c-3.4,0-5.6-2.3-5.6-5.1C25.2,28.4,27.5,26.2,30.9,26.2L30.9,26.2z M60.3,39.8c6.6,0,11.6,4.2,11.6,13.4v17.2H61.8V54.4
			c0-4-1.4-6.7-5.1-6.7c-2.8,0-4.5,1.8-5.2,3.6c-0.3,0.6-0.3,1.5-0.3,2.4v16.8H41.2c0,0,0.1-27.1,0-29.9h10.1v4.2
			C52.6,42.7,55,39.8,60.3,39.8z M51.3,44.7l-0.1,0.2h0.1V44.7z M25.8,40.5h10.1v29.9H25.8V40.5z'/>
	</g>
	</svg>
);

export default SVG;
