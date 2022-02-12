import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShopProvider } from "./store/context/shopContext";
import Products from "./pages/products";
import Cart from "./pages/cart";

const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
        <BrowserRouter>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </LinksWrapper>
          <Routes>
            <Route path="/" element={ <Products />} />
            <Route path="/cart" element={ <Cart />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </ShopProvider>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
