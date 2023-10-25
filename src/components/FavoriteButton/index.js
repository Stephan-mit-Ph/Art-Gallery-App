import {Heart} from '@/components/Icons';
import { StyledButton } from './FavoriteButton.styled';

export default function FavoriteButton({ isFavorite, onToggleFavorite, positionAbsolute = false }) {
	return (
		<StyledButton
			type='button'
			onClick={onToggleFavorite}
			$isFavorite={isFavorite}
			aria-label={isFavorite ? 'unlike' : 'like'}
			$positionAbsolute={positionAbsolute}
		>
			<Heart
             onClick={onToggleFavorite}
             
            />
		</StyledButton>
	);
}
