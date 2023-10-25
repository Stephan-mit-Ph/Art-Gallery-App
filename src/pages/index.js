import Head from 'next/head';

import Spotlight from '@/components/Spotlight';

export default function SpotlightPage({ pieces }) {
	const spotlightPiece = pieces[Math.floor(Math.random() * (pieces.length - 1))];

	return (
		<>
			<Head>
				<title>Art Gallery - Spotlight</title>
			</Head>
			{spotlightPiece && (
				<Spotlight image={spotlightPiece.imageSource} artist={spotlightPiece.artist} />
			)}
		</>
	);
}
