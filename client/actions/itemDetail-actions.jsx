import { GET_ITEM_DETAILS } from '../action-types/itemDetail-action-types';

export const getItemDetails = async (disatch, id) => {
  const item = await fetch(`https://fakestoreapi.com/products/${id}`);
  const itemJson = await item.json();

  return disatch({ type: GET_ITEM_DETAILS, payload: itemJson })
}