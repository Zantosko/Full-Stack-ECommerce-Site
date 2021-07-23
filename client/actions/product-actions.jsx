import { GET_PRODUCTS } from '../action-types/product-action-types';
const URL = "https://fakestoreapi.com/products";

export const getProducts = async (disatch) => {
  const products = await fetch(URL);
  const productsJson = await products.json();

  return disatch({ type: GET_PRODUCTS, payload: productsJson })
}