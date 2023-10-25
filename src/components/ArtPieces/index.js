import { StyledList } from "./ArtPieces.styled";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <StyledList>
      <h2>Art Pieces</h2>
      {pieces?.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              title={piece.name}
              image={piece.imageSource}
              slug={piece.slug}
              artist={piece.artist}
            />
          </li>
        );
      })}
    </StyledList>
  );
}
