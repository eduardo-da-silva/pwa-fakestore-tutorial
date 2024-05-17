import { getToken } from 'firebase/messaging'
import { messaging } from '../plugins/firebase'
const vapidKey = import.meta.env.VITE_VAPID_KEY

export default class MessagingService {
  async getToken() {
    // try {
    const currentToken = await getToken(messaging, { vapidKey })
    return currentToken ? currentToken : ''
    // } catch (err) {
    //   console.log('An error occurred while retrieving token. ', err)
    //   err.value = err
    // }
  }
}
