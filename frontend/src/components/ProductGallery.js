// third-party
import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

// ===== START OF STYLING =====
const Container = styled.div`
  display: grid;
  grid-template:
    "gallery1 gallery3" 1fr
    "gallery2 gallery3" 1fr
    /1fr 1fr;
  grid-gap: 1.875rem;

  width: 100%;

  // 450px
  @media only screen and (max-width: 28.125em) {
    display: flex;
    flex-direction: column;
  }
`;

const Gallery1 = styled.div`
  border-radius: 0.5rem;

  grid-area: gallery1;
`;

const Gallery2 = styled.div`
  border-radius: 0.5rem;

  grid-area: gallery2;
`;

const Gallery3 = styled.div`
  border-radius: 0.5rem;

  grid-area: gallery3;
`;

const StyledImg = styled.img`
  object-fit: cover;
  object-position: left;

  width: 100%;
  height: 100%;
`;
// ===== END OF STYLING =====

const ProductGallery = ({ slug, gallery, mt, mr, mb, ml }) => {
  // media query for mobile
  const isMobile = useMediaQuery({
    query: "(max-width: 450px)",
  });

  const style = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  // ternary checks for each image so we get the most optimized version of the image from cloudinary
  const firstImage = gallery
    ? isMobile
      ? gallery.first.mobile
      : gallery.first.desktop
    : "";
  const secondImage = gallery
    ? isMobile
      ? gallery.second.mobile
      : gallery.second.desktop
    : "";
  const thirdImage = gallery
    ? isMobile
      ? gallery.third.mobile
      : gallery.third.desktop
    : "";

  return (
    <Container style={style}>
      <Gallery1>
        <StyledImg src={gallery && firstImage} alt={slug}></StyledImg>
      </Gallery1>
      <Gallery2>
        <StyledImg src={gallery && secondImage} alt={slug}></StyledImg>
      </Gallery2>
      <Gallery3>
        <StyledImg src={gallery && thirdImage} alt={slug}></StyledImg>
      </Gallery3>
    </Container>
  );
};

export default ProductGallery;
