import { StyledImage } from '../StyledImage';
import {
	StyledWrapper,
	StyledList,
	StyledBackButton,
	StyledImageContainer,
} from './ArtPieceDetails.styled';
import { ArrowLeft } from '@/components/Icons';
export default function ArtPiecesDetails({ image, title, artist, year, genre, onBack }) {
	return (
		<StyledWrapper>
			<StyledBackButton type='button' onClick={onBack} aria-label='navigate back'>
				<ArrowLeft />
			</StyledBackButton>
			<h2>{title}</h2>

			<StyledImageContainer>
				<StyledImage
					src={image}
					priority
					fill
					sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
					alt={`${artist}: ${title}`}
				/>
			</StyledImageContainer>
			<p>@{artist}</p>
			<p>Year: {year}</p>
			<p>Genre: {genre}</p>
		</StyledWrapper>
	);
}
