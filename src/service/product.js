import axios from 'axios'

export default class ProductService {
  async getProducts() {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  }

  async getProductByCategory(category) {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return response.data
  }
}
