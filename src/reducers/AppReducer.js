export function appReducer(componentState, action) {
  switch (action.type) {
    case "products":
      return { ...componentState, products: action.value };
      break;
    case "cart":
      const cartCopy = [...componentState.cart, action.value];
      return {
        ...componentState,
        cart: cartCopy,
        cartValue: cartCopy.reduce((a, b) => {
          return a + b.price * b.quantity;
        }, 0),
      };
      break;
    case "quantity":
      console.log("Quantity", action);
      let modifiedData = [];
      if (action.do === "dec") {
        modifiedData = componentState.cart.map((item) => {
          if (item.id === action.id) {
            item.quantity -= 1;
          }
          return item;
        });
      } else {
        modifiedData = componentState.cart.map((item) => {
          if (item.id === action.id) {
            item.quantity += 1;
          }
          return item;
        });
      }
      return {
        ...componentState,
        cart: modifiedData,
        cartValue: modifiedData.reduce((a, b) => {
          return a + b.price * b.quantity;
        }, 0),
      };
    case "cartOpen":
      return { ...componentState, cartOpen: action.value };
    case "cartValue":
      return { ...componentState, cartValue: action.value };
    default:
      return componentState;
  }
}
