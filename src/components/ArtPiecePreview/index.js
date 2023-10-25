import {
	StyledImageContainer,
	StyledImage,
	StyledHover,
	StyledInfo,
} from './ArtPiecePreview.styled';
import Link from 'next/link';
import FavoriteButton from '@/components/FavoriteButton';

export default function ArtPiecePreview({
	image,
	title,
	artist,
	slug,
	isFavorite,
	onToggleFavorite,
}) {
	return (
		<StyledImageContainer>
			<FavoriteButton
				isFavorite={isFavorite}
				onToggleFavorite={onToggleFavorite}
				positionAbsolute={true}
			/>
			<StyledImage
				whileHover={{ scale: 1.1 }}
				transition={{ type: 'spring', duration: 1, ease: 'easeInOut' }}
				src={image}
				alt={title}
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				quality={100}
			/>

			<Link href={`/art-pieces/${slug}`}>
				<StyledInfo>
					<p>{title}</p>
					<p>@{artist}</p>
				</StyledInfo>
			</Link>
		</StyledImageContainer>
	);
}
