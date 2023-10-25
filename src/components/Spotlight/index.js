import { StyledImage } from '@/components/StyledImage';
import { StyledImageContainer, StyledWrapper } from './Spotlight.styled';
import FavoriteButton from '@/components/FavoriteButton';

export default function Spotlight({ image, artist, onToggleFavorite, isFavorite }) {
	return (
		<StyledWrapper>
	<h2>Spotlight</h2>
			<StyledImageContainer>
				<FavoriteButton
					isFavorite={isFavorite}
					onToggleFavorite={onToggleFavorite}
					positionAbsolute={true}
				/>
				<StyledImage
					src={image}
					fill
					sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
					alt={`spotlight: ${artist}`}
				/>
			</StyledImageContainer>
			<h3>@{artist}</h3>
		</StyledWrapper>
	);
}
