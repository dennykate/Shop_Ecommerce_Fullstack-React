export const addToCart = (state = [], action) => {
  switch (action.type) {
    case "Add Data":
      const itemExistInCart = state.find(
        (data) => data.id == action.payload.id
      );

      if (itemExistInCart) {
        console.log("exists");
        const newState = state.map((data) => {
          if (data.id == action.payload.id) {
            data.quantity += action.payload.quantity;
            data.cost += action.payload.cost;
          }
          return data;
        });
        return newState;
      } else {
        return [...state, action.payload];
      }

    case "Increase Quantity":
      return state.map((data) => {
        if (data.id == action.payload.id) {
          data.quantity += 1;
          data.cost = data.data.price * data.quantity;
        }
        return data;
      });

    case "Decrease Quantity":
      return state.map((data) => {
        if (data.id == action.payload.id) {
          data.quantity -= 1;
          data.cost = data.data.price * data.quantity;
        }
        return data;
      });

    case "Remove Item":
      return state.filter((data) => data.id != action.payload.id);

    case "Clear Cart":
      return [];
    default:
      return state;
  }
};
