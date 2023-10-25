import { StyledList, StyledLink, StyledNavigation } from './Navigation.styled';
import { Favorite, Piece, Spotlight } from '../Icons';
import { useRouter } from 'next/router';

export default function Navigation() {
	const router = useRouter();

	return (
		<StyledNavigation>
			<StyledList role='list'>
				<li>
					<StyledLink href='/' $isActive={router.pathname === '/'}>
						<Spotlight />
					</StyledLink>
				</li>
				<li>
					<StyledLink href='/favorites' $isActive={router.pathname === '/favorites'}>
						<Favorite />
					</StyledLink>
				</li>
				<li>
					<StyledLink href='/art-pieces' $isActive={router.pathname === '/art-pieces'}>
						<Piece />
					</StyledLink>
				</li>
			</StyledList>
		</StyledNavigation>
	);
}
