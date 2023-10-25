import useSWR from 'swr';

import GlobalStyle from '../components/styles/globals';
import Layout from '@/components/Layout';

const fetcher = async (...args) => {
	const response = await fetch(...args);
	if (!response.ok) {
		throw new Error('Failed to fetch API');
	}
	return response.json();
};

export default function App({ Component, pageProps }) {
	const { data, isLoading, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
	return (
		<Layout>
			<GlobalStyle />
			<Component {...pageProps} pieces={isLoading || error ? [] : data} />
		</Layout>
	);
}
