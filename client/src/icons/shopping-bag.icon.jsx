import React from 'react';

const SVG = ({
  style = {},
  fill = '#ccc',
  width = '100%',
  id = 'shopping-bag-icon',
  viewBox = '0 0 96 96'
}) => (
	<svg
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		viewBox={ viewBox }
		xmlnsXlink='http://www.w3.org/1999/xlink'
		id={ id }
	>
	<g id="XMLID_1_">
		<polygon id="XMLID_3_" points="58.3,36 58.3,36.8 66,36.8 66,73.8 30,73.8 30,36.8 37.7,36.8 58.3,36.8 58.3,36 58.3,35.1
			37.7,35.1 28.2,35.1 28.2,75.5 67.8,75.5 67.8,35.1 58.3,35.1 	"/>
		<path id="XMLID_4_" d="M40.3,41.1V30c0-2.1,0.9-4.1,2.3-5.5c1.4-1.4,3.3-2.3,5.5-2.3c2.1,0,4.1,0.9,5.5,2.3
			c1.4,1.4,2.3,3.3,2.3,5.5v11.2h1.7l0-11.2c0-5.2-4.2-9.5-9.5-9.5c-5.2,0-9.5,4.2-9.5,9.5v11.2H40.3L40.3,41.1z"/>
	</g>
	</svg>
);

export default SVG;
