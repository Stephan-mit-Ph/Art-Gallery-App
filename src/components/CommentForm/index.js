import { StyledForm, StyledLabel, StyledTextarea, StyledButton } from './CommentForm.styled';

export default function CommentForm({ addComment }) {
	function handleSubmit(event) {
		event.preventDefault();
		const { comment } = event.target.elements;
		addComment(comment.value);
		event.target.reset();
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledLabel htmlFor='comment'>Comment</StyledLabel>
			<StyledTextarea id='comment' name='comment' required />
			<StyledButton type='submit'>Add Comment</StyledButton>
		</StyledForm>
	);
}
