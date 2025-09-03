import config from "@/config";
import axios from "axios";
import api from "./api";

async function createProduct(data) {
  return await api.post(`/api/products`, data);
}

async function deleteProduct(id) {
  return await api.delete(`/api/products/${id}`);
}

async function getProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function updateProduct(id, data) {
  return await api.put(`/api/products/${id}`, data);
}

export {
  createProduct,
  deleteProduct,
  getProducts,
  getProductById,
  updateProduct,
};
