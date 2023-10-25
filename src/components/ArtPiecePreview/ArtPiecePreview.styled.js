import Image from 'next/image';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const StyledImage = styled(motion(Image))`
	object-fit: cover;
`;

export const StyledHover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	color: white;
	padding: 10px;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledInfo = styled.div`
	position: absolute;
	bottom: -30px;
	background-color: rgba(24, 28, 43, 0.8);
	width: 100%;
	padding: 10px 10px;
	height: 70px;
	transition: bottom 0.6s;

	&:hover {
		bottom: 0;
	}

	@media (max-width: 768px) {
		bottom: 0;
	}

	p {
		padding: 5px 0 0 5px;
		margin-bottom: 10px;
		font-size: var(--step--0);
	}
`;
