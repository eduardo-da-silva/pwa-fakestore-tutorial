import axios from 'axios'

export default class CategoryService {
  async getCategories() {
    const response = await axios.get('/categories/')
    return response.data.results
  }
}
