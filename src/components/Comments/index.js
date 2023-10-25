import { StyledWrapper, StyledTitle } from './Comments.styled';

export default function Comments({ comments }) {
	return (
		<StyledWrapper>
			<StyledTitle>Comments</StyledTitle>
			<ul>
				{comments.map((comment, index) => (
					<li key={index}>
						<p>
							<q>{comment}</q>
						</p>
					</li>
				))}
			</ul>
		</StyledWrapper>
	);
}
