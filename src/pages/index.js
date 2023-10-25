import useSWR from 'swr';

import Spotlight from '@/components/Spotlight';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
	const {
		data: pieces,
		isLoading,
		error,
	} = useSWR('https://example-apis.vercel.app/api/art', fetcher);

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	const spotlightPiece = pieces[Math.floor(Math.random() * (pieces.length - 1))];

	return (
		<>
			<Spotlight image={spotlightPiece.imageSource} artist={spotlightPiece.artist} />
		</>
	);
}
