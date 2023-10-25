import { StyledLayout, StyledHeader, StyledMain, StyledNavigation } from './Layout.styled';
import { Favorite } from '../Icons';
import { Piece } from '../Icons';
import { Spotlight } from '../Icons';
import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<StyledHeader>
				<Link href='/' aria-label='Homepage'>
					Art Gallery
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
				<Link
					href='/'
					aria-label='
      Favorites page'
				>
					<Favorite />
				</Link>
			</StyledNavigation>
		</StyledLayout>
	);
};

export default Layout;
