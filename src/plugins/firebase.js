import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAVfvqj1wUrjRpdlRoWc_fep474lG2-5Ms',
  authDomain: 'fakestore-tutorial.firebaseapp.com',
  projectId: 'fakestore-tutorial',
  storageBucket: 'fakestore-tutorial.appspot.com',
  messagingSenderId: '341042937156',
  appId: '1:341042937156:web:722a1402ccf2b0d09b2b11',
  measurementId: 'G-NHRFLWXHPC'
}

const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app)

export { messaging }
