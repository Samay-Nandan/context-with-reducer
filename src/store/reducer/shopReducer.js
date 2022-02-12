export const initialState = {
    total: 0,
    products: []
};
  
export const shopReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_TO_CART":
        return {
          ...state,
          products: [...state.products, payload],
          total: state.total + payload.price
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          products: state.products.filter((currentProduct) => currentProduct.name !== payload.name),
          total: state.total - payload.price
        };
      default:
        throw new Error(`No case for type ${type} found in shopReducer.`);
    }
  };
  