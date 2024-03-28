import { ref } from 'vue'
import { defineStore } from 'pinia'

import CategoryService from '@/service/category'
const categoryService = new CategoryService()

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])

  async function getCategories() {
    categories.value = await categoryService.getCategories()
  }

  return { categories, getCategories }
})
