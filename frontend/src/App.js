// third-party
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

// styled-components
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/theme";

// components
import Home from "./screens/Home";
import CategoryPage from "./screens/CategoryPage";
import ProductPage from "./screens/ProductPage";
import CheckoutPage from "./screens/CheckoutPage";
import NavBar from "./components/NavBar";
import CartPreview from "./components/CartPreview";
import OrderModal from "./components/OrderModal";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AddToCartModal from "./components/AddToCartModal";

const DarkScreen = styled.div`
  background: rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 660%;
`;

const App = () => {
  // access redux state to track the state for showing order modal, darkening screen and the addToCart alert
  const visible = useSelector(state => state.visible);
  const { showModal, darkScreen, showAddToCartModal } = visible;

  return (
    // get the theme for the app so we can use it for styling
    <ThemeProvider theme={theme}>
      {/* apply global style to the app */}
      <GlobalStyle />
      <Router>
        {/* scroll to top component is needed to make sure when screen components change, the app takes the user back to the top of the page */}
        <ScrollToTop />
        {darkScreen && <DarkScreen />}
        {showModal && <OrderModal />}
        {showAddToCartModal && <AddToCartModal />}
        <NavBar />
        <CartPreview />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/category/:category" component={CategoryPage} exact />
          <Route path="/product/:slug" component={ProductPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route>Error</Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
