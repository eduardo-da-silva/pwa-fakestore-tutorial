importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAVfvqj1wUrjRpdlRoWc_fep474lG2-5Ms',
  authDomain: 'fakestore-tutorial.firebaseapp.com',
  projectId: 'fakestore-tutorial',
  storageBucket: 'fakestore-tutorial.appspot.com',
  messagingSenderId: '341042937156',
  appId: '1:341042937156:web:722a1402ccf2b0d09b2b11',
  measurementId: 'G-NHRFLWXHPC'
})
// Necessary to receive background messages:
const messaging = firebase.messaging()

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log('onBackgroundMessage', m)
})

messaging.onMessage((m) => {
  console.log('onMessage', m)
})
