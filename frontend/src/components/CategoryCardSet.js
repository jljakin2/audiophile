// third-party
import React from "react";
import styled from "styled-components";

// components
import CategoryCard from "./CategoryCard";

// ===== START OF STYLING =====
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  // 450px
  @media only screen and (max-width: 28.125em) {
    flex-direction: column;
    align-items: stretch;

    width: 100%;
  }
`;
// ===== END OF STYLING =====

const CategoryCardSet = props => {
  const { mt, mr, mb, ml, mobileMenu } = props;

  const style = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
    zIndex: mobileMenu ? "100000" : "1",
  };

  const headphonesImg =
    "https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013263/audiophileAssets/shared/desktop/image-headphones_sxlk3y.png";
  const speakersImg =
    "https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013263/audiophileAssets/shared/desktop/image-speakers_muribd.png";
  const earphonesImg =
    "https://res.cloudinary.com/dpp64ouz9/image/upload/v1623013263/audiophileAssets/shared/desktop/image-earphones_utuna3.png";

  return (
    <CardContainer style={style}>
      <CategoryCard category="headphones" img={headphonesImg} />
      <CategoryCard category="speakers" img={speakersImg} />
      <CategoryCard category="earphones" img={earphonesImg} />
    </CardContainer>
  );
};

// if the mobileMenu prop is not defined, we assume it is not a mobile view of the app
CategoryCardSet.defaultProps = {
  mobileMenu: false,
};

export default CategoryCardSet;
