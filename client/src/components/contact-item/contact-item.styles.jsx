import styled, { css } from 'styled-components';

export const ContactItemContainer = styled.div`
	width: 190px;
	display: inline-block;
	align:center;
	float: none;
	vertical-align: top;
`;

export const ContentContainer = styled.div`
  height: 100%;
	width: 100%
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
`;

export const ContactItemIcon = styled.a`
	width: 120px;
	height: 120px;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
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
	margin-top: 20px;
	font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4969e1;
`;

export const ContactSubtitle = styled.a`
	margin-top:10px;
  font-weight: lighter;
  font-size: 16px;
	cursor: pointer;
`;
