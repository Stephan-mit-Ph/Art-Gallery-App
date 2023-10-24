import {
	StyledImageContainer,
	StyledImage,
	StyledHover,
	StyledInfo,
} from './ArtPiecePreview.styled';

export default function ArtPiecePreview({ image, title, artist }) {
	return (
		<StyledImageContainer>
			<StyledImage
				whileHover={{ scale: 1.1 }}
				transition={{ type: 'spring', duration: 1, ease: 'easeInOut' }}
				src={image}
				alt={title}
				fill
				sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
			/>
			<StyledInfo>
				<p>{title}</p>
				<p>@{artist}</p>
			</StyledInfo>
		</StyledImageContainer>
	);
}
