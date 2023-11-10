var initialState = {
  electronics: [],
  jewelery: [],
  mensClothing: [],
  womensClothing: [],
  addtocart: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "electronics":
      state = {
        ...state,
        electronics: action.payload,
      };
      break;
    case "jewelery":
      state = {
        ...state,
        jewelery: action.payload,
      };
      break;
    case "cart":
      state = {
        ...state,
        addtocart: [...state.addtocart, action.payload],
      };
      break;
    case "removecart":
      state = {
        ...state,
        addtocart: state.addtocart.filter(
          (cartdata) => cartdata.id != action.payload.id
        ),
      };
  }
  return state;
};

export default productsReducer;
