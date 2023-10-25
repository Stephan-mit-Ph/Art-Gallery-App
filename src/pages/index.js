import Head from 'next/head';

import Spotlight from '@/components/Spotlight';

export default function SpotlightPage({ pieces, artPiecesInfo, onToggleFavorite }) {
	const spotlightPiece = pieces[Math.floor(Math.random() * (pieces.length - 1))];

	return (
		<>
		
			{spotlightPiece && (
				<Spotlight
					image={spotlightPiece.imageSource}
					artist={spotlightPiece.artist}
					isFavorite={artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)?.isFavorite}
					onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
				/>
			)}
		</>
	);
}
