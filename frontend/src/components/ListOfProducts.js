// third-party
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// components
import PreviewOfProduct from "./PreviewOfProduct";

// redux actions
import { listProductsByCategory } from "../actions/productActions";

// ===== START OF STYLING =====
const Container = styled.section`
  display: grid;
  grid-template:
    1fr
    / 1fr;
  grid-row-gap: 10rem;

  // 450px
  @media only screen and (max-width: 28.125em) {
    grid-row-gap: 7.5rem;
  }
`;
// ===== END OF STYLING =====

const ListOfProducts = props => {
  const { match, mt, mr, mb, ml } = props;

  // dispatch instance to call redux actions later
  const dispatch = useDispatch();

  // getting state to show all products in selected category
  const productCategoryList = useSelector(state => state.productCategoryList);
  const { loading, error, products } = productCategoryList;

  useEffect(() => {
    // use redux action to call api to get all products from category which we grabbed from the parameters in the prop "match"
    dispatch(listProductsByCategory(match.params.category));
  }, [dispatch, match]);

  const style = {
    margin: `${mt ? mt : 0} ${mr ? mr : 0} ${mb ? mb : 0} ${ml ? ml : 0}`,
  };

  // map through products that came back from api call and pass them to PreviewOfProduct component
  const renderedPreviewProducts = products.map((product, index) => {
    return <PreviewOfProduct index={index} {...product} />;
  });

  return (
    <Container style={style}>
      {loading ? "loading" : error ? "error" : renderedPreviewProducts}
    </Container>
  );
};

export default ListOfProducts;
