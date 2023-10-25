import {
	StyledWrapper,
	StyledList,
	StyledBackButton,
	StyledImageContainer,
	StyledImage,
	StyledActionContainer,
} from './ArtPieceDetails.styled';
import CommentForm from '@/components/CommentForm';
import Comments from '@/components/Comments';
import { ArrowLeft } from '@/components/Icons';
import FavoriteButton from '../FavoriteButton';
export default function ArtPiecesDetails({
	image,
	title,
	artist,
	year,
	genre,
	onBack,
	isFavorite,
	onToggleFavorite,
	addComment,
	comments,
}) {
	return (
		<StyledWrapper>
			<StyledActionContainer>
				<StyledBackButton type='button' onClick={onBack} aria-label='navigate back'>
					<ArrowLeft />
				</StyledBackButton>
				<FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
			</StyledActionContainer>
			<h2>{title}</h2>
			<StyledImageContainer>
				<StyledImage
					src={image}
					quality={80}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					alt={`${artist}: ${title}`}
				/>
			</StyledImageContainer>
			<StyledList>
				<li>@{artist}</li>
				<li>{year}</li>
				<li>{genre}</li>
			</StyledList>
			{comments && <Comments comments={comments} />}
			<CommentForm addComment={addComment} />
		</StyledWrapper>
	);
}
