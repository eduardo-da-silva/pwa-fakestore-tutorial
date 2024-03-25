import { ref } from 'vue'
import { defineStore } from 'pinia'

import ProductService from '@/service/product'
const productService = new ProductService()

export const useProductStore = defineStore('product', () => {
  const products = ref([])

  async function getProducts() {
    products.value = await productService.getProducts()
  }

  async function getProductsByCategory(category) {
    products.value = await productService.getProductByCategory(category)
  }

  return { products, getProducts, getProductsByCategory }
})
