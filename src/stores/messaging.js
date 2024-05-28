import { ref } from 'vue'
import { defineStore } from 'pinia'

import MessagingService from '@/service/messaging'
const messagingService = new MessagingService()

export const useMessagingStore = defineStore('messaging', () => {
  const token = ref('')

  async function getToken() {
    const permission = await Notification.requestPermission()
    if (permission == 'granted') {
      token.value = await messagingService.getToken()
    } else {
      token.value = 'Erro de acesso'
    }
  }

  return { token, getToken }
})
