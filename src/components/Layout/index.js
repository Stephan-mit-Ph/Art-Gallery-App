import { StyledLayout, StyledHeader, StyledMain, StyledNavigation } from './Layout.styled';
import { Favorite } from '../Icons';
import { Piece } from '../Icons';
import Head from 'next/head';
import { Spotlight } from '../Icons';
import Link from 'next/link';

const Layout = ({ children }) => {
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
			<StyledMain>{children}</StyledMain>
			<StyledNavigation>
				<Link href='/art-pieces' aria-label='Art pieces page'>
					<Piece />
				</Link>
				<Link href='/' aria-label='Spotlight Page'>
					<Spotlight />
				</Link>
				<Link href='/favorites' aria-label='Favorites page'>
					<Favorite />
				</Link>
			</StyledNavigation>
		</StyledLayout>
	);
};

export default Layout;
