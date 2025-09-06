import config from "@/config";
import axios from "axios";
import api from "./api";
import formatParams from "@/helpers/formatParams";

async function createProduct(data) {
  return await api.post(`/api/products`, data);
}

async function deleteProduct(id) {
  return await api.delete(`/api/products/${id}`);
}

async function getProducts(searchParams) {
  const query = formatParams(searchParams);

  return await axios.get(`${config.apiUrl}/api/products?${query}`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function getBrands() {
  return await axios.get(`${config.apiUrl}/api/products/brands`);
}

async function getCategories() {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
}

async function updateProduct(id, data) {
  return await api.put(`/api/products/${id}`, data);
}

export {
  createProduct,
  deleteProduct,
  getProducts,
  getBrands,
  getCategories,
  getProductById,
  updateProduct,
};
