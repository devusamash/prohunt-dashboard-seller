const initialState = {
  loading: false,
  items: [],
  stocks: [],
  stockUnits: [],
  item: {},
  itemCategories: [],
  message: "",
  success: false,
};
const Stocks = (state = initialState, action) => {
  switch (action.type) {
    case "Items_Loaded_Successfully":
      console.log("Items_Loaded_Successfully");
      return { ...state, items: action.response.data, success:false };

    case "Items_Not_Loaded_Error":
      console.log("Items_Not_Loaded_Error");
      return { ...state, error: action.error, items: [], success:false };
    case "Item_added_Successfully":
      console.log("Item_added_Successfully");
      return { ...state, success:true };
    case "Item_not_added":
      console.log("Item_not_added");
      return { ...state, success: false };
    case "item-categories-loaded":
      console.log("item-categories-loaded");
      console.log(action.response.data);
      return { ...state, itemCategories: action.response.data };
    case "item-categories-not-loaded":
      console.log("item-categories-not-loaded");
      return { ...state };
    case "Stocks_Loaded_Successfully":
      console.log("Stocks_Loaded_Successfully");
      console.log(action.response.data);
      return { ...state, stocks: action.response.data };

    case "Stocks_Not_Loaded_Error":
      console.log("Stocks_Not_Loaded_Error");
      return { ...state, error: action.error, stocks: [] };
    case "Stock_Created_Successfully":
      console.log("Stock_Created_Successfully");
      return { ...state, message: action.message, success: true };

    case "Stock_Not_Created_Error":
      console.log("Stock_Not_Created_Error");
      return { ...state, message: action.message, success: false };
    case "item-loaded":
      console.log("item-loaded");
      console.log(action.response.data);
      return { ...state, item: action.response.data, success: false };
    case "item-not-loaded":
      console.log("item-not-loaded");
      return { ...state, error: action.error, success: false };
    case "Stock-units-loaded":
      console.log("Stock-units-loaded");
      console.log(action.response.data);
      return { ...state, stockUnits: action.response.data };
    case "Stock-units-not-loaded":
      console.log("Stock-units-not-loaded");
      return { ...state, error: action.error };
    default: {
      console.log("default");
      return state;
    }
  }
};

export default Stocks;
