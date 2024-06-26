import { ref } from 'vue'
import { defineStore } from 'pinia'

import MessagingService from '@/service/messaging'
const messagingService = new MessagingService()

export const useMessagingStore = defineStore('messaging', () => {
  const token = ref('')

  async function getToken() {
    token.value = await messagingService.getToken()
  }

  return { token, getToken }
})
