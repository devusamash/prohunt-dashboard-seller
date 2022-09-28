import { Types } from "./ActionsConstants";

export const getItems = (url) => {
  return {
    type: Types.FetchItems,
    url: url,
  };
};

export const getStocks = (url) => {
  return {
    type: Types.FetchStocks,
    url: url,
  };
};

export const createStock = (url, payload) => {
  return {
    type: Types.CreateStock,
    url: url,
    payload: payload,
  };
};

export const fetchitem = (url)=>{
  return{
    type: Types.FetchItem,
    url:url

  }
}

export const createItem = (url, payload) =>{
  return{
    type: Types.addItem,
    url: url,
    payload: payload
  }
}

export const getItemCategory = (url)=>{
  return{
    type: Types.getItemCategory,
    url: url
  }
}

export const getStockUnit = (url)=>{
  return {
    type: Types.fetchStockUnits,
    url: url
  }
}
