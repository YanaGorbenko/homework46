import axios from 'axios';
import type { Product } from '../types/index';

const api = axios.create({
  baseURL: 'https://dummyjson.com/products',
});

export const getProducts = async (order: 'asc' | 'desc' = 'asc') => {
  const { data } = await api.get<{ products: Product[] }>(
    `?sortBy=title&order=${order}`,
    {
      params: { limit: 20 },
    },
  );

  return data.products;
};

export const getProductById = async (id: string) => {
  const { data } = await api.get<Product>(`/${id}`);
  return data;
};
