import {
  StyledLayout,
  StyledHeader,
  StyledMain,
  StyledNavigation,
} from "./Layout.styled";
import { Favorite } from "../Icons";
import { Piece } from "../Icons";
import { Spotlight } from "../Icons";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Link href="/" aria-label="Homepage">
          Art Gallery
        </Link>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledNavigation>
        <Piece />
        <Spotlight />
        <Favorite />
      </StyledNavigation>
    </StyledLayout>
  );
};

export default Layout;
