import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArtPiecesDetails from '@/components/ArtPiecesDetails';

export default function ArtPiecesDetailsPage({
	pieces,
	artPiecesInfo,
	onToggleFavorite,
	addComment,
}) {
	const [selectedArtPiece, setSelectedArtPiece] = useState(null);
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
	}, [setSelectedArtPiece, pieces, slug]);

	// redirect to 404, in case the piece couldn't be found within 3 seconds
	useEffect(() => {
		let timeoutId;
		if (!selectedArtPiece) {
			timeoutId = setTimeout(() => router.push('/404'), 3000);
		}

		return () => clearTimeout(timeoutId);
	}, [selectedArtPiece, router]);



	if (!selectedArtPiece) {
		return null;
	}

	return (
		<ArtPiecesDetails
			onBack={() => router.back()}
			image={selectedArtPiece.imageSource}
			title={selectedArtPiece.name}
			artist={selectedArtPiece.artist}
			year={selectedArtPiece.year}
			genre={selectedArtPiece.genre}
		/>
	);
}
