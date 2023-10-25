import { StyledList } from './ArtPieces.styled';
import ArtPiecePreview from '../ArtPiecePreview';

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite, pageTitle }) {
	return (
		<>
			<StyledList>
				<h2>{pageTitle}</h2>
				{pieces?.map((piece) => {
					return (
						<li key={piece.slug}>
							<ArtPiecePreview
								title={piece.name}
								image={piece.imageSource}
								slug={piece.slug}
								artist={piece.artist}
								isFavorite={
									artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)?.isFavorite
								}
								onToggleFavorite={() => onToggleFavorite(piece.slug)}
							/>
						</li>
					);
				})}
			</StyledList>
		</>
	);
}
