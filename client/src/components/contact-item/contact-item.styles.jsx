import styled from 'styled-components';

export const ContactItemContainer = styled.div`
	width: 190px;
	height: 304px;
	display: inline-block;
	float: none;
	vertical-align: top;
	margin:auto;
`;

export const ContentContainer = styled.div`
  height: 100%;
	width: 100%
  padding: 0 25px;
  display: grid;
	grid-template-rows: 120px 50px 40px;
  background-color: white;
  opacity: 0.7;
`;

export const ContactItemIcon = styled.a`
	width: 120px;
	height: 120px;
	margin:auto;
	background-color: #ccc;
	border: 1px solid #333;
	border-radius: 1000px;
	transition: all .25s;
	cursor: pointer;

	svg {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: ${({ iconSize }) => `${iconSize}`};
	}
	&:hover {
		background-color: #777;
	}
`;

export const ContactTitle = styled.span`
	margin: 10px auto;
	font-weight: bold;
  font-size: 22px;
  color: #4969e1;
`;

export const ContactSubtitle = styled.a`
	margin: 10px auto;
  font-weight: lighter;
  font-size: 16px;
	cursor: pointer;
`;

ContactItemIcon.displayName = 'ContactItemIcon';
ContactTitle.displayName = 'ContactTitle';
