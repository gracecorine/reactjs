const initState = {
  products: []
}
const counter = (state = initState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      const products = {
        ...state,
        products: action.products
      }
      return products
    case "SET_PRODUCT":
      const product = {
        ...state,
        product: action.product
      }
      return product
    default:
      return state;
  }
};
  
export default counter;