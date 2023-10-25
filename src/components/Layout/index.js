import { StyledLayout, StyledHeader, StyledMain, StyledNavigation } from './Layout.styled';
import Head from 'next/head';
import Navigation from '../Navigation';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
	const pathname = useRouter();
	const scrollRef = useRef();

	useEffect(() => {
		scrollRef.current.scrollTo(0, 0);
	}, [pathname]);
	return (
		<StyledLayout>
			<Head>
				<title>Art Gallery - Spotlight</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://example-apis.vercel.app/api/art' />
				<meta name='description' content='Art Gallery - Spotlight' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<StyledHeader>
				<Link href='/' aria-label='Art Gallery'>
					<h1>Art Gallery</h1>
				</Link>
			</StyledHeader>
			<StyledMain ref={scrollRef}>{children}</StyledMain>
			<Navigation />
		</StyledLayout>
	);
};

export default Layout;
