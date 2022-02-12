import styled from "styled-components";
import { products } from "../mockData/products"
import ProductCard from "../components/productCard";

const Products = () => {
  return (
    <>
      <Title>Welcome to DC Clothing Shop</Title>

      <ProductsWrapper>
        {
          products.map((product, index) => <ProductCard key={index} {...product} />)
        }
      </ProductsWrapper>
    </>
  );
};

export default Products;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;
