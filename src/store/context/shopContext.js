import { createContext, useContext, useReducer } from "react";
import { shopReducer, initialState } from "../reducer/shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const value = {
    total: state.total,
    products: state.products,
    addToCart: (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
    removeFromCart: (product) => dispatch({ type: "REMOVE_FROM_CART", payload: product })
  };

  return <ShopContext.Provider value={value}>
              {children}
         </ShopContext.Provider>;
};

const useShop = () => useContext(ShopContext);

export default useShop;
